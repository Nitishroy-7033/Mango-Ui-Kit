import React, { useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import type { OTPInputProps } from './otp-input.types';
import './otp-input.css';

export const OTPInput: React.FC<OTPInputProps> = ({
    length = 6,
    value,
    onChange,
    onComplete,
    disabled = false,
    variant = 'outlined',
    size = 'md',
    className,
    label,
    error,
    helperText,
}) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, length);
    }, [length]);

    const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const newValue = value.split('');

        // Handle deletion
        if (!val) {
            newValue[index] = '';
            onChange(newValue.join(''));
            return;
        }

        // Only allow last character if something was typed
        const char = val.slice(-1);
        newValue[index] = char;
        const finalValue = newValue.join('').slice(0, length);

        onChange(finalValue);

        // Move focus to next input
        if (char && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        if (finalValue.length === length) {
            onComplete?.(finalValue);
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
            if (!value[index] && index > 0) {
                // If current box is empty, move focus to previous and clear it
                const newValue = value.split('');
                newValue[index - 1] = '';
                onChange(newValue.join(''));
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('Text').slice(0, length);
        if (!/^\d+$/.test(pastedData)) return; // Only digits usually

        onChange(pastedData);

        // Auto-focus last or next available
        const lastIdx = Math.min(pastedData.length, length - 1);
        inputRefs.current[lastIdx]?.focus();

        if (pastedData.length === length) {
            onComplete?.(pastedData);
        }
    };

    return (
        <div className={cn('mango-otp-root', className)}>
            {label && <label className="mango-otp-label">{label}</label>}

            <div className={cn('mango-otp-container', `mango-otp-size-${size}`)}>
                {Array.from({ length }).map((_, i) => (
                    <input
                        key={i}
                        ref={(el) => { inputRefs.current[i] = el; }}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={1}
                        value={value[i] || ''}
                        onChange={(e) => handleInputChange(i, e)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        onPaste={handlePaste}
                        disabled={disabled}
                        className={cn(
                            'mango-otp-box',
                            `mango-otp-variant-${variant}`,
                            error && 'has-error'
                        )}
                    />
                ))}
            </div>

            {error && <p className="mango-otp-error">{error}</p>}
            {!error && helperText && <p className="mango-otp-helper">{helperText}</p>}
        </div>
    );
};

OTPInput.displayName = 'OTPInput';
