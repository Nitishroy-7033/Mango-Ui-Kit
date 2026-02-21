import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { RatingProps } from './rating.types';
import './rating.css';

export const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
  size = 20,
  label,
  count,
  className = '',
}) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className={cn('rating-container', className)}>
      <div className="rating-stars">
        {[...Array(max)].map((_, index) => {
          const starValue = index + 1;
          const isActive = starValue <= (hover ?? value);

          return (
            <button
              key={index}
              type="button"
              className={cn(
                'star-btn',
                isActive && 'active',
                readOnly && 'readonly'
              )}
              onClick={() => !readOnly && onChange?.(starValue)}
              onMouseEnter={() => !readOnly && setHover(starValue)}
              onMouseLeave={() => !readOnly && setHover(null)}
              disabled={readOnly}
            >
              <Star
                size={size}
                fill={isActive ? 'currentColor' : 'none'}
                strokeWidth={2}
              />
            </button>
          );
        })}
      </div>
      {(label || count !== undefined) && (
        <div className="rating-info">
          {label && <span className="rating-label">{label}</span>}
          {count !== undefined && <span className="rating-count">({count})</span>}
        </div>
      )}
    </div>
  );
};

Rating.displayName = 'Rating';
