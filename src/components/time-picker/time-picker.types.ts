export type TimePickerSize = 'sm' | 'md' | 'lg';
export type TimePickerVariant = 'default' | 'filled' | 'outline' | 'ghost';

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
  /** Position of the innerLabel. Defaults to 'left' */
  innerLabelPosition?: 'left' | 'top';
  /** Helper text below the trigger */
  helperText?: string;
  /** Error state with message */
  error?: string;
  /** Use 12-hour AM/PM format */
  use12Hours?: boolean;
  /** Show seconds column */
  showSeconds?: boolean;
  /** Step in minutes (e.g. 5, 10, 15, 30) */
  minuteStep?: number;
}
