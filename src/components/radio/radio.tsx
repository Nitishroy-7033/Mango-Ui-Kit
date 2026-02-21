import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { RadioProps } from './radio.types';
import './radio.css';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    (
        {
            variant = 'solid',
            size = 'md',
            color,
            label,
            description,
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
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (disabled) return;
            onChange?.(e.target.checked);
        };

        const radioStyle = {
            ...style,
            ...(color ? { '--radio-primary': color } : {}),
        } as React.CSSProperties;

        const isError = !!error;

        return (
            <div className={cn('mango-radio-wrapper', className)}>
                <label
                    className={cn(
                        'mango-radio-container',
                        `mango-radio-size-${size}`,
                        `mango-radio-variant-${variant}`,
                        checked && 'is-checked',
                        disabled && 'is-disabled',
                        isError && 'has-error'
                    )}
                    style={radioStyle}
                >
                    <input
                        type="radio"
                        ref={ref}
                        className="mango-radio-input"
                        checked={checked}
                        onChange={handleChange}
                        disabled={disabled}
                        {...props}
                    />

                    <div className="mango-radio-circle">
                        <div className="mango-radio-dot" />
                    </div>

                    {(label || description) && (
                        <div className="mango-radio-label-block">
                            {label && <span className="mango-radio-label">{label}</span>}
                            {description && <span className="mango-radio-description">{description}</span>}
                        </div>
                    )}
                </label>

                {typeof error === 'string' && (
                    <div className="mango-radio-error-message">{error}</div>
                )}
            </div>
        );
    }
);

Radio.displayName = 'Radio';
