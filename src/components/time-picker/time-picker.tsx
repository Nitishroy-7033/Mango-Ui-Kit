import React, { useState, useRef, useEffect } from 'react';
import { Clock, ChevronUp, ChevronDown, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { TimePickerProps } from './time-picker.types';
import './time-picker.css';

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select time',
  className = '',
  variant = 'default',
  size = 'md',
  disabled = false,
  label,
  innerLabel,
  innerLabelPosition = 'left',
  helperText,
  error,
  use12Hours = false,
  showSeconds = false,
  minuteStep = 1,
}) => {
  const parseValue = (v?: string) => {
    if (!v) return { h: 12, m: 0, s: 0, period: 'AM' as 'AM' | 'PM' };
    const parts = v.split(':');
    let h = parseInt(parts[0] || '12');
    const m = parseInt(parts[1] || '0');
    const s = parseInt(parts[2] || '0');
    let period: 'AM' | 'PM' = 'AM';
    if (use12Hours) {
      period = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
    }
    return { h, m, s, period };
  };

  const initial = parseValue(value);
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(initial.h);
  const [minutes, setMinutes] = useState(initial.m);
  const [seconds, setSeconds] = useState(initial.s);
  const [period, setPeriod] = useState<'AM' | 'PM'>(initial.period);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toTimeString = (h: number, m: number, s: number, p: 'AM' | 'PM') => {
    let h24 = h;
    if (use12Hours) {
      if (p === 'AM' && h === 12) h24 = 0;
      else if (p === 'PM' && h !== 12) h24 = h + 12;
    }
    const base = `${String(h24).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    return showSeconds ? `${base}:${String(s).padStart(2, '0')}` : base;
  };

  const displayValue = () => {
    if (!value) return null;
    const { h, m, s, period: p } = parseValue(value);
    const hStr = String(h).padStart(2, '0');
    const mStr = String(m).padStart(2, '0');
    const sStr = String(s).padStart(2, '0');
    if (use12Hours) {
      return showSeconds ? `${hStr}:${mStr}:${sStr} ${p}` : `${hStr}:${mStr} ${p}`;
    }
    return showSeconds ? `${String(value.split(':')[0]).padStart(2, '0')}:${mStr}:${sStr}` : value;
  };

  const adjustHours = (delta: number) => {
    const max = use12Hours ? 12 : 23;
    const min = use12Hours ? 1 : 0;
    let next = hours + delta;
    if (next > max) next = min;
    if (next < min) next = max;
    setHours(next);
    onChange(toTimeString(next, minutes, seconds, period));
  };

  const adjustMinutes = (delta: number) => {
    let next = minutes + (delta * minuteStep);
    if (next > 59) next = 0;
    if (next < 0) next = 59 - (minuteStep - 1);
    setMinutes(next);
    onChange(toTimeString(hours, next, seconds, period));
  };

  const adjustSeconds = (delta: number) => {
    let next = seconds + delta;
    if (next > 59) next = 0;
    if (next < 0) next = 59;
    setSeconds(next);
    onChange(toTimeString(hours, minutes, next, period));
  };

  const togglePeriod = () => {
    const next = period === 'AM' ? 'PM' : 'AM';
    setPeriod(next);
    onChange(toTimeString(hours, minutes, seconds, next));
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

  const TimeColumn = ({
    val,
    onUp,
    onDown,
    labelText,
  }: { val: number; onUp: () => void; onDown: () => void; labelText: string }) => (
    <div className="time-column">
      <button className="time-nav-btn" onClick={onUp}><ChevronUp size={18} /></button>
      <div className="time-value">{String(val).padStart(2, '0')}</div>
      <button className="time-nav-btn" onClick={onDown}><ChevronDown size={18} /></button>
      <span className="time-label">{labelText}</span>
    </div>
  );

  return (
    <div className={cn('time-picker-root', className)} ref={dropdownRef}>
      {label && (
        <label className={cn('picker-label', `picker-label-${size}`)}>
          {label}
        </label>
      )}

      <div
        className={cn(
          'time-input-trigger',
          `time-trigger-${variant}`,
          `time-trigger-${size}`,
          isOpen && 'active',
          error && 'has-error',
          disabled && 'is-disabled'
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <Clock className="trigger-icon" size={16} />
        <span className={cn('trigger-content', innerLabel && `trigger-content-${innerLabelPosition}`)}>
          {innerLabel && (
            <>
              <span className="trigger-inner-label">{innerLabel}</span>
              {innerLabelPosition === 'left' && <span className="trigger-inner-divider">|</span>}
            </>
          )}
          <span className={cn('trigger-text', !value && 'trigger-placeholder')}>
            {displayValue() || placeholder}
          </span>
        </span>
        {value && !disabled && (
          <span className="clear-btn" onClick={handleClear}>
            <X size={14} />
          </span>
        )}
      </div>

      {error && <p className="picker-error">{error}</p>}
      {!error && helperText && <p className="picker-helper">{helperText}</p>}

      {isOpen && !disabled && (
        <div className="time-dropdown animate-scale-in">
          <div className="time-selector-columns">
            <TimeColumn
              val={hours}
              onUp={() => adjustHours(1)}
              onDown={() => adjustHours(-1)}
              labelText={use12Hours ? 'HOUR' : 'HOURS'}
            />
            <div className="time-separator">:</div>
            <TimeColumn
              val={minutes}
              onUp={() => adjustMinutes(1)}
              onDown={() => adjustMinutes(-1)}
              labelText="MINS"
            />
            {showSeconds && (
              <>
                <div className="time-separator">:</div>
                <TimeColumn
                  val={seconds}
                  onUp={() => adjustSeconds(1)}
                  onDown={() => adjustSeconds(-1)}
                  labelText="SECS"
                />
              </>
            )}
            {use12Hours && (
              <div className="time-period-column">
                <button
                  className={cn('period-btn', period === 'AM' && 'active')}
                  onClick={togglePeriod}
                >
                  AM
                </button>
                <button
                  className={cn('period-btn', period === 'PM' && 'active')}
                  onClick={togglePeriod}
                >
                  PM
                </button>
              </div>
            )}
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
