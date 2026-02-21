import React, { useEffect } from 'react';
import { X, AlertTriangle, CheckCircle2, Info, AlertCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../button';
import type { DialogProps, DialogButtonProps } from './dialog.types';
import './dialog.css';

export const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    title,
    description,
    icon,
    variant = 'primary',
    iconBgColor,
    iconColor,
    primaryButton,
    secondaryButton,
    showClose = true,
    showHeader = true,
    showFooter = true,
    closeOnOverlayClick = true,
    width = 440,
    borderRadius,
    className,
    style,
    children,
}) => {
    // Handle Esc key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const getDefaultIcon = () => {
        switch (variant) {
            case 'success': return <CheckCircle2 size={24} />;
            case 'warning': return <AlertTriangle size={24} />;
            case 'danger': return <AlertCircle size={24} />;
            case 'info':
            case 'primary':
            default: return <Info size={24} />;
        }
    };

    const dialogStyle = {
        '--dialog-width': typeof width === 'number' ? `${width}px` : width,
        '--dialog-radius': borderRadius,
        '--icon-custom-bg': iconBgColor,
        '--icon-custom-color': iconColor,
        ...style,
    } as React.CSSProperties;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
        }
    };

    const renderButton = (btn: DialogButtonProps, isPrimary: boolean) => {
        const { label, onClick, variant: btnVariant, loading, disabled, className: btnClassName, style: btnStyle } = btn;

        let finalVariant: any = btnVariant || (isPrimary ? 'primary' : 'secondary');
        let finalBgColor: string | undefined = undefined;

        // Map Dialog variants to Button colors if needed
        if (isPrimary && !btnVariant) {
            if (variant === 'success') finalBgColor = '#10b981';
            if (variant === 'warning') finalBgColor = '#f59e0b';
            if (variant === 'danger') finalVariant = 'danger';
            if (variant === 'info') finalBgColor = '#3b82f6';
        }

        return (
            <Button
                variant={finalVariant}
                bgColor={finalBgColor}
                onClick={onClick}
                isLoading={loading}
                disabled={disabled}
                className={cn('mango-dialog-btn-wrapper', btnClassName)}
                style={btnStyle}
                fullWidth
                rounded="lg"
            >
                {label}
            </Button>
        );
    };

    return (
        <div className="mango-dialog-overlay animate-fade-in" onClick={handleOverlayClick}>
            <div
                className={cn('mango-dialog-container animate-slide-up', className)}
                role="dialog"
                aria-modal="true"
                style={dialogStyle}
            >
                {/* Header with Icon and Close */}
                {showHeader && (
                    <div className="mango-dialog-header">
                        <div className={cn('mango-dialog-icon-badge', variant)}>
                            {icon || getDefaultIcon()}
                        </div>
                        {showClose && (
                            <button
                                className="mango-dialog-close"
                                onClick={onClose}
                                aria-label="Close dialog"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                )}

                {/* Content Section */}
                {(title || description || children) && (
                    <div className="mango-dialog-body">
                        {title && <h2 className="mango-dialog-title">{title}</h2>}
                        {(description || children) && (
                            <div className="mango-dialog-description">
                                {children || description}
                            </div>
                        )}
                    </div>
                )}

                {/* Actions Footer */}
                {showFooter && (primaryButton || secondaryButton) && (
                    <div className="mango-dialog-footer">
                        {secondaryButton && renderButton(secondaryButton, false)}
                        {primaryButton && renderButton(primaryButton, true)}
                    </div>
                )}
            </div>
        </div>
    );
};

Dialog.displayName = 'Dialog';
