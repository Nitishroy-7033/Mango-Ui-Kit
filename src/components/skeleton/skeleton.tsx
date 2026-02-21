import React from 'react';
import { cn } from '../../utils/cn';
import type { SkeletonProps } from './skeleton.types';
import './skeleton.css';

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  className = '',
  animate = true,
  shimmer = true,
}) => {
  return (
    <div
      className={cn(
        'skeleton-root',
        `skeleton-${variant}`,
        animate && 'animate',
        className
      )}
      style={{ width, height }}
    >
      {shimmer && <div className="skeleton-shimmer" />}
    </div>
  );
};

Skeleton.displayName = 'Skeleton';
