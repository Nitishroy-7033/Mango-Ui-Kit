import React, { forwardRef, useRef } from 'react';
import { cn } from '../../utils/cn';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import type { ListProps, ListItemProps } from './list.types';
import './list.css';

/**
 * ListItem component for individual entries in a List.
 */
export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
    (
        {
            title,
            description,
            iconStart,
            iconEnd,
            onClick,
            active = false,
            disabled = false,
            className,
            style,
            p,
            hoverEffect = 'background',
            bg,
            withBorder,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'mango-list-item',
                    active && 'is-active',
                    disabled && 'is-disabled',
                    hoverEffect !== 'none' && `hover-${hoverEffect}`,
                    withBorder && 'has-border',
                    className
                )}
                onClick={!disabled ? onClick : undefined}
                style={{
                    padding: p,
                    backgroundColor: bg,
                    ...style,
                }}
                {...props}
            >
                {iconStart && <div className="mango-list-item-start">{iconStart}</div>}

                <div className="mango-list-item-content">
                    {title && <div className="mango-list-item-title">{title}</div>}
                    {description && <div className="mango-list-item-description">{description}</div>}
                </div>

                {iconEnd && <div className="mango-list-item-end">{iconEnd}</div>}
            </div>
        );
    }
);

ListItem.displayName = 'ListItem';

/**
 * List component for displaying a set of items with loading, pagination, and scroll support.
 */
export const List = forwardRef<HTMLDivElement, ListProps>(
    (
        {
            children,
            header,
            footer,
            gap,
            withDividers = true,
            maxHeight,
            loading = false,
            loadingType = 'spinner',
            skeletonCount = 3,
            pagination,
            onScrollBottom,
            emptyState,
            fullWidth = true,
            bg,
            className,
            style,
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

        const renderLoading = () => {
            if (loadingType === 'spinner') {
                return (
                    <div className="mango-list-loading-overlay">
                        <Loader2 className="animate-spin" size={24} color="var(--primaryColor)" />
                    </div>
                );
            }

            if (loadingType === 'skeleton' || loadingType === 'shimmer') {
                return Array.from({ length: skeletonCount }).map((_, i) => (
                    <div key={i} className="mango-skeleton-item">
                        <div className="shimmer-box shimmer-icon" />
                        <div className="mango-list-item-content">
                            <div className="shimmer-box shimmer-title" />
                            <div className="shimmer-box shimmer-desc" />
                        </div>
                    </div>
                ));
            }

            return null;
        };

        const renderPagination = () => {
            if (!pagination || pagination.type === 'infinite') return null;

            const { current, total, pageSize, onChange } = pagination;
            const totalPages = Math.ceil(total / pageSize);
            const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

            return (
                <div className="mango-list-pagination">
                    <button
                        className="pagination-btn"
                        disabled={current === 1}
                        onClick={() => onChange(current - 1)}
                    >
                        <ChevronLeft size={16} />
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
                        <ChevronRight size={16} />
                    </button>
                </div>
            );
        };

        const isEmpty = React.Children.count(children) === 0 && !loading;

        return (
            <div
                ref={ref}
                className={cn(
                    'mango-list-container',
                    fullWidth && 'is-full-width',
                    withDividers && 'has-dividers',
                    className
                )}
                style={{
                    gap,
                    backgroundColor: bg,
                    ...style
                }}
                {...props}
            >
                {header && <div className="mango-list-header">{header}</div>}

                <div
                    ref={scrollRef}
                    className="mango-list-scroll-area"
                    style={{ maxHeight }}
                    onScroll={handleScroll}
                >
                    {children}

                    {loading && renderLoading()}

                    {isEmpty && emptyState && (
                        <div className="mango-list-empty-state">
                            {emptyState}
                        </div>
                    )}
                </div>

                {pagination && renderPagination()}

                {footer && <div className="mango-list-footer">{footer}</div>}
            </div>
        );
    }
);

List.displayName = 'List';
