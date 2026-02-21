import React, { useState, useRef, useEffect } from 'react';
import { Clock, ChevronUp, ChevronDown, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { TimePickerProps } from './time-picker.types';
import './time-picker.css';

const DEFAULT_FOOTER_ACTIONS = (
  onChange: (v: string) => void,
  setIsOpen: (v: boolean) => void,
  use12Hours: boolean
) => [
    {
      label: 'Now',
      icon: <Clock size={13} />,
      onClick: () => {
        const now = new Date();
        const h = now.getHours();
        const m = now.getMinutes();
        const p = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        const base = `${String(use12Hours ? h12 : h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        onChange(use12Hours ? `${base} ${p}` : base);
        setIsOpen(false);
      },
    },
  ];

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
  helperText,
  error,
  use12Hours = false,
  showSeconds = false,
  minuteStep = 1,
  selectionMode = 'digital',
  showBorder = true,
  showFooter = true,
  cardBorderRadius = '20px',
  cardBorderColor,
  cardBorderWidth = '1.5px',
  footerActions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);

  const parseValue = (v?: string): { h: number; m: number; s: number; period: 'AM' | 'PM' } => {
    if (!v) return { h: 12, m: 0, s: 0, period: 'AM' };
    const cleanV = v.toUpperCase();
    const isPM = cleanV.includes('PM');
    const isAM = cleanV.includes('AM');
    const timePart = v.split(' ')[0];
    const parts = timePart.split(':');
    let h = parseInt(parts[0] || '12');
    const m = parseInt(parts[1] || '0');
    const s = parseInt(parts[2] || '0');

    if (use12Hours) {
      const period = isPM ? 'PM' : 'AM';
      return { h, m, s, period };
    } else {
      let h24 = h;
      if (isPM && h < 12) h24 += 12;
      if (isAM && h === 12) h24 = 0;
      return { h: h24, m, s, period: 'AM' as const };
    }
  };

  const initial = parseValue(value);
  const [hours, setHours] = useState(initial.h);
  const [minutes, setMinutes] = useState(initial.m);
  const [seconds, setSeconds] = useState(initial.s);
  const [period, setPeriod] = useState<'AM' | 'PM'>(initial.period);

  useEffect(() => {
    if (value) {
      const { h, m, s, period: p } = parseValue(value);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
      setPeriod(p as 'AM' | 'PM');
    }
  }, [value, use12Hours]);

  const toTimeString = (h: number, m: number, s: number, p: 'AM' | 'PM') => {
    const hStr = String(h).padStart(2, '0');
    const mStr = String(m).padStart(2, '0');
    const base = `${hStr}:${mStr}`;
    const withSec = showSeconds && selectionMode === 'digital' ? `${base}:${String(s).padStart(2, '0')}` : base;
    return use12Hours ? `${withSec} ${p}` : withSec;
  };

  const handleTimeChange = (h: number, m: number, s: number, p: 'AM' | 'PM') => {
    const newVal = toTimeString(h, m, s, p);
    onChange(newVal);
  };

  const adjustHours = (delta: number) => {
    const max = use12Hours ? 12 : 23;
    const min = use12Hours ? 1 : 0;
    let next = hours + delta;
    if (next > max) next = min;
    else if (next < min) next = max;
    setHours(next);
    handleTimeChange(next, minutes, seconds, period);
  };

  const adjustMinutes = (delta: number) => {
    let next = minutes + (delta * minuteStep);
    if (next >= 60) next = 0;
    else if (next < 0) next = 60 - minuteStep;
    setMinutes(next);
    handleTimeChange(hours, next, seconds, period);
  };

  const adjustSeconds = (delta: number) => {
    let next = seconds + delta;
    if (next >= 60) next = 0;
    else if (next < 0) next = 59;
    setSeconds(next);
    handleTimeChange(hours, minutes, next, period);
  };

  const togglePeriod = () => {
    const next = period === 'AM' ? 'PM' : 'AM';
    setPeriod(next);
    handleTimeChange(hours, minutes, seconds, next);
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

  // Analog Clock Dragging Logic
  const handleClockChange = (event: React.MouseEvent | React.TouchEvent) => {
    if (!clockRef.current) return;
    const rect = clockRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    let degree = (angle * 180) / Math.PI + 90;
    if (degree < 0) degree += 360;

    const dist = Math.hypot(clientX - centerX, clientY - centerY);
    const isHourSelection = dist < 70; // Inner area for hours, outer for minutes

    if (isHourSelection) {
      let h = Math.round(degree / 30);
      if (h === 0) h = 12;
      if (!use12Hours && period === 'PM' && h < 12) h += 12;
      if (!use12Hours && period === 'AM' && h === 12) h = 0;
      setHours(h);
      handleTimeChange(h, minutes, seconds, period);
    } else {
      let m = Math.round(degree / 6) % 60;
      m = Math.round(m / minuteStep) * minuteStep;
      if (m === 60) m = 0;
      setMinutes(m);
      handleTimeChange(hours, m, seconds, period);
    }
  };

  const resolvedFooterActions = footerActions ?? DEFAULT_FOOTER_ACTIONS(onChange, setIsOpen, use12Hours);

  return (
    <div className={cn('time-picker-root', className)} ref={dropdownRef}>
      {label && <label className={cn('picker-label', `picker-label-${size}`)}>{label}</label>}

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
        <span className={cn('trigger-text', !value && 'trigger-placeholder')}>
          {value || placeholder}
        </span>
        {value && !disabled && (
          <span className="clear-btn" onClick={handleClear}><X size={14} /></span>
        )}
      </div>

      {error && <p className="picker-error">{error}</p>}
      {!error && helperText && <p className="picker-helper">{helperText}</p>}

      {isOpen && !disabled && (
        <div
          className="time-dropdown animate-scale-in"
          style={{
            borderRadius: cardBorderRadius,
            borderColor: cardBorderColor,
            borderWidth: showBorder ? cardBorderWidth : '0px',
            borderStyle: 'solid',
            boxShadow: showBorder ? undefined : '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          {innerLabel && (
            <div className="time-card-header">
              <span className="time-card-title">{innerLabel}</span>
            </div>
          )}

          {selectionMode === 'analog' ? (
            <div className="analog-clock-container">
              <div
                className="analog-clock-face"
                ref={clockRef}
                onMouseDown={(e) => {
                  handleClockChange(e);
                  const move = (ev: MouseEvent) => handleClockChange(ev as any);
                  const up = () => {
                    window.removeEventListener('mousemove', move);
                    window.removeEventListener('mouseup', up);
                  };
                  window.addEventListener('mousemove', move);
                  window.addEventListener('mouseup', up);
                }}
              >
                <div className="clock-center-dot" />
                {/* Hours Hand */}
                <div
                  className="clock-hand clock-hand-hour"
                  style={{ transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)` }}
                />
                {/* Minute Hand */}
                <div
                  className="clock-hand clock-hand-minute"
                  style={{ transform: `rotate(${minutes * 6}deg)` }}
                />
                {/* Numbers */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
                  const rad = (n * 30 - 90) * (Math.PI / 180);
                  const x = 50 + 40 * Math.cos(rad);
                  const y = 50 + 40 * Math.sin(rad);
                  return (
                    <div
                      key={n}
                      className={cn('clock-number', hours % 12 === n % 12 && 'active')}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {n}
                    </div>
                  );
                })}
              </div>

              {use12Hours && (
                <div className="time-period-column" style={{ flexDirection: 'row' }}>
                  <button className={cn('period-btn', period === 'AM' && 'active')} onClick={togglePeriod}>AM</button>
                  <button className={cn('period-btn', period === 'PM' && 'active')} onClick={togglePeriod}>PM</button>
                </div>
              )}
            </div>
          ) : (
            <div className="time-selector-columns">
              <TimeColumn val={hours} onUp={() => adjustHours(1)} onDown={() => adjustHours(-1)} label="HOUR" />
              <div className="time-separator">:</div>
              <TimeColumn val={minutes} onUp={() => adjustMinutes(1)} onDown={() => adjustMinutes(-1)} label="MIN" />
              {showSeconds && (
                <>
                  <div className="time-separator">:</div>
                  <TimeColumn val={seconds} onUp={() => adjustSeconds(1)} onDown={() => adjustSeconds(-1)} label="SEC" />
                </>
              )}
              {use12Hours && (
                <div className="time-period-column">
                  <button className={cn('period-btn', period === 'AM' && 'active')} onClick={togglePeriod}>AM</button>
                  <button className={cn('period-btn', period === 'PM' && 'active')} onClick={togglePeriod}>PM</button>
                </div>
              )}
            </div>
          )}

          {showFooter && (
            <div className="time-footer">
              {resolvedFooterActions.map((action: any, i: number) => (
                <button
                  key={i}
                  type="button"
                  className="time-quick-btn"
                  onClick={() => action.onClick(value || '')}
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
              <button
                type="button"
                className="time-close-btn"
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

const TimeColumn = ({ val, onUp, onDown, label }: any) => (
  <div className="time-column">
    <button className="time-nav-btn" onClick={onUp}><ChevronUp size={16} /></button>
    <div className="time-value">{String(val).padStart(2, '0')}</div>
    <button className="time-nav-btn" onClick={onDown}><ChevronDown size={18} /></button>
    <span className="time-label">{label}</span>
  </div>
);

TimePicker.displayName = 'TimePicker';
