import React from 'react';
import { cn } from '../../utils/cn';
import type { ButtonProps } from './button.types';
import { Tooltip } from '../tooltip';
import { Spinner } from '../spinner';
import './button.css';

const sizeMap: Record<string, string> = {
    sm: 'mango-btn-sm',
    md: 'mango-btn-md',
    lg: 'mango-btn-lg',
};

const variantMap: Record<string, string> = {
    primary: 'mango-btn-primary',
    secondary: 'mango-btn-secondary',
    outline: 'mango-btn-outline',
    ghost: 'mango-btn-ghost',
    danger: 'mango-btn-danger',
    dashed: 'mango-btn-dashed',
    link: 'mango-btn-link',
};

const roundedMap: Record<string, string> = {
    none: 'mango-btn-rounded-none',
    sm: 'mango-btn-rounded-sm',
    md: 'mango-btn-rounded-md',
    lg: 'mango-btn-rounded-lg',
    xl: 'mango-btn-rounded-xl',
    full: 'mango-btn-rounded-full',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isLoading,
        icon,
        iconPosition = 'start',
        hoverEffect = 'none',
        leftIcon,
        rightIcon,
        children,
        disabled,
        iconOnly,
        fullWidth,
        rounded,
        tooltip,
        tooltipPosition = 'top',
        bgColor,
        textColor,
        iconColor,
        borderColor,
        style,
        ...props
    }, ref) => {
        // Resolve icon placement: "icon + iconPosition" or "leftIcon / rightIcon"
        const resolvedLeftIcon = leftIcon ?? (iconPosition === 'start' ? icon : undefined);
        const resolvedRightIcon = rightIcon ?? (iconPosition === 'end' ? icon : undefined);

        const classes = cn(
            'mango-btn',
            sizeMap[size],
            variantMap[variant],
            iconOnly && 'mango-btn-icon-only',
            fullWidth && 'mango-btn-full-width',
            rounded && roundedMap[rounded],
            hoverEffect !== 'none' && `mango-btn-hover-${hoverEffect}`,
            className
        );

        // Custom color overrides via inline style
        const customStyle: React.CSSProperties = {
            ...style,
            ...(bgColor ? { backgroundColor: bgColor, borderColor: bgColor } : {}),
            ...(textColor ? { color: textColor } : {}),
            ...(borderColor ? { borderColor } : {}),
        };

        const iconStyle: React.CSSProperties | undefined = iconColor
            ? { color: iconColor }
            : undefined;

        const buttonElement = (
            <button
                ref={ref}
                className={classes}
                disabled={disabled || isLoading}
                style={customStyle}
                {...props}
            >
                {isLoading ? (
                    <Spinner size={size === 'sm' ? 14 : size === 'lg' ? 22 : 18} color="currentColor" />
                ) : (
                    <>
                        {resolvedLeftIcon && (
                            <span className="mango-btn-icon" style={iconStyle}>
                                {resolvedLeftIcon}
                            </span>
                        )}
                        {children && <span>{children}</span>}
                        {resolvedRightIcon && (
                            <span className="mango-btn-icon" style={iconStyle}>
                                {resolvedRightIcon}
                            </span>
                        )}
                    </>
                )}
            </button>
        );

        if (tooltip) {
            return (
                <Tooltip content={tooltip} position={tooltipPosition}>
                    {buttonElement}
                </Tooltip>
            );
        }

        return buttonElement;
    }
);

Button.displayName = 'Button';
