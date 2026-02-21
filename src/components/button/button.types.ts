import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { TooltipPosition } from '../tooltip/tooltip.types';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    children?: ReactNode;
    iconOnly?: boolean;
    fullWidth?: boolean;
    rounded?: 'md' | 'full' | 'lg' | 'none';
    tooltip?: string;
    tooltipPosition?: TooltipPosition;
}
