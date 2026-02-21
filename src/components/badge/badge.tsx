import React from 'react';
import { cn } from '../../utils/cn';
import type { BadgeProps } from './badge.types';
import { badgeStyles } from './badge.styles';

export const Badge: React.FC<BadgeProps> = ({
    className,
    variant,
    size,
    pill,
    icon,
    children,
    ...props
}) => {
    return (
        <span
            className={cn(badgeStyles({ variant, size, pill }), className)}
            {...props}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
        </span>
    );
};

Badge.displayName = 'Badge';
