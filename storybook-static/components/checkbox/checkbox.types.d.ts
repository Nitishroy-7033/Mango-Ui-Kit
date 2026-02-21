import { default as React } from '../../../node_modules/react';
export type CheckboxVariant = 'solid' | 'outlined' | 'soft';
export type CheckboxSize = 'sm' | 'md' | 'lg';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    /** Visual style variant */
    variant?: CheckboxVariant;
    /** Size of the checkbox */
    size?: CheckboxSize;
    /** Color of the checkbox */
    color?: string;
    /** Label for the checkbox */
    label?: React.ReactNode;
    /** Description text below the label */
    description?: React.ReactNode;
    /** Whether the checkbox is indeterminate */
    indeterminate?: boolean;
    /** Error message */
    error?: boolean | string;
    /** Custom change handler */
    onChange?: (checked: boolean) => void;
}
export interface CheckboxGroupProps {
    /** Array of selected values */
    value?: string[];
    /** Default selected values */
    defaultValue?: string[];
    /** Callback when selection changes */
    onChange?: (value: string[]) => void;
    /** Label for the group */
    label?: string;
    /** Description for the group */
    description?: string;
    /** Orientation of the checkboxes */
    orientation?: 'horizontal' | 'vertical';
    /** Gap between items */
    gap?: number | string;
    /** Children (Checkbox components) */
    children: React.ReactNode;
    /** Disable all checkboxes in group */
    disabled?: boolean;
    /** Size for all checkboxes in group */
    size?: CheckboxSize;
    /** Variant for all checkboxes in group */
    variant?: CheckboxVariant;
    /** Error state for the entire group */
    error?: boolean | string;
    /** Class name for the group container */
    className?: string;
}
