export type TimePickerSize = 'sm' | 'md' | 'lg';
export type TimePickerVariant = 'default' | 'filled' | 'outline' | 'ghost';
export type TimePickerSelectionMode = 'digital' | 'analog';
/** A single configurable footer action button */
export interface TimePickerFooterAction {
    /** Button label text */
    label: string;
    /** Optional icon element */
    icon?: React.ReactNode;
    /** Called with the currently selected time when clicked */
    onClick: (currentValue: string) => void;
}
export interface TimePickerProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    /** Visual style variant */
    variant?: TimePickerVariant;
    /** Size of the trigger */
    size?: TimePickerSize;
    /** Disable the picker */
    disabled?: boolean;
    /** Label shown above the trigger */
    label?: string;
    /** Optional small uppercase label rendered inside the trigger (e.g. 'SELECT TIME') */
    innerLabel?: string;
    /** Helper text below the trigger */
    helperText?: string;
    /** Error state with message */
    error?: string;
    /** Use 12-hour AM/PM format */
    use12Hours?: boolean;
    /** Show seconds column (only for digital mode) */
    showSeconds?: boolean;
    /** Step in minutes (e.g. 5, 10, 15, 30) */
    minuteStep?: number;
    /**
     * How to select time.
     * 'digital' (scroll/nav) or 'analog' (clock face).
     * Defaults to 'digital'.
     */
    selectionMode?: TimePickerSelectionMode;
    /** Whether to show the outer border of the dropdown card */
    showBorder?: boolean;
    /** Whether to show the footer buttons */
    showFooter?: boolean;
    /** Border-radius of the dropdown card */
    cardBorderRadius?: string;
    /** Border color of the dropdown card */
    cardBorderColor?: string;
    /** Border width of the dropdown card */
    cardBorderWidth?: string;
    /** Custom footer actions */
    footerActions?: TimePickerFooterAction[];
}
