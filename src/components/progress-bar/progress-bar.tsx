import React from 'react';
import { cn } from '../../utils/cn';
import type { ProgressBarProps } from './progress-bar.types';
import './progress-bar.css';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  label,
  showPercentage = false,
  size = 'md',
  variant = 'linear',
  color,
  gradient,
  animated = false,
  rounded = 'full',
  className = '',
  style,
}) => {
  const normalizedProgress = variant === 'indeterminate' ? 100 : Math.min(Math.max(progress, 0), 100);

  const barStyle: React.CSSProperties = {
    width: `${normalizedProgress}%`,
  };

  if (color) {
    barStyle.backgroundColor = color;
  }

  if (gradient) {
    if (Array.isArray(gradient)) {
      barStyle.background = `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})`;
    } else {
      barStyle.background = gradient;
    }
  }

  return (
    <div
      className={cn('mango-progress-container', `progress-${size}`, className)}
      style={style}
    >
      {(label || showPercentage) && (
        <div className="mango-progress-header">
          {label && <span className="mango-progress-label">{label}</span>}
          {showPercentage && variant !== 'indeterminate' && (
            <span className="mango-progress-percentage">{Math.round(normalizedProgress)}%</span>
          )}
        </div>
      )}
      <div className={cn('mango-progress-track', `rounded-${rounded}`)}>
        <div
          className={cn(
            'mango-progress-bar',
            `is-${variant}`,
            animated && variant !== 'indeterminate' && 'is-animated',
            variant === 'striped' && 'is-striped'
          )}
          style={barStyle}
        />
      </div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
