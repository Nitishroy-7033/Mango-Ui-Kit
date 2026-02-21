import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './Drawer.css';

/**
 * Common Side Drawer Component
 * @param {Object} props
 * @param {boolean} props.isOpen - Visibility state
 * @param {function} props.onClose - Function to close the drawer
 * @param {string} props.title - Main header title
 * @param {string} props.subtitle - Optional subtitle below title
 * @param {string} props.width - Optional custom width (default 420px)
 * @param {React.ReactNode} props.children - Body content
 * @param {React.ReactNode} props.footer - Footer actions
 * @param {string} props.className - Extra classes for the drawer container
 */
const Drawer = ({
    isOpen,
    onClose,
    title,
    subtitle,
    children,
    footer,
    width = '420px',
    className = ''
}) => {
    // Handle Esc key and Body Scroll
    useEffect(() => {
        const handleEsc = (e) => {
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
        <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div
                className={`common-side-drawer glass-card ${className} ${isOpen ? 'open' : ''}`}
                style={{ '--drawer-width': width }}
                onClick={e => e.stopPropagation()}
            >
                <header className="drawer-header">
                    <div className="header-text">
                        <h2>{title}</h2>
                        {subtitle && <p className="subtitle">{subtitle}</p>}
                    </div>
                    <button className="close-btn" onClick={onClose} aria-label="Close">
                        <X size={40} />
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

export default Drawer;
