import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { AlertProps, AlertVariant } from './alert.types';
import './alert.css';

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
    info: <Info size={20} />,
    success: <CheckCircle2 size={20} />,
    warning: <AlertTriangle size={20} />,
    error: <XCircle size={20} />,
    neutral: <Info size={20} />,
};

export const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    alertStyle = 'soft',
    title,
    children,
    icon,
    dismissible = false,
    onDismiss,
    actionLabel,
    onAction,
    className = '',
    style,
}) => {
    const resolvedIcon = icon === null ? null : (icon ?? defaultIcons[variant]);

    return (
        <div
            className={cn('mango-alert', `variant-${variant}`, `style-${alertStyle}`, className)}
            role="alert"
            style={style}
        >
            {resolvedIcon && (
                <span className="alert-icon" aria-hidden="true">
                    {resolvedIcon}
                </span>
            )}

            <div className="alert-body">
                {title && <p className="alert-title">{title}</p>}
                {children && <div className="alert-description">{children}</div>}
                {actionLabel && onAction && (
                    <button className="alert-action" onClick={onAction}>
                        {actionLabel}
                    </button>
                )}
            </div>

            {dismissible && (
                <button
                    className="alert-dismiss"
                    onClick={onDismiss}
                    aria-label="Dismiss alert"
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
};

Alert.displayName = 'Alert';
