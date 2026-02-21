import type React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { badgeStyles } from './badge.styles';

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeStyles> {
    icon?: React.ReactNode;
}
