import type { ReactNode } from 'react';

export type ChipVariant = 'filled' | 'soft' | 'outline' | 'ghost';
export type ChipColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
export type ChipSize = 'sm' | 'md' | 'lg';

export interface ChipProps {
    /** Text or content of the chip */
    children: ReactNode;
    /** Visual variant */
    variant?: ChipVariant;
    /** Color palette */
    color?: ChipColor;
    /** Size */
    size?: ChipSize;
    /** Leading icon */
    icon?: ReactNode;
    /** Whether to show a close/remove button */
    removable?: boolean;
    /** Callback when removed */
    onRemove?: () => void;
    /** Whether the chip is clickable */
    onClick?: () => void;
    /** Whether the chip is currently selected (for clickable chips) */
    selected?: boolean;
    /** Whether the chip is disabled */
    disabled?: boolean;
    /** Additional CSS class */
    className?: string;
}
