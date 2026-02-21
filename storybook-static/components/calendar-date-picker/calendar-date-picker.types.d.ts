import { default as React } from '../../../node_modules/react';
export type DatePickerVariant = 'default' | 'filled' | 'outline' | 'ghost';
export type DatePickerSize = 'sm' | 'md' | 'lg';
/** A single configurable footer action button */
export interface DatePickerFooterAction {
    /** Button label text */
    label: string;
    /** Optional icon element (e.g. a Lucide icon) */
    icon?: React.ReactNode;
    /** Called with the currently selected date (or null) when clicked */
    onClick: (currentValue: string) => void;
}
export interface CalendarDatePickerProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    /** Visual style variant */
    variant?: DatePickerVariant;
    /** Size of the trigger input */
    size?: DatePickerSize;
    /** Disable the picker */
    disabled?: boolean;
    /** Label shown above the trigger */
    label?: string;
    /**
     * Heading shown inside the calendar card header.
     * Pass `undefined` or omit to hide the header entirely.
     * e.g. "DATE-SELECTOR"
     */
    innerLabel?: string;
    /** Helper text below the trigger */
    helperText?: string;
    /** Error state with message */
    error?: string;
    /** Minimum selectable date (YYYY-MM-DD) */
    minDate?: string;
    /** Maximum selectable date (YYYY-MM-DD) */
    maxDate?: string;
    /** Array of specific disabled dates (YYYY-MM-DD) */
    disabledDates?: string[];
    /** Display format for selected value */
    displayFormat?: 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MMM DD, YYYY';
    /** Show a clear (×) button when a date is selected */
    clearable?: boolean;
    /**
     * Border-radius of each day cell.
     * Use '50%' for full circle, '8px' for rounded square, etc.
     * Defaults to '8px'.
     */
    dayBorderRadius?: string;
    /**
     * Border-radius of the calendar card popup.
     * Defaults to '18px'.
     */
    cardBorderRadius?: string;
    /**
     * Border color of the calendar card popup.
     * Accepts any valid CSS color — hex, rgb, var(...), etc.
     * Defaults to the theme primary color.
     */
    cardBorderColor?: string;
    /**
     * Border width of the calendar card popup.
     * e.g. '1px', '2px', '0' to remove.
     * Defaults to '1.5px'.
     */
    cardBorderWidth?: string;
    /**
     * Configurable footer action buttons.
     * When provided, these replace the default Today/Yesterday/More buttons.
     */
    footerActions?: DatePickerFooterAction[];
    /**
     * Whether to show the outer border of the calendar card.
     * Defaults to true.
     */
    showBorder?: boolean;
    /**
     * Whether to show the footer with quick action buttons.
     * Defaults to true.
     */
    showFooter?: boolean;
}
