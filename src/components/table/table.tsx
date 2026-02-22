import React, { useState, useMemo, useCallback, useRef, useEffect, type ReactNode } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Search,
  ArrowUpDown,
  MoreVertical
} from 'lucide-react';
import { cn } from '../../utils/cn';
import type { TableProps, TableColumn, SortOrder } from './table.types';
import { Spinner } from '../spinner';
import { Dropdown } from '../dropdown';
import { Badge } from '../badge/badge';
import { Button } from '../button/button';
import { Pagination } from '../pagination/pagination';
import './table.css';

export const Table = <T extends Record<string, any>>({
  columns,
  dataSource,
  loading = false,
  rowSelection,
  pagination,
  title,
  description,
  badgeContent,
  badgeVariant = 'secondary',
  headerActions = [],
  showHeader = false, // Default to false for backward compatibility
  showFooter = false, // Default to false for backward compatibility
  showPageCount = true,
  showPaginationLabels = true,
  footer,
  infiniteScroll = false,
  scrollThreshold = 0.8,
  onLoadMore,
  hasMore = false,
  rowKey,
  stickyHeader = false,
  height,
  emptyText = 'No Data Available',
  variant = 'default',
  size = 'md',
  colors,
  onRow,
  className = '',
  style,
}: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; order: SortOrder } | null>(null);
  const [searchQueries, setSearchQueries] = useState<Record<string, string>>({});
  const [activeSearches, setActiveSearches] = useState<Record<string, boolean>>({});

  const scrollRef = useRef<HTMLDivElement>(null);

  // Helper to get row key
  const getRowKey = useCallback((record: T, index: number) => {
    if (typeof rowKey === 'function') return rowKey(record);
    return record[rowKey] || index;
  }, [rowKey]);

  // Flatten columns for body rendering
  const getFlattenedColumns = (cols: TableColumn<T>[]): TableColumn<T>[] => {
    const flattened: TableColumn<T>[] = [];
    cols.forEach(col => {
      if (col.children) {
        flattened.push(...getFlattenedColumns(col.children));
      } else {
        flattened.push(col);
      }
    });
    return flattened;
  };

  const flattenedColumns = useMemo(() => getFlattenedColumns(columns), [columns]);

  // Handle header rows (for merged headers)
  const getHeaderRows = (cols: TableColumn<T>[]): TableColumn<T>[][] => {
    const rows: TableColumn<T>[][] = [];

    const fillRows = (currentCols: TableColumn<T>[], depth: number) => {
      if (!rows[depth]) rows[depth] = [];

      currentCols.forEach(col => {
        rows[depth].push(col);
        if (col.children) {
          fillRows(col.children, depth + 1);
        }
      });
    };

    fillRows(cols, 0);
    return rows;
  };

  const headerRows = useMemo(() => getHeaderRows(columns), [columns]);

  // Calculate colSpan/rowSpan for headers
  const getColSpan = (col: TableColumn<T>): number => {
    if (!col.children) return 1;
    return col.children.reduce((acc, child) => acc + getColSpan(child), 0);
  };

  const maxDepth = headerRows.length;

  const getRowSpan = (col: TableColumn<T>, depth: number): number => {
    if (col.children) return 1;
    return maxDepth - depth;
  };

  // Sorting & Filtering Logic
  const handleSort = (col: TableColumn<T>) => {
    if (!col.sortable || !col.dataIndex) return;

    let order: SortOrder = 'asc';
    if (sortConfig?.key === col.dataIndex) {
      if (sortConfig.order === 'asc') order = 'desc';
      else if (sortConfig.order === 'desc') order = null;
    }

    setSortConfig(order ? { key: col.dataIndex, order } : null);
  };

  // ── Filtering & Searching ────────────────────────────────
  const processedData = useMemo(() => {
    let result = [...dataSource];

    // Apply Searches
    Object.entries(searchQueries).forEach(([key, query]) => {
      if (!query) return;
      result = result.filter(item => {
        const value = item[key];
        return String(value).toLowerCase().includes(query.toLowerCase());
      });
    });

    // Apply Sorting
    if (sortConfig) {
      result.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];

        if (valA < valB) return sortConfig.order === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.order === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [dataSource, searchQueries, sortConfig]);

  // ── Sticky Offset Calculations ──────────────────────────
  const getStickyOffsets = useMemo(() => {
    const leftOffsets: Record<string, number> = {};
    const rightOffsets: Record<string, number> = {};

    let currentLeft = rowSelection ? 48 : 0;
    flattenedColumns.forEach((col) => {
      if (col.fixed === 'left' || col.fixed === true) {
        const key = col.key || (col.dataIndex as string);
        leftOffsets[key] = currentLeft;
        currentLeft += Number(col.width) || 150;
      }
    });

    let currentRight = 0;
    [...flattenedColumns].reverse().forEach((col) => {
      if (col.fixed === 'right') {
        const key = col.key || (col.dataIndex as string);
        rightOffsets[key] = currentRight;
        currentRight += Number(col.width) || 150;
      }
    });

    return { left: leftOffsets, right: rightOffsets };
  }, [flattenedColumns, rowSelection]);

  // Selection Logic
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!rowSelection) return;
    if (e.target.checked) {
      const allKeys = dataSource.map((record, i) => getRowKey(record, i));
      rowSelection.onChange(allKeys, dataSource);
    } else {
      rowSelection.onChange([], []);
    }
  };

  const handleSelectRow = (record: T, index: number) => {
    if (!rowSelection) return;
    const key = getRowKey(record, index);
    const isSelected = rowSelection.selectedRowKeys.includes(key);

    let nextKeys: (string | number)[];
    if (isSelected) {
      nextKeys = rowSelection.selectedRowKeys.filter(k => k !== key);
    } else {
      nextKeys = [...rowSelection.selectedRowKeys, key];
    }

    const nextRows = dataSource.filter((item, i) => nextKeys.includes(getRowKey(item, i)));
    rowSelection.onChange(nextKeys, nextRows);
  };

  // Infinite Scroll Observer
  useEffect(() => {
    if (!infiniteScroll || !onLoadMore || !hasMore || loading) return;

    const options = {
      root: scrollRef.current,
      rootMargin: '20px',
      threshold: scrollThreshold,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const sentinel = document.getElementById('table-sentinel');
    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, [infiniteScroll, onLoadMore, hasMore, loading, scrollThreshold]);

  // Main UI components
  const renderHeaderCell = (col: TableColumn<T>, depth: number) => {
    const colSpan = getColSpan(col);
    const rowSpan = getRowSpan(col, depth);
    const isSortable = col.sortable && !!col.dataIndex;
    const isSorted = sortConfig?.key === col.dataIndex;
    const colKey = col.key || (col.dataIndex as string);
    const isFixedLeft = col.fixed === 'left' || col.fixed === true;
    const isFixedRight = col.fixed === 'right';

    return (
      <th
        key={colKey || depth}
        colSpan={colSpan}
        rowSpan={rowSpan}
        className={cn(
          'table-header-cell',
          isSortable && 'is-sortable',
          isFixedLeft && 'is-fixed-left',
          isFixedRight && 'is-fixed-right',
          activeSearches[col.dataIndex!] && 'search-active',
          col.className
        )}
        style={{
          ...col.style,
          width: col.width,
          textAlign: col.align || 'left',
          left: isFixedLeft ? getStickyOffsets.left[colKey] : undefined,
          right: isFixedRight ? getStickyOffsets.right[colKey] : undefined,
        }}
        onClick={() => handleSort(col)}
      >
        <div className="header-cell-content">
          <span className="header-title">{col.title}</span>

          <div className="header-actions">
            {isSortable && (
              <span className={cn('sort-icon', isSorted && 'active')}>
                {sortConfig?.order === 'asc' ? <ArrowUp size={12} /> :
                  sortConfig?.order === 'desc' ? <ArrowDown size={12} /> :
                    <ArrowUpDown size={12} />}
              </span>
            )}

            {col.searchable && (
              <span
                className="action-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSearches(prev => ({ ...prev, [col.dataIndex!]: !prev[col.dataIndex!] }));
                }}
              >
                <Search size={12} />
              </span>
            )}

            {col.headerWidgets}
          </div>
        </div>

        {col.searchable && activeSearches[col.dataIndex!] && (
          <div className="header-search-popover" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              className="header-search-input"
              placeholder={`Search ${col.title}...`}
              autoFocus
              value={searchQueries[col.dataIndex!] || ''}
              onChange={e => setSearchQueries(prev => ({ ...prev, [col.dataIndex!]: e.target.value }))}
            />
          </div>
        )}
      </th>
    );
  };

  const renderPagination = () => {
    if (pagination === false || !pagination) return null;

    const { current = 1, pageSize = 10, total = 0, showSizeChanger = true } = pagination;
    const totalPages = Math.ceil(total / pageSize);

    return (
      <div className="table-pagination">
        <div className="pagination-info">
          Showing {((current - 1) * pageSize) + 1} to {Math.min(current * pageSize, total)} of {total} items
        </div>

        <div className="pagination-controls">
          <button
            className="page-btn"
            disabled={current <= 1}
            onClick={() => pagination.onChange?.(current - 1, pageSize)}
          >
            <ChevronLeft size={16} />
          </button>

          <div className="page-numbers">
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => (
              <button
                key={i}
                className={cn('page-num', current === (i + 1) && 'active')}
                onClick={() => pagination.onChange?.(i + 1, pageSize)}
              >
                {i + 1}
              </button>
            ))}
            {totalPages > 5 && <span className="page-ellipsis">...</span>}
          </div>

          <button
            className="page-btn"
            disabled={current >= totalPages}
            onClick={() => pagination.onChange?.(current + 1, pageSize)}
          >
            <ChevronRight size={16} />
          </button>

          {showSizeChanger && (
            <Dropdown
              size="sm"
              variant="outline"
              placement="top"
              className="page-size-dropdown"
              value={String(pageSize)}
              onChange={(val) => pagination.onShowSizeChange?.(current, Number(val))}
              options={[10, 20, 50, 100].map(s => ({
                id: String(s),
                name: `${s} / page`
              }))}
            />
          )}
        </div>
      </div>
    );
  };

  // ── Card / DataTable Rendering ─────────────────────────
  const renderTableCardHeader = () => {
    if (!showHeader) return null;
    if (!title && !badgeContent && headerActions.length === 0) return null;

    return (
      <div className="mango-table-card-header">
        <div className="header-left">
          <div className="title-row">
            {title && <h3 className="table-card-title">{title}</h3>}
            {badgeContent && (
              <Badge variant={badgeVariant} size="sm" className="title-badge">
                {badgeContent}
              </Badge>
            )}
          </div>
          {description && <p className="table-card-description">{description}</p>}
        </div>
        <div className="header-right">
          <div className="action-group">
            {headerActions.map((action) => (
              <Button
                key={action.id}
                variant={action.variant || 'outline'}
                size="sm"
                icon={action.icon}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            ))}
          </div>
          <button className="header-more-btn">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    );
  };

  const renderTableCardFooter = () => {
    if (footer) return <div className="mango-table-card-footer">{footer}</div>;
    if (!showFooter || pagination === false || !pagination) return null;

    const { current = 1, pageSize = 10, total = 0 } = pagination;
    const totalPages = Math.ceil(total / pageSize);

    return (
      <div className="mango-table-card-footer">
        <div className="footer-left">
          {showPageCount && (
            <span className="page-count-text">
              Page {current} of {totalPages}
            </span>
          )}
        </div>
        <div className="footer-right">
          <Pagination
            currentPage={current}
            totalPages={totalPages}
            onPageChange={(page) => pagination.onChange?.(page, pageSize)}
            showLabels={showPaginationLabels}
            variant="modern"
            size="sm"
            showFirstLast={false}
            labels={{
              prev: <span className="prev-next-text">Previous</span>,
              next: <span className="prev-next-text">Next</span>
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={cn(
        'mango-table-container',
        `table-variant-${variant}`,
        `table-size-${size}`,
        stickyHeader && 'sticky-header',
        (showHeader || showFooter) && 'is-card-layout',
        className
      )}
      style={{
        ...style,
        '--table-header-bg': colors?.headerBg,
        '--table-header-color': colors?.headerColor,
        '--table-row-bg': colors?.rowBg,
        '--table-row-hover-bg': colors?.rowHoverBg,
        '--table-border-color': colors?.borderColor,
        '--table-text-color': colors?.textColor,
      } as any}
    >
      {renderTableCardHeader()}

      <div
        className="table-scroll-wrapper"
        ref={scrollRef}
        style={{ height }}
      >
        <table className="mango-table">
          <thead>
            {headerRows.map((row, i) => (
              <tr key={i}>
                {i === 0 && rowSelection && (
                  <th
                    rowSpan={headerRows.length}
                    className="table-header-cell selection-cell is-fixed-left"
                    style={{ left: 0 }}
                  >
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={rowSelection.selectedRowKeys.length === dataSource.length && dataSource.length > 0}
                      />
                    </div>
                  </th>
                )}
                {row.map(col => renderHeaderCell(col, i))}
              </tr>
            ))}
          </thead>

          <tbody className="table-body">
            {processedData.length > 0 ? (
              processedData.map((record, rowIndex) => (
                <tr
                  key={getRowKey(record, rowIndex)}
                  className="table-row"
                  {...(onRow ? onRow(record, rowIndex) : {})}
                >
                  {rowSelection && (
                    <td className="table-cell selection-cell is-fixed-left" style={{ left: 0 }}>
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          checked={rowSelection.selectedRowKeys.includes(getRowKey(record, rowIndex))}
                          onChange={() => handleSelectRow(record, rowIndex)}
                        />
                      </div>
                    </td>
                  )}
                  {flattenedColumns.map((col, colIndex) => {
                    const value = col.dataIndex ? record[col.dataIndex] : undefined;
                    const colKey = col.key || (col.dataIndex as string);
                    const isFixedLeft = col.fixed === 'left' || col.fixed === true;
                    const isFixedRight = col.fixed === 'right';

                    return (
                      <td
                        key={colKey || colIndex}
                        className={cn(
                          'table-cell',
                          isFixedLeft && 'is-fixed-left',
                          isFixedRight && 'is-fixed-right',
                          col.className
                        )}
                        style={{
                          ...col.style,
                          textAlign: col.align || 'left',
                          left: isFixedLeft ? getStickyOffsets.left[colKey] : undefined,
                          right: isFixedRight ? getStickyOffsets.right[colKey] : undefined,
                        }}
                      >
                        {col.render ? col.render(value, record, rowIndex) : (value as ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : !loading && (
              <tr>
                <td colSpan={flattenedColumns.length + (rowSelection ? 1 : 0)} className="table-empty-cell">
                  {emptyText}
                </td>
              </tr>
            )}

            {loading && (
              <tr>
                <td colSpan={flattenedColumns.length + (rowSelection ? 1 : 0)} className="table-loading-cell">
                  <div className="loading-overlay">
                    <Spinner />
                    <span>Loading data...</span>
                  </div>
                </td>
              </tr>
            )}
            <tr id="table-sentinel" style={{ height: '1px' }} />
          </tbody>
        </table>
      </div>

      {renderTableCardFooter()}
      {(!showHeader && !showFooter) && renderPagination()}
    </div>
  );
};
