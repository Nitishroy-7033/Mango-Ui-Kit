import React from 'react';
import { X, AlertTriangle, Trash2 } from 'lucide-react';
import './Style.css';

const ConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm Action",
    message = "Are you sure you want to proceed?",
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    type = "danger" // danger, warning, primary
}) => {
    if (!isOpen) return null;

    return (
        <div className="conf-modal-overlay" onClick={onClose}>
            <div className="conf-modal-content animate-pop-in" onClick={e => e.stopPropagation()}>
                <header className="conf-modal-header">
                    <div className={`icon-badge ${type}`}>
                        {type === 'danger' ? <Trash2 size={20} /> : <AlertTriangle size={20} />}
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
                        className={`conf-btn-primary ${type}`}
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

export default ConfirmationModal;
