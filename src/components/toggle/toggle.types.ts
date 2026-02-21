export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleVariant =
    | 'solid'      // Classic filled pill (default)
    | 'ios'        // iOS-style green
    | 'modern'     // Outline-border minimal
    | 'glass'      // Glassmorphism / translucent
    | 'square'     // Flat square thumb + track
    | 'pill-slim'  // Slim elongated track
    | 'flat'       // No thumb shadow, flat design
    | 'neon'       // Glowing neon effect when active
    | 'bounce';    // Bouncy spring animation thumb

export interface ToggleProps {
    /** Whether the toggle is checked */
    checked?: boolean;
    /** Callback when state changes */
    onChange?: (checked: boolean) => void;
    /** Disable interactions */
    disabled?: boolean;
    /** Label text or node */
    label?: React.ReactNode;
    /** Optional helper text below the label */
    description?: string;
    /** Position of the label relative to the toggle */
    labelPosition?: 'left' | 'right';
    /** Size variant */
    size?: ToggleSize;
    /** Visual style variant */
    variant?: ToggleVariant;
    /** Custom active color (hex or CSS var) */
    color?: string;
    /** Icon to show inside the thumb when checked */
    activeIcon?: React.ReactNode;
    /** Icon to show inside the thumb when unchecked */
    inactiveIcon?: React.ReactNode;
    /** Show ON / OFF text inside the track */
    showLabels?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
