import React from 'react';
import { cn } from '../../utils/cn';
import type { ButtonProps } from './button.types';
import { Tooltip } from '../tooltip';
import './button.css';

const sizeMap = {
    sm: 'mango-btn-sm',
    md: 'mango-btn-md',
    lg: 'mango-btn-lg',
};

const variantMap = {
    primary: 'mango-btn-primary',
    secondary: 'mango-btn-secondary',
    outline: 'mango-btn-outline',
    ghost: 'mango-btn-ghost',
    danger: 'mango-btn-danger',
};

const roundedMap = {
    none: 'mango-btn-rounded-none',
    md: 'mango-btn-rounded-md',
    lg: 'mango-btn-rounded-lg',
    full: 'mango-btn-rounded-full',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isLoading,
        leftIcon,
        rightIcon,
        children,
        disabled,
        iconOnly,
        fullWidth,
        rounded,
        tooltip,
        tooltipPosition = 'top',
        ...props
    }, ref) => {
        const classes = cn(
            'mango-btn',
            sizeMap[size],
            variantMap[variant],
            iconOnly && 'mango-btn-icon-only',
            fullWidth && 'mango-btn-full-width',
            rounded && roundedMap[rounded],
            className
        );

        const buttonElement = (
            <button
                ref={ref}
                className={classes}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <svg
                        className="mango-btn-spinner"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            opacity="0.25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            opacity="0.75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                ) : (
                    <>
                        {leftIcon && <span className="mango-btn-icon">{leftIcon}</span>}
                        {children && <span>{children}</span>}
                        {rightIcon && <span className="mango-btn-icon">{rightIcon}</span>}
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
