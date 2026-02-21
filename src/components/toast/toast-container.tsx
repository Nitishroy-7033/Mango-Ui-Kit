import React from 'react';
import { useToast } from '../../hooks/use-toast';
import { Toast } from './toast';
import type { ToastPosition } from './toast.types';
import './toast.css';

interface ToastContainerProps {
    position?: ToastPosition;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
    position = 'top-right',
}) => {
    const { toasts, dismiss } = useToast();

    if (toasts.length === 0) return null;

    return (
        <div className={`mango-toast-container ${position}`}>
            {toasts.map((t) => (
                <Toast
                    key={t.id}
                    {...t}
                    onClose={dismiss}
                />
            ))}
        </div>
    );
};
