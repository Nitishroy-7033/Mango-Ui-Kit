import React, { useEffect } from 'react';
import { cn } from '../../utils/cn';
import type { ToastProps } from './toast.types';

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = 'message',
  duration = 5000,
  icon,
  closable = true,
  action,
  onClose,
  visible = true,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        if (id) onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  return (
    <div
      className={cn(
        'mango-toast-item',
        `mango-toast-${variant}`,
        visible ? 'mango-toast-enter-active' : 'mango-toast-exit',
        duration > 0 && 'has-duration',
      )}
      role="alert"
    >
      {icon && (
        <div className="mango-toast-icon">{icon}</div>
      )}

      <div className="mango-toast-content">
        {title && <h4 className="mango-toast-title">{title}</h4>}
        <div className="mango-toast-description">{description}</div>
        {action && (
          <button
            className="mango-toast-action"
            onClick={(e) => { e.stopPropagation(); action.onClick(); }}
            type="button"
          >
            {action.label}
          </button>
        )}
      </div>

      {closable && (
        <button className="mango-toast-close" onClick={() => { if (id) onClose(id); }} type="button" aria-label="Close toast">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}

      {duration > 0 && (
        <div className="mango-toast-progress" style={{ animationDuration: `${duration}ms` }} />
      )}
    </div>
  );
};

Toast.displayName = 'Toast';
