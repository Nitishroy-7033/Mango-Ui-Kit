import React from 'react';
import { cn } from '../../utils/cn';
import type { ProgressBarProps } from './progress-bar.types';
import './progress-bar.css';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  label,
  showPercentage = true,
  size = 'md',
  color = 'var(--primaryColor)',
  animated = true,
  className = '',
}) => {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn('progress-container', `progress-${size}`, className)}>
      {(label || showPercentage) && (
        <div className="progress-header">
          {label && <span className="progress-label">{label}</span>}
          {showPercentage && (
            <span className="progress-percentage">{Math.round(normalizedProgress)}%</span>
          )}
        </div>
      )}
      <div className="progress-track">
        <div
          className={cn('progress-bar', animated && 'animated')}
          style={{
            width: `${normalizedProgress}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
