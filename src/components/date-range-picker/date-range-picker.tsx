import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { DateRangePickerProps } from './date-range-picker.types';
import './date-range-picker.css';

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const toISO = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
    value,
    onChange,
    placeholder = 'Select date range',
    className = '',
    variant = 'default',
    size = 'md',
    disabled = false,
    label,
    innerLabel,
    helperText,
    error,
    minDate,
    maxDate,
    clearable = true,
    presets = [],
    showBorder = true,
    showFooter = true,
    cardBorderRadius = '18px',
    cardBorderColor,
    cardBorderWidth = '1.5px',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [hoveredDate, setHoveredDate] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const isDayDisabled = (dateStr: string) => {
        if (minDate && dateStr < minDate) return true;
        if (maxDate && dateStr > maxDate) return true;
        return false;
    };

    const handleDateSelect = (day: number) => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const selectedDate = new Date(year, month, day);
        const dateStr = toISO(selectedDate);
        if (isDayDisabled(dateStr)) return;

        if (!value.startDate || (value.startDate && value.endDate)) {
            onChange({ startDate: dateStr, endDate: null });
        } else {
            const start = new Date(value.startDate + 'T00:00:00');
            if (selectedDate < start) {
                onChange({ startDate: dateStr, endDate: value.startDate });
            } else {
                onChange({ ...value, endDate: dateStr });
                setIsOpen(false);
            }
        }
    };

    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const clearRange = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange({ startDate: null, endDate: null });
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

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const totalDays = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="drp-day empty" />);
        }

        const selStart = value.startDate || null;
        const selEnd = value.endDate || hoveredDate || null;
        const todayISO = toISO(new Date());

        for (let d = 1; d <= totalDays; d++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const isStart = dateStr === selStart;
            const isEnd = dateStr === selEnd;
            const isInRange = selStart && selEnd && dateStr > selStart && dateStr < selEnd;
            const isToday = dateStr === todayISO;
            const isDisabled = isDayDisabled(dateStr);

            days.push(
                <div
                    key={d}
                    className={cn(
                        'drp-day',
                        isStart && 'start',
                        isEnd && selEnd !== selStart && 'end',
                        isInRange && 'in-range',
                        isToday && !isStart && !isEnd && 'today',
                        isDisabled && 'disabled'
                    )}
                    onClick={() => !isDisabled && handleDateSelect(d)}
                    onMouseEnter={() => value.startDate && !value.endDate && setHoveredDate(dateStr)}
                    onMouseLeave={() => setHoveredDate(null)}
                >
                    {d}
                </div>
            );
        }

        return days;
    };

    const displayText = () => {
        if (value.startDate && value.endDate) return `${value.startDate}  →  ${value.endDate}`;
        if (value.startDate) return `${value.startDate}  →  ...`;
        return placeholder;
    };

    const hasValue = !!(value.startDate || value.endDate);

    return (
        <div className={cn('date-range-picker', className)} ref={dropdownRef}>
            {label && (
                <label className={cn('picker-label', `picker-label-${size}`)}>{label}</label>
            )}

            <div
                className={cn(
                    'range-input-trigger',
                    `range-trigger-${variant}`,
                    `range-trigger-${size}`,
                    isOpen && 'active',
                    error && 'has-error',
                    disabled && 'is-disabled'
                )}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                <CalendarIcon className="trigger-icon" size={16} />
                <span className={cn('trigger-text', !hasValue && 'trigger-placeholder')}>
                    {displayText()}
                </span>
                {clearable && hasValue && !disabled && (
                    <span className="drp-clear-btn" onClick={clearRange}>
                        <X size={14} />
                    </span>
                )}
            </div>

            {error && <p className="picker-error">{error}</p>}
            {!error && helperText && <p className="picker-helper">{helperText}</p>}

            {isOpen && !disabled && (
                <div
                    className="drp-dropdown animate-scale-in"
                    style={{
                        borderRadius: cardBorderRadius,
                        borderColor: cardBorderColor ?? undefined,
                        borderWidth: showBorder ? cardBorderWidth : '0px',
                        borderStyle: 'solid',
                        boxShadow: showBorder ? undefined : '0 10px 30px rgba(0,0,0,0.1)',
                    }}
                >
                    {innerLabel && (
                        <div className="drp-card-header">
                            <span className="drp-card-title">{innerLabel}</span>
                        </div>
                    )}

                    {/* Quick preset ranges */}
                    {presets.length > 0 && (
                        <div className="drp-presets">
                            {presets.map((p) => (
                                <button
                                    key={p.label}
                                    className="drp-preset-btn"
                                    onClick={() => { onChange(p.range); setIsOpen(false); }}
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="drp-calendar-section">
                        <div className="drp-calendar-header">
                            <button type="button" className="calendar-nav-btn" onClick={() => changeMonth(-1)}>
                                <ChevronLeft size={16} />
                            </button>
                            <span className="current-month">
                                {MONTH_NAMES[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </span>
                            <button type="button" className="calendar-nav-btn" onClick={() => changeMonth(1)}>
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        <div className="drp-weekdays">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                <div key={day} className="weekday">{day}</div>
                            ))}
                        </div>

                        <div className="drp-grid">
                            {renderCalendar()}
                        </div>

                        {showFooter && (
                            <div className="drp-footer">
                                <span className="drp-hint">
                                    {!value.startDate ? 'Click to set start date' :
                                        !value.endDate ? 'Click to set end date' :
                                            `${value.startDate} → ${value.endDate}`}
                                </span>
                                {clearable && hasValue && (
                                    <button className="drp-clear-range-btn" onClick={(e) => clearRange(e)}>
                                        Clear
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

DateRangePicker.displayName = 'DateRangePicker';
