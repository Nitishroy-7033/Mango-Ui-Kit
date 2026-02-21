import { ComponentType } from '../../../node_modules/react';
export interface StatCardProps {
    label: string;
    value: string | number;
    icon?: ComponentType<any>;
    trend?: number;
    trendLabel?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    className?: string;
}
