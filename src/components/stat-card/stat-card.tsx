import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { StatCardProps } from './stat-card.types';
import './stat-card.css';

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon: Icon,
  trend,
  trendLabel,
  variant = 'primary',
  className = '',
}) => {
  const isTrendUp = trend && trend > 0;

  return (
    <div className={cn('stat-card', `stat-${variant}`, className)}>
      <div className="stat-header">
        <div className="stat-info">
          <span className="stat-label">{label}</span>
        </div>
        {Icon && (
          <div className="icon-wrapper">
            <Icon size={24} />
          </div>
        )}
      </div>

      <div className="stat-main">
        <span className="stat-value">{value}</span>
      </div>

      {(trend !== undefined || trendLabel) && (
        <div className="stat-footer">
          {trend !== undefined && (
            <div className={cn('trend-badge', isTrendUp ? 'trend-up' : 'trend-down')}>
              {isTrendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
          {trendLabel && <span className="trend-label">{trendLabel}</span>}
        </div>
      )}
    </div>
  );
};

StatCard.displayName = 'StatCard';
