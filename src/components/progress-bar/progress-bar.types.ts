export type ProgressBarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ProgressBarVariant = 'linear' | 'striped' | 'indeterminate';

export interface ProgressBarProps {
  /** Current progress value (0-100) */
  progress?: number;
  /** Optional label displayed above the bar */
  label?: string;
  /** Whether to show the percentage text */
  showPercentage?: boolean;
  /** Size of the progress bar height */
  size?: ProgressBarSize;
  /** Visual variant of the progress bar */
  variant?: ProgressBarVariant;
  /** Custom color for the progress bar (CSS color) */
  color?: string;
  /** Gradient colors [start, end] or single string */
  gradient?: [string, string] | string;
  /** Whether to show the shimmer animation on the bar */
  animated?: boolean;
  /** Border radius for the track and bar */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}
