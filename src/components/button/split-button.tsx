import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { sizeMap, variantMap, roundedMap } from '../../utils/component-maps';
import type { SplitButtonProps } from './button.types';
import './button.css';

export const SplitButton: React.FC<SplitButtonProps> = ({
  children,
  icon,
  iconPosition = 'start',
  variant = 'primary',
  size = 'md',
  rounded,
  isLoading,
  disabled,
  onClick,
  bgColor,
  textColor,
  iconColor,
  borderColor,
  actions,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseClasses = cn('mango-btn', sizeMap[size], variantMap[variant], rounded && roundedMap[rounded]);

  const customStyle: React.CSSProperties = {
    ...(bgColor ? { backgroundColor: bgColor, borderColor: bgColor } : {}),
    ...(textColor ? { color: textColor } : {}),
    ...(borderColor ? { borderColor } : {}),
  };

  const iconStyle: React.CSSProperties | undefined = iconColor
    ? { color: iconColor }
    : undefined;

  return (
    <div className={cn('split-btn-wrapper', className)} ref={wrapperRef}>
      <button
        className={cn(baseClasses, 'split-btn-main')}
        onClick={onClick}
        disabled={disabled || isLoading}
        style={customStyle}
        type="button"
      >
        {isLoading ? (
          <svg className="mango-btn-spinner" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle opacity="0.25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path opacity="0.75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          <>
            {icon && iconPosition === 'start' && (
              <span className="mango-btn-icon" style={iconStyle}>{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'end' && (
              <span className="mango-btn-icon" style={iconStyle}>{icon}</span>
            )}
          </>
        )}
      </button>

      <button
        className={cn(baseClasses, 'split-btn-trigger')}
        onClick={() => setOpen((prev) => !prev)}
        disabled={disabled}
        style={customStyle}
        type="button"
        aria-label="Toggle split button menu"
        aria-expanded={open}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className={cn('split-btn-dropdown', open && 'split-btn-open')} role="menu">
        {actions.map((action, i) => (
          <button
            key={i}
            className={cn('split-btn-action', action.danger && 'split-btn-action-danger')}
            onClick={() => {
              action.onClick();
              setOpen(false);
            }}
            role="menuitem"
            type="button"
          >
            {action.icon && (
              <span className="split-btn-action-icon">{action.icon}</span>
            )}
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

SplitButton.displayName = 'SplitButton';
