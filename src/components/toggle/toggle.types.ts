export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleVariant = 'solid' | 'ios' | 'modern' | 'glass';

export interface ToggleProps {
    /** Whether the toggle is checked */
    checked?: boolean;
    /** Callback when state changes */
    onChange?: (checked: boolean) => void;
    /** Disable interactions */
    disabled?: boolean;
    /** Leading or trailing label */
    label?: React.ReactNode;
    /** Position of the label relative to the toggle */
    labelPosition?: 'left' | 'right';
    /** Size variant */
    size?: ToggleSize;
    /** Visual style variant */
    variant?: ToggleVariant;
    /** Custom active color */
    color?: string;
    /** Render an icon inside the thumb when checked */
    activeIcon?: React.ReactNode;
    /** Render an icon inside the thumb when unchecked */
    inactiveIcon?: React.ReactNode;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
