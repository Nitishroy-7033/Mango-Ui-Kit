import type React from 'react';

export interface ListItemProps {
    /** Main title text or element */
    title?: React.ReactNode;
    /** Subtitle or description text/element */
    description?: React.ReactNode;
    /** Content to show at the start (usually an icon, avatar, or thumbnail) */
    iconStart?: React.ReactNode;
    /** Content to show at the end (usually an icon, button, or badge) */
    iconEnd?: React.ReactNode;
    /** Click handler for the whole item */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** Whether the item is currently selected/active */
    active?: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Custom padding for the item */
    p?: string | number;
    /** Hover effect type */
    hoverEffect?: 'none' | 'background' | 'scale' | 'glow';
    /** Custom background color */
    bg?: string;
    /** Border between items (handled by List parent if needed, or individually) */
    withBorder?: boolean;
}

export type ListLoadingType = 'none' | 'spinner' | 'skeleton' | 'shimmer';

export interface ListProps {
    /** List items as children (usually <ListItem />) */
    children?: React.ReactNode;
    /** Optional header element */
    header?: React.ReactNode;
    /** Optional footer element */
    footer?: React.ReactNode;
    /** Space between list items */
    gap?: string | number;
    /** Whether to show borders between items */
    withDividers?: boolean;
    /** Max height of the list (to enable scrolling) */
    maxHeight?: string | number;
    /** Current loading state */
    loading?: boolean;
    /** Type of loading animation */
    loadingType?: ListLoadingType;
    /** Number of skeleton items to show when loading */
    skeletonCount?: number;
    /** Pagination configuration */
    pagination?: {
        current: number;
        total: number;
        pageSize: number;
        onChange: (page: number) => void;
        type?: 'numeric' | 'infinite';
    };
    /** Callback when scrolled to bottom (for infinite scroll) */
    onScrollBottom?: () => void;
    /** Empty state message or element */
    emptyState?: React.ReactNode;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Full width container */
    fullWidth?: boolean;
    /** Custom background color */
    bg?: string;
}
