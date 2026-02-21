export type ProgressBarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ProgressBarVariant = 'linear' | 'striped' | 'indeterminate' | 'gradient' | 'glass' | 'neon' | 'buffer' | 'stepped' | 'stacked';
export type ProgressBarColor = 'primary' | 'success' | 'warning' | 'error' | 'info';
export interface StackedSegment {
    value: number;
    color: string;
    label?: string;
}
export interface ProgressBarProps {
    /** Current progress value (0-100) */
    progress?: number;
    /** Buffer value for "buffer" variant (0-100) */
    buffer?: number;
    /** Optional label displayed above the bar */
    label?: string;
    /** Whether to show the percentage text */
    showPercentage?: boolean;
    /** Show label text inside the bar (only works on lg/xl) */
    labelInside?: boolean;
    /** Size of the progress bar height */
    size?: ProgressBarSize;
    /** Visual variant of the progress bar */
    variant?: ProgressBarVariant;
    /** Semantic color preset */
    color?: ProgressBarColor;
    /** Custom color CSS string (overrides color preset) */
    customColor?: string;
    /** Gradient colors [start, end] */
    gradient?: [string, string];
    /** Whether to animate a shimmer over the fill */
    animated?: boolean;
    /** Border radius for track and fill */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    /** Number of steps for "stepped" variant */
    steps?: number;
    /** Segments for "stacked" variant */
    segments?: StackedSegment[];
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
export interface CircularProgressProps {
    /** Progress value 0–100 */
    progress?: number;
    /** Size in px */
    size?: number;
    /** Stroke thickness */
    strokeWidth?: number;
    /** Label/text in center */
    label?: React.ReactNode;
    /** Semantic color preset */
    color?: ProgressBarColor;
    /** Custom hex/CSS color */
    customColor?: string;
    /** Animate indeterminate spin */
    indeterminate?: boolean;
    /** Show percentage in center */
    showPercentage?: boolean;
    /** Gradient [start, end] */
    gradient?: [string, string];
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
