export type DatePickerVariant = 'default' | 'filled' | 'outline' | 'ghost';
export type DatePickerSize = 'sm' | 'md' | 'lg';

export interface DateRange {
    startDate: string | null;
    endDate: string | null;
}

export interface DateRangePickerProps {
    value: DateRange;
    onChange: (value: DateRange) => void;
    placeholder?: string;
    className?: string;
    /** Visual style variant */
    variant?: DatePickerVariant;
    /** Size of the trigger */
    size?: DatePickerSize;
    /** Disable the picker */
    disabled?: boolean;
    /** Label shown above the trigger */
    label?: string;
    /** Optional small uppercase label rendered inside the trigger (e.g. 'SELECT PERIOD') */
    innerLabel?: string;
    /** Helper text */
    helperText?: string;
    /** Error state */
    error?: string;
    /** Minimum selectable date (YYYY-MM-DD) */
    minDate?: string;
    /** Maximum selectable date (YYYY-MM-DD) */
    maxDate?: string;
    /** Show a "Clear" button when a date is selected */
    clearable?: boolean;
    /** Quick preset ranges */
    presets?: { label: string; range: DateRange }[];
    /** Whether to show the outer border of the calendar card */
    showBorder?: boolean;
    /** Whether to show the footer information/actions */
    showFooter?: boolean;
    /** Border-radius of the calendar card popup */
    cardBorderRadius?: string;
    /** Border color of the calendar card popup */
    cardBorderColor?: string;
    /** Border width of the calendar card popup */
    cardBorderWidth?: string;
}
