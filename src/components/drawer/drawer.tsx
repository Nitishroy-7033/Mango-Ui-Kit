import React, { useEffect } from 'react';
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
  width = '420px',
  className = '',
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={cn('drawer-overlay', isOpen && 'active')} onClick={onClose}>
      <div
        className={cn('common-side-drawer', className, isOpen && 'open')}
        style={{ '--drawer-width': width } as React.CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="drawer-header">
          <div className="header-text">
            <h2>{title}</h2>
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>
        </header>

        <div className="drawer-body">
          {children}
        </div>

        {footer && (
          <footer className="drawer-footer">
            {footer}
          </footer>
        )}
      </div>
    </div>,
    document.body
  );
};

Drawer.displayName = 'Drawer';
