export interface OTPInputProps {
    /** Number of boxes */
    length?: number;
    /** Current value string */
    value: string;
    /** Callback when value changes */
    onChange: (value: string) => void;
    /** Callback when all boxes are filled */
    onComplete?: (value: string) => void;
    /** Whether the boxes are disabled */
    disabled?: boolean;
    /** Visual variant */
    variant?: 'outlined' | 'filled' | 'underlined';
    /** Size of the boxes */
    size?: 'sm' | 'md' | 'lg';
    /** Custom class name */
    className?: string;
    /** Label above the OTP group */
    label?: string;
    /** Error message below */
    error?: string;
    /** Helper text */
    helperText?: string;
}
