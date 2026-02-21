import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { SidebarProps } from './sidebar.types';
import './sidebar.css';

export const Sidebar: React.FC<SidebarProps> = ({
  sections = [],
  isOpen = false,
  onClose,
  logo,
  footer,
  className,
}) => {
  return (
    <>
      <div
        className={cn('sidebar-overlay', isOpen && 'show')}
        onClick={onClose}
      />
      <aside className={cn('sidebar', isOpen && 'open', className)}>
        <div className="sidebar-header">
          <div className="logo-container">
            {logo}
          </div>
          <button
            className="sidebar-close-btn"
            onClick={onClose}
            aria-label="Close Sidebar"
          >
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-scroll">
          {sections.map((section, idx) => (
            <div key={idx} className="sidebar-section">
              <h3 className="section-title">{section.title}</h3>
              <nav>
                {section.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.path || '#'}
                    className={cn('nav-item', link.active && 'active')}
                    onClick={(e) => {
                      if (link.onClick) {
                        e.preventDefault();
                        link.onClick();
                      }
                      onClose?.();
                    }}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    <span className="nav-label">{link.label}</span>
                    {link.badge && <span className="nav-badge">{link.badge}</span>}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {footer && (
          <div className="sidebar-footer">
            {footer}
          </div>
        )}
      </aside>
    </>
  );
};

Sidebar.displayName = 'Sidebar';
