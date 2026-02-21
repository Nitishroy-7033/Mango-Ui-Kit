import type { ReactNode, ComponentType } from 'react';

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ComponentType<{ size?: number; className?: string }>;
  trend?: 'up' | 'down';
  trendValue?: number;
  color?: string;
  description?: string;
  className?: string;
}
