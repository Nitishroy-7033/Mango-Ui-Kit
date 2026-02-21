import { default as React } from '../../../node_modules/react';
export type ToastVariant = 'success' | 'error' | 'warning' | 'info' | 'message';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
export interface ToastOptions {
    /** The title of the toast */
    title?: string;
    /** The main message content */
    description: React.ReactNode;
    /** Visual style variant */
    variant?: ToastVariant;
    /** Duration in ms before auto-closing (0 to disable) */
    duration?: number;
    /** Custom icon */
    icon?: React.ReactNode;
    /** Whether the toast can be dismissed manually */
    closable?: boolean;
    /** Action button */
    action?: {
        label: string;
        onClick: () => void;
    };
    /** Unique ID for the toast */
    id?: string;
}
export interface ToastProps extends ToastOptions {
    onClose: (id: string) => void;
    visible?: boolean;
}
export interface ToastState extends ToastOptions {
    id: string;
    visible: boolean;
}
