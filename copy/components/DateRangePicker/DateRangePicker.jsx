import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './DateRangePicker.css';

const DateRangePicker = ({ startDate, endDate, onChange, placeholder = 'Select range' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [viewDate, setViewDate] = useState(startDate ? new Date(startDate) : new Date());
    const dropdownRef = useRef(null);

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };

    const handleDateSelect = (day) => {
        const selectedDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);

        if (!startDate || (startDate && endDate)) {
            // Start new selection
            onChange({ startDate: formatDate(selectedDate), endDate: null });
        } else {
            // Complete selection
            const start = new Date(startDate);
            if (selectedDate < start) {
                onChange({ startDate: formatDate(selectedDate), endDate: startDate });
            } else {
                onChange({ startDate, endDate: formatDate(selectedDate) });
            }
            setIsOpen(false);
        }
    };

    const changeMonth = (offset) => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const renderCalendar = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const totalDays = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        for (let d = 1; d <= totalDays; d++) {
            const current = new Date(year, month, d);
            const isStart = start && current.getTime() === start.getTime();
            const isEnd = end && current.getTime() === end.getTime();
            const isInRange = start && end && current > start && current < end;
            const isToday = new Date().toDateString() === current.toDateString();

            days.push(
                <div
                    key={d}
                    className={`calendar-day ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''} ${isInRange ? 'in-range' : ''} ${isToday ? 'today' : ''}`}
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
        <div className="date-range-picker" ref={dropdownRef}>
            <div className={`range-input-trigger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="date-display">
                    <CalendarIcon size={16} />
                    <span>{startDate ? startDate : 'Start Date'}</span>
                </div>
                <ArrowRight size={14} className="separator" />
                <div className="date-display">
                    <span>{endDate ? endDate : 'End Date'}</span>
                </div>
            </div>

            {isOpen && (
                <div className="calendar-dropdown animate-scale-in">
                    <div className="calendar-header">
                        <button type="button" onClick={() => changeMonth(-1)}><ChevronLeft size={16} /></button>
                        <span className="current-month">{monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}</span>
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
                        <button className="clear-btn" onClick={() => onChange({ startDate: null, endDate: null })}>Clear</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateRangePicker;
