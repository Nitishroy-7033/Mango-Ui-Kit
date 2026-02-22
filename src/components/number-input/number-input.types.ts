import type React from 'react';

export type NumberInputSize = 'sm' | 'md' | 'lg';

export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    /** Current value */
    value?: number;
    /** Default value for uncontrolled mode */
    defaultValue?: number;
    /** Callback when value changes */
    onChange?: (value: number) => void;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment/decrement */
    step?: number;
    /** Size variant */
    size?: NumberInputSize;
    /** Whether the input is in an error state */
    error?: boolean;
    /** Error message to display below */
    errorText?: string;
    /** Label to display above */
    label?: string;
    /** Prefix icon or character */
    iconPrefix?: React.ReactNode;
    /** Suffix icon or character */
    iconSuffix?: React.ReactNode;
    /** Whether to hide the controls (+/-) */
    hideControls?: boolean;
    /** Full width container */
    fullWidth?: boolean;
    /** Custom class for container */
    className?: string;
    /** Custom class for the input element */
    inputClassName?: string;
}
