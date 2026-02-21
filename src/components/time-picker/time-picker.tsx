import React, { useState, useRef, useEffect } from 'react';
import { Clock, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { TimePickerProps } from './time-picker.types';
import './time-picker.css';

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select time',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [hours, setHours] = useState(value ? value.split(':')[0] : '12');
  const [minutes, setMinutes] = useState(value ? value.split(':')[1] : '00');

  const updateTime = (h: string, m: string) => {
    const timeStr = `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
    onChange(timeStr);
  };

  const handleHourChange = (delta: number) => {
    let newHour = parseInt(hours) + delta;
    if (newHour > 23) newHour = 0;
    if (newHour < 0) newHour = 23;
    const hStr = newHour.toString().padStart(2, '0');
    setHours(hStr);
    updateTime(hStr, minutes);
  };

  const handleMinuteChange = (delta: number) => {
    let newMinute = parseInt(minutes) + delta;
    if (newMinute > 59) newMinute = 0;
    if (newMinute < 0) newMinute = 59;
    const mStr = newMinute.toString().padStart(2, '0');
    setMinutes(mStr);
    updateTime(hours, mStr);
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

  return (
    <div className={cn('time-picker-root', className)} ref={dropdownRef}>
      <div
        className={cn('time-input-trigger', isOpen && 'active')}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Clock size={16} />
        <span>{value ? value : placeholder}</span>
      </div>

      {isOpen && (
        <div className="time-dropdown animate-scale-in">
          <div className="time-selector-columns">
            <div className="time-column">
              <button onClick={() => handleHourChange(1)}>
                <ChevronUp size={20} />
              </button>
              <div className="time-value">{hours}</div>
              <button onClick={() => handleHourChange(-1)}>
                <ChevronDown size={20} />
              </button>
              <span className="time-label">HOURS</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-column">
              <button onClick={() => handleMinuteChange(1)}>
                <ChevronUp size={20} />
              </button>
              <div className="time-value">{minutes}</div>
              <button onClick={() => handleMinuteChange(-1)}>
                <ChevronDown size={20} />
              </button>
              <span className="time-label">MINS</span>
            </div>
          </div>
          <div className="time-footer">
            <button className="confirm-btn" onClick={() => setIsOpen(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

TimePicker.displayName = 'TimePicker';
