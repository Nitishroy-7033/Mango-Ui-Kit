import React from 'react';
import { cn } from '../../utils/cn';
import { sizeMap, variantMap, roundedMap } from '../../utils/component-maps';
import { resolveSx, type SxValue } from '../../utils/sx';
import type { ButtonProps } from './button.types';
import { Tooltip } from '../tooltip';
import { Spinner } from '../spinner';
import './button.css';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & { sx?: SxValue }>(
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
    sx,
    ...props
  }, ref) => {
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
      className,
    );

    const customStyle: React.CSSProperties = {
      ...style,
      ...resolveSx(sx),
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
  },
);

Button.displayName = 'Button';
