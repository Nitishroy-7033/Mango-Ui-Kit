import React, { forwardRef, useState, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { NumberInputProps } from './number-input.types';
import './number-input.css';

/**
 * NumberInput (Spinner) component for precise numeric entry with step controls.
 */
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    (
        {
            value,
            defaultValue,
            onChange,
            min = -Infinity,
            max = Infinity,
            step = 1,
            size = 'md',
            error,
            errorText,
            label,
            iconPrefix,
            iconSuffix,
            disabled,
            hideControls = false,
            fullWidth = false,
            className,
            inputClassName,
            placeholder,
            ...props
        },
        ref
    ) => {
        const [internalValue, setInternalValue] = useState<number>(value ?? defaultValue ?? 0);

        useEffect(() => {
            if (value !== undefined) {
                setInternalValue(value);
            }
        }, [value]);

        const updateValue = (newValue: number) => {
            if (disabled) return;

            // Clamp value between min and max
            const clampedValue = Math.min(Math.max(newValue, min), max);

            if (value === undefined) {
                setInternalValue(clampedValue);
            }
            onChange?.(clampedValue);
        };

        const handleIncrement = () => updateValue(internalValue + step);
        const handleDecrement = () => updateValue(internalValue - step);

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val)) {
                updateValue(val);
            } else if (e.target.value === '') {
                // Allow empty input temporarily if user is typing
                setInternalValue(0);
            }
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            let val = parseFloat(e.target.value);
            if (isNaN(val)) val = min !== -Infinity ? min : 0;
            updateValue(val);
            props.onBlur?.(e);
        };

        return (
            <div className={cn('mango-number-input-container', size && `size-${size}`, fullWidth && 'full-width', className)}>
                {label && <label className="mango-number-input-label">{label}</label>}

                <div className={cn(
                    'mango-number-input-wrapper',
                    error && 'is-error',
                    disabled && 'is-disabled'
                )}>
                    {!hideControls && (
                        <button
                            type="button"
                            className="mango-number-input-btn btn-minus"
                            onClick={handleDecrement}
                            disabled={disabled || internalValue <= min}
                            aria-label="Decrease value"
                        >
                            <Minus size={size === 'sm' ? 14 : 18} />
                        </button>
                    )}

                    {iconPrefix && <div className="mango-number-input-icon-prefix">{iconPrefix}</div>}

                    <input
                        ref={ref}
                        type="number"
                        className={cn('mango-number-input-field', inputClassName)}
                        value={internalValue}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled}
                        placeholder={placeholder}
                        {...props}
                    />

                    {iconSuffix && <div className="mango-number-input-icon-suffix">{iconSuffix}</div>}

                    {!hideControls && (
                        <button
                            type="button"
                            className="mango-number-input-btn btn-plus"
                            onClick={handleIncrement}
                            disabled={disabled || internalValue >= max}
                            aria-label="Increase value"
                        >
                            <Plus size={size === 'sm' ? 14 : 18} />
                        </button>
                    )}
                </div>

                {error && errorText && <span className="mango-number-input-error-text">{errorText}</span>}
            </div>
        );
    }
);

NumberInput.displayName = 'NumberInput';
