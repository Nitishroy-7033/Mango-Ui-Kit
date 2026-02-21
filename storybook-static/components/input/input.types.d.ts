import { default as React } from '../../../node_modules/react';
export type InputVariant = 'outlined' | 'filled' | 'borderless' | 'underlined';
export type InputSize = 'sm' | 'md' | 'lg';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Visual style variant */
    variant?: InputVariant;
    /** Size of the input */
    size?: InputSize;
    /** Label shown above the input */
    label?: string;
    /** Inner label (compact style) */
    innerLabel?: string;
    /** Helper text below the input */
    helperText?: string;
    /** Error message */
    error?: string;
    /** Icon at the start of the input (shorthand for prefixIcon) */
    icon?: React.ReactNode;
    /** Icon at the start of the input */
    prefixIcon?: React.ReactNode;
    /** Icon at the end of the input */
    suffixIcon?: React.ReactNode;
    /** Text or element at the start of the input (addon) */
    addonBefore?: React.ReactNode;
    /** Text or element at the end of the input (addon) */
    addonAfter?: React.ReactNode;
    /** Whether the input is in a loading state */
    loading?: boolean;
    /** Action button at the end (e.g. Search) */
    actionButton?: {
        label?: string;
        icon?: React.ReactNode;
        onClick?: () => void;
        variant?: 'primary' | 'secondary' | 'ghost';
    };
    /** For password fields: whether to show the toggle visibility button */
    showPasswordToggle?: boolean;
    /** For number fields: interactive country selector dropdown */
    countrySelector?: {
        value: string;
        onChange: (value: string) => void;
        options: {
            label: string;
            value: string;
            flag: string;
            details?: string;
        }[];
        showSearch?: boolean;
        dropdownWidth?: string;
        placeholder?: string;
    };
    /** Whether to render as a textarea */
    multiline?: boolean;
    /** Number of rows for textarea */
    rows?: number;
    /** Resize behavior for textarea */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    /** Character or word limit */
    maxLength?: number;
    /** Whether to show the character/word count */
    showCount?: boolean;
    /** Position of the character count */
    countPosition?: 'inside' | 'outside';
    /** Whether the limit is for 'characters' or 'words' */
    limitType?: 'character' | 'word';
}
