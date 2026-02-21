import { default as React } from '../../../node_modules/react';
export type RadioVariant = 'solid' | 'outlined' | 'soft';
export type RadioSize = 'sm' | 'md' | 'lg';
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    /** Visual style variant */
    variant?: RadioVariant;
    /** Size of the radio */
    size?: RadioSize;
    /** Color of the radio */
    color?: string;
    /** Label for the radio */
    label?: React.ReactNode;
    /** Description text below the label */
    description?: React.ReactNode;
    /** Error message */
    error?: boolean | string;
    /** Custom change handler */
    onChange?: (checked: boolean) => void;
}
export interface RadioGroupProps {
    /** Selected value */
    value?: string;
    /** Default selected value */
    defaultValue?: string;
    /** Callback when selection changes */
    onChange?: (value: string) => void;
    /** Label for the group */
    label?: string;
    /** Description for the group */
    description?: string;
    /** Orientation of the radios */
    orientation?: 'horizontal' | 'vertical';
    /** Gap between items */
    gap?: number | string;
    /** Children (Radio components) */
    children: React.ReactNode;
    /** Disable all radios in group */
    disabled?: boolean;
    /** Size for all radios in group */
    size?: RadioSize;
    /** Variant for all radios in group */
    variant?: RadioVariant;
    /** Error state for the entire group */
    error?: boolean | string;
    /** Class name for the group container */
    className?: string;
}
