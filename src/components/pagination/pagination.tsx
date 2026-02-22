import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { PaginationProps } from './pagination.types';
import './pagination.css';

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    variant = 'modern',
    size = 'md',
    siblingCount = 1,
    showFirstLast = true,
    showLabels = false,
    labels,
    disabled = false,
    className = '',
    align = 'center',
    color,
    style,
}) => {
    // Generate page numbers logic
    const paginationRange = useMemo(() => {
        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, 'DOTS', totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = Array.from(
                { length: rightItemCount },
                (_, i) => totalPages - rightItemCount + i + 1
            );
            return [firstPageIndex, 'DOTS', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = Array.from(
                { length: rightSiblingIndex - leftSiblingIndex + 1 },
                (_, i) => leftSiblingIndex + i
            );
            return [firstPageIndex, 'DOTS', ...middleRange, 'DOTS', lastPageIndex];
        }

        return [];
    }, [totalPages, siblingCount, currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages && !disabled) {
            onPageChange(page);
        }
    };

    if (totalPages <= 1) return null;

    const customStyle = {
        ...style,
        ...(color ? { '--pagination-active-bg': color } : {}),
    } as React.CSSProperties;

    return (
        <nav
            className={cn('mango-pagination', `is-${variant}`, `size-${size}`, `align-${align}`, className)}
            style={customStyle}
            aria-label="Pagination"
        >
            <ul className="pagination-list">
                {/* First Page */}
                {showFirstLast && (
                    <li className="pagination-item">
                        <button
                            className="pagination-btn nav-btn"
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1 || disabled}
                            title="First Page"
                        >
                            {labels?.first || <ChevronsLeft size={size === 'lg' ? 20 : 16} />}
                        </button>
                    </li>
                )}

                {/* Prev Page */}
                <li className="pagination-item">
                    <button
                        className="pagination-btn nav-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1 || disabled}
                        title="Previous Page"
                    >
                        {labels?.prev || <ChevronLeft size={size === 'lg' ? 20 : 16} />}
                        {(showLabels && !labels?.prev) && <span className="btn-text">Prev</span>}
                    </button>
                </li>

                {/* Page Numbers */}
                {paginationRange.map((page, index) => {
                    if (page === 'DOTS') {
                        return (
                            <li key={`dots-${index}`} className="pagination-item dots">
                                <MoreHorizontal size={16} />
                            </li>
                        );
                    }

                    return (
                        <li key={page} className="pagination-item">
                            <button
                                className={cn('pagination-btn page-num', currentPage === page && 'is-active')}
                                onClick={() => handlePageChange(page as number)}
                                disabled={disabled}
                                aria-current={currentPage === page ? 'page' : undefined}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}

                {/* Next Page */}
                <li className="pagination-item">
                    <button
                        className="pagination-btn nav-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages || disabled}
                        title="Next Page"
                    >
                        {(showLabels && !labels?.next) && <span className="btn-text">Next</span>}
                        {labels?.next || <ChevronRight size={size === 'lg' ? 20 : 16} />}
                    </button>
                </li>

                {/* Last Page */}
                {showFirstLast && (
                    <li className="pagination-item">
                        <button
                            className="pagination-btn nav-btn"
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages || disabled}
                            title="Last Page"
                        >
                            {labels?.last || <ChevronsRight size={size === 'lg' ? 20 : 16} />}
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

Pagination.displayName = 'Pagination';
