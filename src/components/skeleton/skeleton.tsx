import React from 'react';
import { cn } from '../../utils/cn';
import type { SkeletonProps } from './skeleton.types';
import './skeleton.css';

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  borderRadius,
  className = '',
  count = 1,
  animate = true,
  shimmer = true,
}) => {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={cn(
            'mango-skeleton',
            `is-${variant}`,
            animate && 'animate-pulse',
            shimmer && 'has-shimmer',
            className
          )}
          style={{
            width,
            height,
            borderRadius: borderRadius,
            marginBottom: count > 1 ? '0.5rem' : 0
          }}
        >
          {shimmer && <div className="mango-skeleton-shimmer" />}
        </div>
      ))}
    </>
  );
};

Skeleton.displayName = 'Skeleton';
