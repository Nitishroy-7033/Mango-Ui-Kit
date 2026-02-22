import React, { forwardRef, useRef } from 'react';
import { cn } from '../../utils/cn';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import type { GridProps, GridCols } from './grid.types';
import './grid.css';

/**
 * Grid component for displaying items in a responsive grid layout.
 * Supports loading states, pagination, and infinite scroll.
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
    (
        {
            children,
            cols = 3,
            gap = '20px',
            rowGap,
            colGap,
            loading = false,
            loadingType = 'shimmer',
            loadingCols,
            loadingGap,
            skeletonCount = 6,
            skeleton,
            pagination,
            onScrollBottom,
            emptyState,
            className,
            style,
            maxHeight,
            bg,
            ...props
        },
        ref
    ) => {
        const scrollRef = useRef<HTMLDivElement>(null);

        const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
            const target = e.currentTarget;
            if (target.scrollHeight - target.scrollTop <= target.clientHeight + 50) {
                onScrollBottom?.();
            }
        };

        const getGridStyles = (isForLoading = false): React.CSSProperties => {
            const activeCols = isForLoading && loadingCols ? loadingCols : cols;
            const activeGap = isForLoading && loadingGap ? loadingGap : gap;

            const styles: React.CSSProperties = {
                gap: activeGap,
                rowGap: rowGap,
                columnGap: colGap,
                backgroundColor: bg,
                ...style,
            };

            if (typeof activeCols === 'number') {
                styles.gridTemplateColumns = `repeat(${activeCols}, minmax(0, 1fr))`;
            } else {
                const responsiveCols = activeCols as GridCols;
                styles.gridTemplateColumns = `repeat(${responsiveCols.base || 1}, minmax(0, 1fr))`;
            }

            return styles;
        };

        const getResponsiveClasses = (isForLoading = false) => {
            const activeCols = isForLoading && loadingCols ? loadingCols : cols;
            if (typeof activeCols === 'number') return '';

            const classes: string[] = [];
            const responsiveCols = activeCols as GridCols;

            if (responsiveCols.xs) classes.push(`xs-cols-${responsiveCols.xs}`);
            if (responsiveCols.sm) classes.push(`sm-cols-${responsiveCols.sm}`);
            if (responsiveCols.md) classes.push(`md-cols-${responsiveCols.md}`);
            if (responsiveCols.lg) classes.push(`lg-cols-${responsiveCols.lg}`);
            if (responsiveCols.xl) classes.push(`xl-cols-${responsiveCols.xl}`);

            return classes.join(' ');
        };

        const renderLoading = () => {
            if (loadingType === 'spinner') {
                return (
                    <div className="mango-grid-loading-container">
                        <Loader2 className="animate-spin" size={32} color="var(--primaryColor)" />
                    </div>
                );
            }

            if (loadingType === 'skeleton' || loadingType === 'shimmer') {
                const skeletons = skeleton
                    ? Array.from({ length: skeletonCount }).map((_, i) => <div key={i}>{skeleton}</div>)
                    : Array.from({ length: skeletonCount }).map((_, i) => (
                        <div key={i} className="mango-skeleton-grid-item">
                            <div className="shimmer-box shimmer-img" />
                            <div className="shimmer-box shimmer-line" />
                            <div className="shimmer-box shimmer-line-sm" />
                        </div>
                    ));

                return (
                    <div
                        className={cn('mango-grid-root', getResponsiveClasses(true))}
                        style={getGridStyles(true)}
                    >
                        {skeletons}
                    </div>
                );
            }

            return null;
        };

        const renderPagination = () => {
            if (!pagination) return null;

            const { current, total, pageSize, onChange } = pagination;
            const totalPages = Math.ceil(total / pageSize);
            const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

            return (
                <div className="mango-grid-pagination">
                    <button
                        className="pagination-btn"
                        disabled={current === 1}
                        onClick={() => onChange(current - 1)}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    {pages.map((p) => (
                        <button
                            key={p}
                            className={cn('pagination-btn', current === p && 'is-active')}
                            onClick={() => onChange(p)}
                        >
                            {p}
                        </button>
                    ))}
                    <button
                        className="pagination-btn"
                        disabled={current === totalPages}
                        onClick={() => onChange(current + 1)}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            );
        };

        const isEmpty = React.Children.count(children) === 0 && !loading;

        // Note: For true responsive behavior without a CSS-in-JS library, we'd need to add media queries to CSS.
        // I will add common responsive column helpers to the CSS file.

        return (
            <div className={cn('mango-grid-container', className)} ref={ref}>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className={cn('mango-grid-scroll-area')}
                    style={{ maxHeight }}
                >
                    <div
                        className={cn('mango-grid-root', getResponsiveClasses())}
                        style={getGridStyles()}
                        {...props}
                    >
                        {children}
                    </div>

                    {loading && renderLoading()}

                    {isEmpty && emptyState && (
                        <div className="mango-grid-empty-state">
                            {emptyState}
                        </div>
                    )}
                </div>

                {renderPagination()}
            </div>
        );
    }
);

Grid.displayName = 'Grid';
