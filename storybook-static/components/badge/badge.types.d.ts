import { default as React } from '../../../node_modules/react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
    size?: 'sm' | 'md' | 'lg';
    pill?: boolean;
    icon?: React.ElementType;
}
