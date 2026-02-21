import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { ToastProps } from './toast.types';

const variantIcons = {
    success: <CheckCircle2 size={20} />,
    error: <XCircle size={20} />,
    warning: <AlertTriangle size={20} />,
    info: <Info size={20} />,
    message: null,
};

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

    const handleClose = () => {
        if (id) onClose(id);
    };

    const resolvedIcon = icon || variantIcons[variant];

    return (
        <div
            className={cn(
                'mango-toast-item',
                `mango-toast-${variant}`,
                visible ? 'mango-toast-enter-active' : 'mango-toast-exit',
                duration > 0 && 'has-duration'
            )}
            role="alert"
        >
            {resolvedIcon && (
                <div className="mango-toast-icon">
                    {resolvedIcon}
                </div>
            )}

            <div className="mango-toast-content">
                {title && <h4 className="mango-toast-title">{title}</h4>}
                <div className="mango-toast-description">{description}</div>
                {action && (
                    <button
                        className="mango-toast-action"
                        onClick={(e) => {
                            e.stopPropagation();
                            action.onClick();
                        }}
                    >
                        {action.label}
                    </button>
                )}
            </div>

            {closable && (
                <button className="mango-toast-close" onClick={handleClose}>
                    <X size={16} />
                </button>
            )}

            {duration > 0 && (
                <div
                    className="mango-toast-progress"
                    style={{ animationDuration: `${duration}ms` }}
                />
            )}
        </div>
    );
};
