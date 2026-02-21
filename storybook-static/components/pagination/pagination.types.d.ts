export type PaginationVariant = 'classic' | 'modern' | 'pills' | 'minimal' | 'simple' | 'ghost';
export type PaginationSize = 'sm' | 'md' | 'lg';
export interface PaginationProps {
    /** Current active page (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Visual style variant */
    variant?: PaginationVariant;
    /** Size of pagination buttons */
    size?: PaginationSize;
    /** Number of pages to show around current page */
    siblingCount?: number;
    /** Whether to show "First" and "Last" buttons */
    showFirstLast?: boolean;
    /** Whether to show "Prev" and "Next" text labels */
    showLabels?: boolean;
    /** Custom labels for buttons */
    labels?: {
        first?: React.ReactNode;
        last?: React.ReactNode;
        prev?: React.ReactNode;
        next?: React.ReactNode;
    };
    /** Whether the component is disabled */
    disabled?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Horizontal alignment */
    align?: 'left' | 'center' | 'right';
    /** Custom accent color */
    color?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
