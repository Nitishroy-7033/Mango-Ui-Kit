import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { SpinnerProps } from './spinner.types';
import './spinner.css';

export const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  className = '',
  color,
}) => {
  return (
    <div className={cn('spinner-container', className)}>
      <Loader2
        size={size}
        className="spinner-icon"
        style={color ? { color } : undefined}
      />
    </div>
  );
};

Spinner.displayName = 'Spinner';
