import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import './modal.css';

export interface ModalProps {
    /** Whether the modal is visible */
    isOpen: boolean;
    /** Function to call when closing the modal */
    onClose: () => void;
    /** Optional title for the modal header */
    title?: string;
    /** Modal content */
    children: React.ReactNode;
    /** Additional CSS class for the content container */
    className?: string;
    /** Whether clicking the backdrop should close the modal */
    closeOnOverlayClick?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    className,
    closeOnOverlayClick = true
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Focus trapping would go here (or via a hook)
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="mango-modal-overlay">
            <div
                className="mango-modal-backdrop"
                onClick={closeOnOverlayClick ? onClose : undefined}
            />
            <div
                ref={modalRef}
                className={cn("mango-modal-content", className)}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "mango-modal-title" : undefined}
            >
                <div className="mango-modal-header">
                    {title && (
                        <h2 id="mango-modal-title" className="mango-modal-title">
                            {title}
                        </h2>
                    )}
                    <button
                        onClick={onClose}
                        className="mango-modal-close"
                        aria-label="Close modal"
                        type="button"
                    >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mango-modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

Modal.displayName = 'Modal';
