export type SpinnerVariant = 'circular' | 'dots' | 'pulse' | 'bouncing' | 'waves' | 'ring' | 'gear' | 'icon-pulse' | 'icon-spin' | 'icon-bounce';
export interface SpinnerProps {
    /** Size in pixels */
    size?: number;
    /** Custom icon for icon-specific variants */
    icon?: React.ReactNode;
    /** Custom color — falls back to primary */
    color?: string;
    /** Line thickness for circular/ring variants */
    thickness?: number;
    /** Animation variant */
    variant?: SpinnerVariant;
    /** Speed in seconds (default: 0.8s) */
    speed?: number;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
