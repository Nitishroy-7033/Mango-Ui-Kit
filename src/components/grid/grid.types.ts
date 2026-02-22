import type React from 'react';

export type GridBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridCols {
    base?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

export type GridLoadingType = 'none' | 'spinner' | 'skeleton' | 'shimmer';

export interface GridProps {
    /** Grid items as children */
    children?: React.ReactNode;
    /** Number of columns. Can be a single number or a responsive object */
    cols?: number | GridCols;
    /** Gap between grid items */
    gap?: string | number;
    /** Horizontal gap between grid items */
    rowGap?: string | number;
    /** Vertical gap between grid items */
    colGap?: string | number;
    /** Whether to show loading state */
    loading?: boolean;
    /** Type of loading animation */
    loadingType?: GridLoadingType;
    /** Number of columns specifically for the loading state */
    loadingCols?: number | GridCols;
    /** Gap specifically for loading state skeletons */
    loadingGap?: string | number;
    /** Number of skeleton items to show when loading */
    skeletonCount?: number;
    /** Custom skeleton element */
    skeleton?: React.ReactNode;
    /** Pagination configuration */
    pagination?: {
        current: number;
        total: number;
        pageSize: number;
        onChange: (page: number) => void;
    };
    /** Callback when scrolled to bottom (for infinite scroll) */
    onScrollBottom?: () => void;
    /** Empty state message or element */
    emptyState?: React.ReactNode;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Max height for scrollable grid */
    maxHeight?: string | number;
    /** Custom background color */
    bg?: string;
}
