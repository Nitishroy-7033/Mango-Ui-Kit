import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import './CalendarDatePicker.css';

const CalendarDatePicker = ({ value, onChange, placeholder = 'Select date' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(value ? new Date(value) : new Date());
    const dropdownRef = useRef(null);

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };

    const handleDateSelect = (day) => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        onChange(formatDate(selectedDate));
        setIsOpen(false);
    };

    const changeMonth = (offset) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
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
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const totalDays = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);
        const days = [];

        // Fill empty slots at start
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Fill actual days
        const selectedDay = value ? new Date(value).getDate() : null;
        const isSameMonth = value && new Date(value).getMonth() === month && new Date(value).getFullYear() === year;

        for (let d = 1; d <= totalDays; d++) {
            const isSelected = isSameMonth && selectedDay === d;
            const isToday = new Date().getDate() === d && new Date().getMonth() === month && new Date().getFullYear() === year;

            days.push(
                <div
                    key={d}
                    className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
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
        <div className="calendar-date-picker" ref={dropdownRef}>
            <div className={`date-input-trigger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <CalendarIcon size={16} />
                <span>{value ? value : placeholder}</span>
            </div>

            {isOpen && (
                <div className="calendar-dropdown animate-scale-in">
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
                </div>
            )}
        </div>
    );
};

export default CalendarDatePicker;
