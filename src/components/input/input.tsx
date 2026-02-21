import React, { useState, useRef, useEffect, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { Eye, EyeOff, Search, ChevronDown, Check } from 'lucide-react';
import type { InputProps } from './input.types';
export type { InputProps };
import './input.css';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            variant = 'outlined',
            size = 'md',
            label,
            helperText,
            error,
            icon,
            prefixIcon,
            suffixIcon,
            addonBefore,
            addonAfter,
            loading,
            actionButton,
            showPasswordToggle,
            countrySelector,
            multiline,
            rows = 4,
            resize = 'none',
            maxLength,
            showCount,
            countPosition = 'inside',
            limitType = 'character',
            type = 'text',
            value,
            onFocus,
            onBlur,
            onChange,
            disabled,
            ...props
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const [showPassword, setShowPassword] = useState(false);
        const [isCountryOpen, setIsCountryOpen] = useState(false);
        const [countrySearch, setCountrySearch] = useState('');
        const countryRef = useRef<HTMLDivElement>(null);

        const currentValue = String(value || props.defaultValue || '');
        const count = limitType === 'word'
            ? (currentValue.trim() ? currentValue.trim().split(/\s+/).length : 0)
            : currentValue.length;

        const handleFocus = (e: React.FocusEvent<any>) => {
            setIsFocused(true);
            onFocus?.(e);
        };

        const handleBlur = (e: React.FocusEvent<any>) => {
            setIsFocused(false);
            onBlur?.(e);
        };

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
                    setIsCountryOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        const filteredCountries = useMemo(() => {
            if (!countrySelector) return [];
            if (!countrySearch) return countrySelector.options;
            const q = countrySearch.toLowerCase();
            return countrySelector.options.filter(
                o => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q)
            );
        }, [countrySelector, countrySearch]);

        const selectedCountry = useMemo(() => {
            return countrySelector?.options.find(o => o.value === countrySelector.value);
        }, [countrySelector]);

        const isPassword = type === 'password';
        const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

        const renderCount = () => {
            if (!showCount) return null;
            return (
                <div className={cn('mango-input-count', `mango-input-count-${countPosition}`, count > (maxLength || Infinity) && 'error')}>
                    {count} {maxLength ? `/ ${maxLength}` : ''}
                </div>
            );
        };

        const inputProps = {
            className: "mango-input-field",
            onFocus: handleFocus,
            onBlur: handleBlur,
            disabled,
            value,
            onChange,
            maxLength,
            ...props
        };

        return (
            <div className={cn('mango-input-root', className, multiline && 'mango-input-multiline')}>
                {label && (
                    <label className={cn('mango-input-label', `mango-input-label-${size}`)}>
                        {label}
                    </label>
                )}

                <div
                    className={cn(
                        'mango-input-container',
                        `mango-input-size-${size}`,
                        `mango-input-variant-${variant}`,
                        (isFocused || isCountryOpen) && 'is-focused',
                        error && 'has-error',
                        disabled && 'is-disabled'
                    )}
                >
                    {addonBefore && !multiline && (
                        <div className="mango-input-addon mango-input-addon-before">
                            {addonBefore}
                        </div>
                    )}

                    <div className="mango-input-wrapper">
                        {countrySelector && !multiline && (
                            <div className="mango-country-root" ref={countryRef}>
                                <div
                                    className={cn('mango-country-selector', isCountryOpen && 'active')}
                                    onClick={() => !disabled && setIsCountryOpen(!isCountryOpen)}
                                >
                                    <span className="mango-country-flag">{selectedCountry?.flag}</span>
                                    <span className="mango-country-code">{countrySelector.value}</span>
                                    <ChevronDown size={14} className={cn('mango-country-arrow', isCountryOpen && 'rotated')} />
                                </div>

                                {isCountryOpen && (
                                    <div
                                        className="mango-country-dropdown animate-scale-in"
                                        style={{ width: countrySelector.dropdownWidth || '220px' }}
                                    >
                                        {countrySelector.showSearch && (
                                            <div className="mango-country-search">
                                                <Search size={14} />
                                                <input
                                                    placeholder={countrySelector.placeholder || 'Search...'}
                                                    value={countrySearch}
                                                    onChange={(e) => setCountrySearch(e.target.value)}
                                                    autoFocus
                                                />
                                            </div>
                                        )}
                                        <div className="mango-country-list">
                                            {filteredCountries.map((opt) => (
                                                <div
                                                    key={opt.value}
                                                    className={cn('mango-country-item', opt.value === countrySelector.value && 'selected')}
                                                    onClick={() => {
                                                        countrySelector.onChange(opt.value);
                                                        setIsCountryOpen(false);
                                                        setCountrySearch('');
                                                    }}
                                                >
                                                    <span className="item-flag">{opt.flag}</span>
                                                    <div className="item-info">
                                                        <span className="item-label">{opt.label}</span>
                                                        <span className="item-value">{opt.value}</span>
                                                    </div>
                                                    {opt.value === countrySelector.value && <Check size={14} className="item-check" />}
                                                </div>
                                            ))}
                                            {filteredCountries.length === 0 && (
                                                <div className="mango-country-no-results">No countries found</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {(() => {
                            const effectivePrefixIcon = prefixIcon || icon;
                            return effectivePrefixIcon && !multiline && (
                                <div className="mango-input-icon mango-input-prefix">{effectivePrefixIcon}</div>
                            );
                        })()}

                        {multiline ? (
                            <textarea
                                {...(inputProps as any)}
                                ref={ref as any}
                                rows={rows}
                                style={{ resize }}
                            />
                        ) : (
                            <input
                                {...(inputProps as any)}
                                ref={ref as any}
                                type={inputType}
                            />
                        )}

                        {loading && <div className="mango-input-loading-spinner" />}

                        {isPassword && showPasswordToggle && !loading && (
                            <button
                                type="button"
                                className="mango-input-password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        )}

                        {suffixIcon && !loading && !multiline && <div className="mango-input-icon mango-input-suffix">{suffixIcon}</div>}

                        {countPosition === 'inside' && renderCount()}
                    </div>

                    {actionButton && !multiline && (
                        <button
                            type="button"
                            className={cn(
                                'mango-input-action-btn',
                                actionButton.variant === 'secondary' && 'mango-input-action-btn-secondary'
                            )}
                            onClick={actionButton.onClick}
                        >
                            {actionButton.icon}
                            {actionButton.label}
                        </button>
                    )}

                    {addonAfter && !multiline && (
                        <div className="mango-input-addon mango-input-addon-after">
                            {addonAfter}
                        </div>
                    )}
                </div>

                {countPosition === 'outside' && renderCount()}
                {error && <p className="mango-input-error">{error}</p>}
                {!error && helperText && <p className="mango-input-helper">{helperText}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';
