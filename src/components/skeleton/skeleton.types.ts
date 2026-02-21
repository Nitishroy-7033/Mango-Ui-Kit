export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  count?: number;
  animate?: boolean;
  shimmer?: boolean;
}
