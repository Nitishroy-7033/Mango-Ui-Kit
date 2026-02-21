import { default as React } from '../../../node_modules/react';
export interface SidebarSubItem {
    id: string;
    label: string;
    path?: string;
    badge?: React.ReactNode;
    /** Custom badge color or variant */
    badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}
export interface SidebarItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    path?: string;
    badge?: React.ReactNode;
    badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Nested navigation items */
    subItems?: SidebarSubItem[];
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Whether to hide the item entirely */
    hidden?: boolean;
    /** Whether this is a collaboration item */
    isCollaboration?: boolean;
}
export interface SidebarCategory {
    /** Optional title for the category group */
    title?: string;
    /** Navigation items in this category */
    items: SidebarItem[];
}
export interface SidebarProps {
    /** Logo element shown at the top */
    logo?: React.ReactNode;
    /** Brand name shown next to logo */
    brandName?: string;
    /** Navigation items that stay fixed at the top */
    topCategories?: SidebarCategory[];
    /** Main navigation content grouped by categories (scrollable) */
    categories: SidebarCategory[];
    /** Controlled collapse state */
    collapsed?: boolean;
    /** Whether the sidebar is initially collapsed */
    defaultCollapsed?: boolean;
    /** Callback when collapse state changes */
    onCollapse?: (collapsed: boolean) => void;
    /** Currently active item ID */
    activeId?: string;
    /** Callback when an item is clicked */
    onItemClick?: (id: string, path?: string) => void;
    /** Custom footer element (e.g. User Profile or Logout) */
    footer?: React.ReactNode;
    /** Additional CSS class */
    className?: string;
    /** CSS styles */
    style?: React.CSSProperties;
    /** Whether to show tree lines for sub-items */
    showTreeLines?: boolean;
    /** Width when expanded (default: 280px) */
    width?: number | string;
    /** Width when collapsed (default: 80px) */
    collapsedWidth?: number | string;
    /** Position of the sidebar */
    position?: 'left' | 'right';
    /** Whether to show the collapse toggle button */
    showToggle?: boolean;
    /** Position of the collapse toggle button */
    togglePosition?: 'top' | 'bottom' | 'float';
    /** Custom border radius for the sidebar container */
    borderRadius?: string | number;
    /** Custom border radius for menu items */
    itemBorderRadius?: string | number;
    /** Color scheme/accent for active states and branding */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | string;
    /** Whether the sidebar should be hidden on mobile */
    mobileHidden?: boolean;
}
