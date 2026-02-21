import type React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
    size?: 'sm' | 'md' | 'lg';
    pill?: boolean;
    icon?: React.ElementType;
}
