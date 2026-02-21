import { ButtonHTMLAttributes, ReactNode } from '../../../node_modules/react';
import { TooltipPosition } from '../tooltip/tooltip.types';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'dashed' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type IconPosition = 'start' | 'end';
export type ButtonHoverEffect = 'none' | 'rotate' | 'slide' | 'scale' | 'glow';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    hoverEffect?: ButtonHoverEffect;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    children?: ReactNode;
    iconOnly?: boolean;
    fullWidth?: boolean;
    rounded?: ButtonRounded;
    tooltip?: string;
    tooltipPosition?: TooltipPosition;
    /** Custom color overrides — falls back to theme */
    bgColor?: string;
    textColor?: string;
    iconColor?: string;
    borderColor?: string;
}
export interface SplitButtonProps {
    children: ReactNode;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    bgColor?: string;
    textColor?: string;
    iconColor?: string;
    borderColor?: string;
    actions: SplitButtonAction[];
    className?: string;
}
export interface SplitButtonAction {
    label: string;
    icon?: ReactNode;
    onClick: () => void;
    danger?: boolean;
}
