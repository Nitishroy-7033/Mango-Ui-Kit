import { useState, useEffect } from 'react';
import type { ToastOptions, ToastState } from '../components/toast/toast.types';

type ToastListener = (toasts: ToastState[]) => void;

let toasts: ToastState[] = [];
let listeners: ToastListener[] = [];

const notify = () => {
    listeners.forEach((listener) => listener([...toasts]));
};

export const toast = (options: ToastOptions | string) => {
    const id = Math.random().toString(36).substring(2, 9);
    const toastOptions = typeof options === 'string' ? { description: options } : options;

    const newToast: ToastState = {
        id,
        visible: true,
        variant: 'message',
        duration: 5000,
        ...toastOptions,
    };

    toasts = [...toasts, newToast];
    notify();

    return id;
};

toast.success = (options: Omit<ToastOptions, 'variant'> | string) => {
    const opt = typeof options === 'string' ? { description: options } : options;
    return toast({ ...opt, variant: 'success' });
};

toast.error = (options: Omit<ToastOptions, 'variant'> | string) => {
    const opt = typeof options === 'string' ? { description: options } : options;
    return toast({ ...opt, variant: 'error' });
};

toast.warning = (options: Omit<ToastOptions, 'variant'> | string) => {
    const opt = typeof options === 'string' ? { description: options } : options;
    return toast({ ...opt, variant: 'warning' });
};

toast.info = (options: Omit<ToastOptions, 'variant'> | string) => {
    const opt = typeof options === 'string' ? { description: options } : options;
    return toast({ ...opt, variant: 'info' });
};

toast.dismiss = (id: string) => {
    toasts = toasts.map((t) => (t.id === id ? { ...t, visible: false } : t));
    notify();

    setTimeout(() => {
        toasts = toasts.filter((t) => t.id !== id);
        notify();
    }, 400); // Wait for exit animation
};

export const useToast = () => {
    const [state, setState] = useState<ToastState[]>(toasts);

    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners = listeners.filter((l) => l !== setState);
        };
    }, []);

    return {
        toasts: state,
        toast,
        dismiss: toast.dismiss,
    };
};
