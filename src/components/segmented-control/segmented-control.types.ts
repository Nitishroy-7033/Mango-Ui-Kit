import React from 'react';

export type SegmentedControlSize = 'sm' | 'md' | 'lg';
export type SegmentedControlVariant = 'pill' | 'rectangle';

export interface SegmentedControlOption {
    label: React.ReactNode;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export interface SegmentedControlProps {
    /** Array of options */
    options: SegmentedControlOption[];
    /** Selected value */
    value?: string;
    /** Default selected value */
    defaultValue?: string;
    /** Callback when value changes */
    onChange?: (value: string) => void;
    /** Size of the control */
    size?: SegmentedControlSize;
    /** Visual variant */
    variant?: SegmentedControlVariant;
    /** Whether the control takes full width */
    fullWidth?: boolean;
    /** Color of the active indicator */
    color?: string;
    /** Disabled state for the entire control */
    disabled?: boolean;
    /** Class name for the container */
    className?: string;
    /** Style object */
    style?: React.CSSProperties;
}
