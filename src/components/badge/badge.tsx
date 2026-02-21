import React from 'react';
import { cn } from '../../utils/cn';
import type { BadgeProps } from './badge.types';
import './badge.css';

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    pill = false,
    icon: Icon,
    className = '',
}) => {
    return (
        <span
            className={cn(
                'badge-root',
                `badge-${variant}`,
                `badge-${size}`,
                pill && 'badge-pill',
                className
            )}
        >
            {Icon && <Icon size={14} className="badge-icon" />}
            {children}
        </span>
    );
};

Badge.displayName = 'Badge';
export default Badge;
