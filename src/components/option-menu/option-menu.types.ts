import type React from 'react';

export type MenuPlacement =
    | 'bottom-start' | 'bottom-end' | 'bottom-center'
    | 'top-start' | 'top-end' | 'top-center'
    | 'left-start' | 'left-end' | 'left-center'
    | 'right-start' | 'right-end' | 'right-center';

export type TriggerType = 'click' | 'hover';

export interface MenuOption {
    id: string | number;
    label: string;
    /** Icon at the start of the item */
    icon?: React.ReactNode;
    /** Content at the end of the item (e.g. shortcut Ctrl+C) */
    rightSection?: React.ReactNode;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Whether the item is danger/destructive */
    variant?: 'default' | 'danger' | 'success';
    /** Submenu items */
    children?: MenuOption[];
    /** Click handler for the item */
    onClick?: (id: string | number) => void;
    /** Whether this item is a divider */
    isDivider?: boolean;
}

export interface OptionMenuProps {
    /** Element that triggers the menu */
    trigger: React.ReactElement;
    /** Menu items configuration */
    options: MenuOption[];
    /** Preferred placement of the menu */
    placement?: MenuPlacement;
    /** Type of trigger interaction */
    triggerType?: TriggerType;
    /** Whether the menu is currently open (controlled) */
    opened?: boolean;
    /** Callback when menu opens/closes */
    onOpenedChange?: (opened: boolean) => void;
    /** Whether to close menu when an option is clicked */
    closeOnItemClick?: boolean;
    /** Custom width for the menu */
    width?: string | number;
    /** Z-index for the menu */
    zIndex?: number;
    /** Additional CSS class for the menu */
    className?: string;
    /** Whether to use glassmorphism blur */
    blur?: boolean;
    /** Theme override */
    theme?: 'light' | 'dark';
}
