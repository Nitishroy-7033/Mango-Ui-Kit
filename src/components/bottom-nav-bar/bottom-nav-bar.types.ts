import React from 'react';

export type BottomNavVariant =
    | 'classic'
    | 'floating'
    | 'bubble'
    | 'active-pill'
    | 'indicator-top'
    | 'indicator-bottom';

export type BottomNavPosition = 'bottom' | 'top' | 'left' | 'right';

export interface BottomNavItem {
    id: string | number;
    label: string;
    icon: React.ReactNode;
    /** Whether this item is a special call-to-action (center button style) */
    isCTA?: boolean;
    onClick?: (id: string | number) => void;
}

export interface BottomNavigationBarProps {
    items: BottomNavItem[];
    /** Active item ID */
    value?: string | number;
    /** Default active item ID for uncontrolled mode */
    defaultValue?: string | number;
    /** Callback when an item is selected */
    onChange?: (id: string | number) => void;
    /** Visual style variant */
    variant?: BottomNavVariant;
    /** Screen position */
    position?: BottomNavPosition;
    /** Whether to show labels below icons */
    showLabels?: boolean;
    /** Whether to only show labels for the active item */
    activeLabelOnly?: boolean;
    /** Custom brand primary color */
    color?: string;
    /** Custom height (horizontal) or width (vertical) */
    size?: string | number;
    /** Custom shadow */
    shadow?: string;
    /** Border radius for floating variant */
    radius?: string | number;
    /** Space between items */
    gap?: string | number;
    /** Background color */
    bg?: string;
    /** 
     * Main axis alignment (horizontal in top/bottom, vertical in left/right).
     * Defaults to 'center' for bars and 'start' for sidebars.
     */
    mainAxisAlignment?: 'start' | 'end' | 'center' | 'spaceBetween' | 'around' | 'evenly';
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Z-index of the bar */
    zIndex?: number;
    /** Whether to add a blur effect (glassmorphism) */
    blur?: boolean;
}
