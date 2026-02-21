import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { CalendarDatePickerProps } from './calendar-date-picker.types';
import './calendar-date-picker.css';

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const toISO = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
};

const formatDisplay = (iso: string, fmt: string) => {
    const [y, m, d] = iso.split('-');
    const date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
    const monthShort = MONTH_NAMES[date.getMonth()].slice(0, 3);
    switch (fmt) {
        case 'DD/MM/YYYY': return `${d}/${m}/${y}`;
        case 'MMM DD, YYYY': return `${monthShort} ${d}, ${y}`;
        default: return iso;
    }
};

const DEFAULT_FOOTER_ACTIONS = (
    onChange: (v: string) => void,
    setIsOpen: (v: boolean) => void
) => [
        {
            label: 'Today',
            icon: <CalendarIcon size={13} />,
            onClick: () => { onChange(toISO(new Date())); setIsOpen(false); },
        },
        {
            label: 'Yesterday',
            icon: <CalendarIcon size={13} />,
            onClick: () => {
                const d = new Date(); d.setDate(d.getDate() - 1);
                onChange(toISO(d)); setIsOpen(false);
            },
        },
        {
            label: 'More',
            icon: <CalendarIcon size={13} />,
            onClick: () => { },
        },
    ];

export const CalendarDatePicker: React.FC<CalendarDatePickerProps> = ({
    value,
    onChange,
    placeholder = 'Select date',
    className = '',
    variant = 'default',
    size = 'md',
    disabled = false,
    label,
    innerLabel,              // no default — undefined hides the header
    helperText,
    error,
    minDate,
    maxDate,
    disabledDates = [],
    displayFormat = 'YYYY-MM-DD',
    clearable = false,
    dayBorderRadius = '8px',
    cardBorderRadius = '18px',
    cardBorderColor,          // defaults to primaryColor via CSS
    cardBorderWidth = '1.5px',
    footerActions,
    showBorder = true,
    showFooter = true,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(
        value ? new Date(value + 'T00:00:00') : new Date()
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    const daysInMonth = (y: number, mo: number) => new Date(y, mo + 1, 0).getDate();
    const firstDayOfMonth = (y: number, mo: number) => new Date(y, mo, 1).getDay();

    const isDayDisabled = (dateStr: string) => {
        if (minDate && dateStr < minDate) return true;
        if (maxDate && dateStr > maxDate) return true;
        if (disabledDates.includes(dateStr)) return true;
        return false;
    };

    const handleDateSelect = (day: number) => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const selected = new Date(year, month, day);
        const dateStr = toISO(selected);
        if (!isDayDisabled(dateStr)) {
            onChange(dateStr);
            setIsOpen(false);
        }
    };

    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange('');
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const todayISO = toISO(new Date());

    const renderDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const total = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);
        const days: React.ReactNode[] = [];

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`e${i}`} className="cdp-day-empty" />);
        }

        for (let d = 1; d <= total; d++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const isSelected = value === dateStr;
            const isToday = todayISO === dateStr;
            const isDisabled = isDayDisabled(dateStr);

            days.push(
                <button
                    key={d}
                    type="button"
                    className={cn(
                        'cdp-day',
                        isSelected && 'selected',
                        isToday && !isSelected && 'today',
                        isDisabled && 'disabled'
                    )}
                    style={{ borderRadius: dayBorderRadius }}
                    onClick={() => !isDisabled && handleDateSelect(d)}
                    disabled={isDisabled}
                >
                    {d}
                </button>
            );
        }
        return days;
    };

    // Resolve footer buttons — custom or fallback to defaults
    const resolvedFooterActions = footerActions ?? DEFAULT_FOOTER_ACTIONS(onChange, setIsOpen);

    return (
        <div className={cn('cdp-root', className)} ref={dropdownRef}>
            {label && (
                <label className={cn('picker-label', `picker-label-${size}`)}>{label}</label>
            )}

            {/* ── Trigger ── */}
            <div
                className={cn(
                    'cdp-trigger',
                    `cdp-trigger-${variant}`,
                    `cdp-trigger-${size}`,
                    isOpen && 'active',
                    error && 'has-error',
                    disabled && 'is-disabled'
                )}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                <CalendarIcon className="cdp-trigger-icon" size={16} />
                <span className={cn('cdp-trigger-text', !value && 'cdp-trigger-placeholder')}>
                    {value ? formatDisplay(value, displayFormat) : placeholder}
                </span>
                {clearable && value && !disabled && (
                    <span className="cdp-clear-btn" onClick={handleClear}>
                        <X size={14} />
                    </span>
                )}
            </div>

            {error && <p className="picker-error">{error}</p>}
            {!error && helperText && <p className="picker-helper">{helperText}</p>}

            {/* ── Calendar Card ── */}
            {isOpen && !disabled && (
                <div
                    className="cdp-card animate-scale-in"
                    style={{
                        borderRadius: cardBorderRadius,
                        borderColor: cardBorderColor ?? undefined,
                        borderWidth: showBorder ? cardBorderWidth : '0px',
                        borderStyle: 'solid',
                        boxShadow: showBorder ? undefined : '0 10px 30px rgba(0,0,0,0.1)', // Add shadow if border is hidden
                    }}
                >

                    {/* Card Header — only rendered when innerLabel is provided */}
                    {innerLabel && (
                        <div className="cdp-card-header">
                            <span className="cdp-card-title">{innerLabel}</span>
                        </div>
                    )}

                    {/* Month Navigation */}
                    <div className="cdp-nav">
                        <button type="button" className="cdp-nav-btn" onClick={() => changeMonth(-1)}>
                            <ChevronLeft size={16} />
                        </button>
                        <span className="cdp-month-label">
                            {MONTH_NAMES[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </span>
                        <button type="button" className="cdp-nav-btn" onClick={() => changeMonth(1)}>
                            <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Weekday row */}
                    <div className="cdp-weekdays">
                        {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(d => (
                            <div key={d} className="cdp-weekday">{d}</div>
                        ))}
                    </div>

                    {/* Day grid */}
                    <div className="cdp-grid">
                        {renderDays()}
                    </div>

                    {/* Footer quick action buttons */}
                    {showFooter && (
                        <div className="cdp-footer">
                            {resolvedFooterActions.map((action, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className="cdp-quick-btn"
                                    onClick={() => action.onClick(value ?? '')}
                                >
                                    {action.icon}
                                    {action.label}
                                </button>
                            ))}
                            <button
                                type="button"
                                className="cdp-quick-close"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={14} />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

CalendarDatePicker.displayName = 'CalendarDatePicker';
