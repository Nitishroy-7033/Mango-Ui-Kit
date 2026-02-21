import React, { forwardRef, useEffect, useRef } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { CheckboxProps } from './checkbox.types';
import './checkbox.css';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            variant = 'solid',
            size = 'md',
            color,
            label,
            description,
            indeterminate = false,
            error,
            className = '',
            style,
            checked,
            onChange,
            disabled,
            ...props
        },
        ref
    ) => {
        const innerRef = useRef<HTMLInputElement>(null);
        const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || innerRef;

        useEffect(() => {
            if (resolvedRef.current) {
                resolvedRef.current.indeterminate = indeterminate;
            }
        }, [indeterminate, resolvedRef]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (disabled) return;
            onChange?.(e.target.checked);
        };

        const checkboxStyle = {
            ...style,
            ...(color ? { '--checkbox-primary': color } : {}),
        } as React.CSSProperties;

        const isError = !!error;

        return (
            <div className={cn('mango-checkbox-wrapper', className)}>
                <label
                    className={cn(
                        'mango-checkbox-container',
                        `mango-checkbox-size-${size}`,
                        `mango-checkbox-variant-${variant}`,
                        checked && 'is-checked',
                        indeterminate && 'is-indeterminate',
                        disabled && 'is-disabled',
                        isError && 'has-error'
                    )}
                    style={checkboxStyle}
                >
                    <input
                        type="checkbox"
                        ref={resolvedRef}
                        className="mango-checkbox-input"
                        checked={checked}
                        onChange={handleChange}
                        disabled={disabled}
                        {...props}
                    />

                    <div className="mango-checkbox-box">
                        {indeterminate ? (
                            <Minus className="mango-checkbox-icon" size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14} strokeWidth={3} />
                        ) : (
                            <Check className="mango-checkbox-icon" size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14} strokeWidth={3} />
                        )}
                    </div>

                    {(label || description) && (
                        <div className="mango-checkbox-label-block">
                            {label && <span className="mango-checkbox-label">{label}</span>}
                            {description && <span className="mango-checkbox-description">{description}</span>}
                        </div>
                    )}
                </label>

                {typeof error === 'string' && (
                    <div className="mango-checkbox-error-message">{error}</div>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
