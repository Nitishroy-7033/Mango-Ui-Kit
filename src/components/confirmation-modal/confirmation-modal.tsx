import React from 'react';
import { X, AlertTriangle, Trash2, Info } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { ConfirmationModalProps } from './confirmation-modal.types';
import './confirmation-modal.css';

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm Action",
    message = "Are you sure you want to proceed?",
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    type = "danger",
    className = '',
}) => {
    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'danger': return <Trash2 size={24} />;
            case 'warning': return <AlertTriangle size={24} />;
            case 'primary': return <Info size={24} />;
            default: return <Info size={24} />;
        }
    };

    return (
        <div className="conf-modal-overlay" onClick={onClose}>
            <div
                className={cn('conf-modal-content animate-pop-in', className)}
                onClick={e => e.stopPropagation()}
            >
                <header className="conf-modal-header">
                    <div className={cn('icon-badge', type)}>
                        {getIcon()}
                    </div>
                    <button className="conf-close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </header>

                <div className="conf-modal-body">
                    <h3>{title}</h3>
                    <p>{message}</p>
                </div>

                <footer className="conf-modal-footer">
                    <button className="conf-btn-secondary" onClick={onClose}>
                        {cancelLabel}
                    </button>
                    <button
                        className={cn('conf-btn-primary', type)}
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                    >
                        {confirmLabel}
                    </button>
                </footer>
            </div>
        </div>
    );
};

ConfirmationModal.displayName = 'ConfirmationModal';
