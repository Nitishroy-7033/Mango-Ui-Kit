import type React from 'react';

export type SpeedDialDirection = 'up' | 'down' | 'left' | 'right';
export type SpeedDialPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'fixed';

export interface SpeedDialAction {
    /** Unique identifier for the action */
    id: string;
    /** Icon to display in the action button */
    icon: React.ReactNode;
    /** Label/Tooltip to display next to the icon */
    label?: string;
    /** Click handler for the action */
    onClick?: (id: string) => void;
    /** Color or variant of the action button */
    variant?: 'primary' | 'secondary' | 'danger' | 'info' | 'success';
    /** Whether the action is disabled */
    disabled?: boolean;
    /** Optional CSS class for the action item */
    className?: string;
}

export interface SpeedDialProps {
    /** The main trigger button (usually a FAB icon) */
    icon: React.ReactNode;
    /** The icon to show when the dial is open (usually a Close icon) */
    activeIcon?: React.ReactNode;
    /** List of actions to show when opened */
    actions: SpeedDialAction[];
    /** Direction in which actions should expand */
    direction?: SpeedDialDirection;
    /** Common position on screen */
    position?: SpeedDialPosition;
    /** Close when an action is clicked */
    closeOnAction?: boolean;
    /** Whether to show labels next to actions */
    showLabels?: boolean;
    /** Theme color for the main button */
    variant?: 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'black' | 'glass';
    /** Custom offset from screen edges (e.g., '20px') */
    offset?: string | number;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Callback when dial opens/closes */
    onToggle?: (opened: boolean) => void;
}
