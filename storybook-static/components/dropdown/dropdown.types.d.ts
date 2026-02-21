import { ReactNode, ComponentType } from '../../../node_modules/react';
export interface DropdownOption {
    id: string | number;
    name: string;
    icon?: ReactNode;
    details?: string;
    disabled?: boolean;
    group?: string;
    [key: string]: any;
}
export type DropdownTrigger = 'click' | 'hover' | 'contextMenu';
export type DropdownVariant = 'default' | 'outline' | 'ghost' | 'plain';
export type DropdownSize = 'sm' | 'md' | 'lg';
export type DropdownPlacement = 'bottom' | 'top';
export interface DropdownProps {
    /** Array of options to display */
    options?: DropdownOption[];
    /** Current selected value(s) */
    value?: string | number | (string | number)[];
    /** Callback when value(s) change */
    onChange?: (value: any) => void;
    /** Label for the dropdown menu header */
    label?: string;
    /** Whether to show the label/header in the menu. Default true if label exists. */
    showLabel?: boolean;
    /** Placeholder when no selection */
    placeholder?: string;
    /** Whether search is enabled */
    searchable?: boolean;
    /** Support for multiple selection */
    multiple?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Whether it's disabled */
    disabled?: boolean;
    /** Trigger type */
    trigger?: DropdownTrigger;
    /** Visual variant */
    variant?: DropdownVariant;
    /** Size of the trigger */
    size?: DropdownSize;
    /** Dropdown placement: top or bottom */
    placement?: DropdownPlacement;
    /** Custom icon for the trigger */
    icon?: ComponentType<{
        size?: number;
        className?: string;
    }>;
    /** Custom footer element */
    footer?: ReactNode;
    /** Custom header element inside the menu */
    header?: ReactNode;
    /** Whether to close the menu upon selection */
    closeOnSelect?: boolean;
    /** Animation duration in ms */
    animationDuration?: number;
    /** Custom content for no options found */
    noOptionsContent?: ReactNode;
    /** Max height of the options list */
    maxHeight?: string | number;
    /** Callback for lazy loading/pagination when scrolled to bottom */
    onLoadMore?: () => void;
    /** Whether there are more items to load */
    hasMore?: boolean;
    /** Scroll threshold (0-1) to trigger onLoadMore. Default 0.8 (80%) */
    loadMoreThreshold?: number;
    /** Custom class for the container */
    className?: string;
    /** Custom class for the menu */
    menuClassName?: string;
    /** Custom style for the container */
    style?: React.CSSProperties;
    /** Custom layout for options */
    renderOption?: (option: DropdownOption, isSelected: boolean) => ReactNode;
}
