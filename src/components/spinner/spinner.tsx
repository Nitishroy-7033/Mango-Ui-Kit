import React from 'react';
import { Loader2, Settings, RefreshCw } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { SpinnerProps } from './spinner.types';
import './spinner.css';

export const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  color,
  thickness = 3,
  variant = 'circular',
  speed = 0.8,
  icon,
  className = '',
  style,
}) => {
  const commonStyle = {
    ...style,
    '--spinner-color': color,
    '--spinner-speed': `${speed}s`,
    '--spinner-thickness': `${thickness}px`,
  } as React.CSSProperties;

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="mango-spinner-dots" style={{ width: size, height: size }}>
            <span /><span /><span />
          </div>
        );
      case 'waves':
        return (
          <div className="mango-spinner-waves" style={{ width: size, height: size }}>
            <span /><span /><span /><span />
          </div>
        );
      case 'bouncing':
        return (
          <div className="mango-spinner-bouncing" style={{ width: size, height: size }}>
            <span /><span /><span />
          </div>
        );
      case 'pulse':
        return (
          <div className="mango-spinner-pulse" style={{ width: size, height: size }} />
        );
      case 'ring':
        return (
          <div className="mango-spinner-ring" style={{ width: size, height: size }} />
        );
      case 'gear':
        return (
          <Settings size={size} className="mango-spinner-gear" />
        );
      case 'icon-pulse':
        return (
          <div className="mango-spinner-icon-pulse" style={{ display: 'inline-flex' }}>
            {icon || <RefreshCw size={size} />}
          </div>
        );
      case 'icon-spin':
        return (
          <div className="mango-spinner-icon-spin" style={{ display: 'inline-flex' }}>
            {icon || <RefreshCw size={size} />}
          </div>
        );
      case 'icon-bounce':
        return (
          <div className="mango-spinner-icon-bounce" style={{ display: 'inline-flex' }}>
            {icon || <RefreshCw size={size} />}
          </div>
        );
      case 'circular':
      default:
        return (
          <Loader2
            size={size}
            className="mango-spinner-circular"
            strokeWidth={thickness}
          />
        );
    }
  };

  return (
    <div className={cn('mango-spinner', className)} style={commonStyle}>
      {renderVariant()}
    </div>
  );
};

Spinner.displayName = 'Spinner';
