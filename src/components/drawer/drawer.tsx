import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { DrawerProps } from './drawer.types';
import './drawer.css';

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  position = 'right',
  size = '420px',
  showClose = true,
  showHeader = true,
  showFooter = true,
  className = '',
  style,
}) => {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Small timeout to ensure the DOM is painted before adding the "active" class
      const timer = setTimeout(() => setActive(true), 10);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      setActive(false);
      // Wait for the transition to finish before unmounting (400ms matches CSS)
      const timer = setTimeout(() => setMounted(false), 400);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  const drawerStyle = {
    ...style,
    '--drawer-size': sizeValue,
  } as React.CSSProperties;

  return createPortal(
    <div className={cn('mango-drawer-overlay', active && 'active')} onClick={onClose}>
      <div
        className={cn(
          'mango-drawer',
          `is-${position}`,
          active && 'open',
          className
        )}
        style={drawerStyle}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {showHeader && (title || showClose) && (
          <header className="mango-drawer-header">
            {(title || subtitle) && (
              <div className="mango-drawer-header-text">
                {title && <h2 className="mango-drawer-title">{title}</h2>}
                {subtitle && <p className="mango-drawer-subtitle">{subtitle}</p>}
              </div>
            )}
            {showClose && (
              <button className="mango-drawer-close-btn" onClick={onClose} aria-label="Close">
                <X size={20} />
              </button>
            )}
          </header>
        )}

        <div className="mango-drawer-body">
          {children}
        </div>

        {showFooter && footer && (
          <footer className="mango-drawer-footer">
            {footer}
          </footer>
        )}
      </div>
    </div>,
    document.body
  );
};

Drawer.displayName = 'Drawer';
