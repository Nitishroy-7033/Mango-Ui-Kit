import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { DateRangePickerProps } from './date-range-picker.types';
import './date-range-picker.css';

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
    value,
    onChange,
    placeholder = 'Select date range',
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const dropdownRef = useRef<HTMLDivElement>(null);

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const formatDate = (date: Date | null) => {
        if (!date) return null;
        return date.toISOString().split('T')[0];
    };

    const handleDateSelect = (day: number) => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const dateStr = formatDate(selectedDate);

        if (!value.startDate || (value.startDate && value.endDate)) {
            onChange({ startDate: dateStr, endDate: null });
        } else {
            const start = new Date(value.startDate);
            if (selectedDate < start) {
                onChange({ startDate: dateStr, endDate: value.startDate });
            } else {
                onChange({ ...value, endDate: dateStr });
            }
        }
    };

    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const clearRange = () => {
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
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        const start = value.startDate ? new Date(value.startDate) : null;
        const end = value.endDate ? new Date(value.endDate) : null;

        for (let d = 1; d <= totalDays; d++) {
            const date = new Date(year, month, d);
            const dateStr = formatDate(date);

            const isStart = value.startDate === dateStr;
            const isEnd = value.endDate === dateStr;
            const isInRange = start && end && date > start && date < end;
            const isToday = new Date().toDateString() === date.toDateString();

            days.push(
                <div
                    key={d}
                    className={cn(
                        'calendar-day',
                        isStart && 'start',
                        isEnd && 'end',
                        isInRange && 'in-range',
                        isToday && 'today'
                    )}
                    onClick={() => handleDateSelect(d)}
                >
                    {d}
                </div>
            );
        }

        return days;
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className={cn('date-range-picker', className)} ref={dropdownRef}>
            <div className={cn('range-input-trigger', isOpen && 'active')} onClick={() => setIsOpen(!isOpen)}>
                <CalendarIcon size={16} />
                <div className="date-display">
                    <span>{value.startDate || placeholder.split('-')[0] || 'Start date'}</span>
                    <span className="separator">-</span>
                    <span>{value.endDate || placeholder.split('-')[1] || 'End date'}</span>
                </div>
            </div>

            {isOpen && (
                <div className="calendar-dropdown">
                    <div className="calendar-header">
                        <button type="button" onClick={() => changeMonth(-1)}><ChevronLeft size={16} /></button>
                        <span className="current-month">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                        <button type="button" onClick={() => changeMonth(1)}><ChevronRight size={16} /></button>
                    </div>
                    <div className="calendar-weekdays">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                            <div key={day} className="weekday">{day}</div>
                        ))}
                    </div>
                    <div className="calendar-grid">
                        {renderCalendar()}
                    </div>
                    <div className="calendar-footer">
                        <button type="button" className="clear-btn" onClick={clearRange}>Clear Range</button>
                    </div>
                </div>
            )}
        </div>
    );
};

DateRangePicker.displayName = 'DateRangePicker';
