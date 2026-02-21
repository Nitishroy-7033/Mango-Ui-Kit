import { ToastOptions, ToastState } from '../components/toast/toast.types';
export declare const toast: {
    (options: ToastOptions | string): string;
    success(options: Omit<ToastOptions, "variant"> | string): string;
    error(options: Omit<ToastOptions, "variant"> | string): string;
    warning(options: Omit<ToastOptions, "variant"> | string): string;
    info(options: Omit<ToastOptions, "variant"> | string): string;
    dismiss(id: string): void;
};
export declare const useToast: () => {
    toasts: ToastState[];
    toast: {
        (options: ToastOptions | string): string;
        success(options: Omit<ToastOptions, "variant"> | string): string;
        error(options: Omit<ToastOptions, "variant"> | string): string;
        warning(options: Omit<ToastOptions, "variant"> | string): string;
        info(options: Omit<ToastOptions, "variant"> | string): string;
        dismiss(id: string): void;
    };
    dismiss: (id: string) => void;
};
