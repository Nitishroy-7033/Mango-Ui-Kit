import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import type { ToastOptions, ToastState } from '../components/toast/toast.types';
import { generateId } from '../utils/generate-id';

interface ToastContextValue {
  toasts: ToastState[];
  toast: (options: ToastOptions | string) => string;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

let globalToastFn: ((options: ToastOptions | string) => string) & {
  success: (options: Omit<ToastOptions, 'variant'> | string) => string;
  error: (options: Omit<ToastOptions, 'variant'> | string) => string;
  warning: (options: Omit<ToastOptions, 'variant'> | string) => string;
  info: (options: Omit<ToastOptions, 'variant'> | string) => string;
  dismiss: (id: string) => void;
} | null = null;

function getGlobalToastFn() {
  if (!globalToastFn) throw new Error('ToastProvider not mounted');
  return globalToastFn;
}

export const toast = Object.assign(
  (options: ToastOptions | string): string => getGlobalToastFn()(options),
  {
    success: (options: Omit<ToastOptions, 'variant'> | string): string => getGlobalToastFn().success(options),
    error: (options: Omit<ToastOptions, 'variant'> | string): string => getGlobalToastFn().error(options),
    warning: (options: Omit<ToastOptions, 'variant'> | string): string => getGlobalToastFn().warning(options),
    info: (options: Omit<ToastOptions, 'variant'> | string): string => getGlobalToastFn().info(options),
    dismiss: (id: string): void => getGlobalToastFn().dismiss(id),
  },
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const toastsRef = useRef(toasts);
  toastsRef.current = toasts;

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.map(t => (t.id === id ? { ...t, visible: false } : t)));
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 400);
  }, []);

  const addToast = useCallback((options: ToastOptions | string) => {
    const id = generateId('toast');
    const toastOptions = typeof options === 'string' ? { description: options } : options;
    const newToast: ToastState = {
      id,
      visible: true,
      variant: 'message',
      duration: 5000,
      ...toastOptions,
    };
    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  const toastFn = useCallback(
    Object.assign(
      (options: ToastOptions | string) => addToast(options),
      {
        success: (options: Omit<ToastOptions, 'variant'> | string) => {
          const opt = typeof options === 'string' ? { description: options } : options;
          return addToast({ ...opt, variant: 'success' });
        },
        error: (options: Omit<ToastOptions, 'variant'> | string) => {
          const opt = typeof options === 'string' ? { description: options } : options;
          return addToast({ ...opt, variant: 'error' });
        },
        warning: (options: Omit<ToastOptions, 'variant'> | string) => {
          const opt = typeof options === 'string' ? { description: options } : options;
          return addToast({ ...opt, variant: 'warning' });
        },
        info: (options: Omit<ToastOptions, 'variant'> | string) => {
          const opt = typeof options === 'string' ? { description: options } : options;
          return addToast({ ...opt, variant: 'info' });
        },
        dismiss: (id: string) => dismiss(id),
      },
    ),
    [addToast, dismiss],
  );

  useEffect(() => {
    globalToastFn = toastFn as typeof globalToastFn;
    return () => { globalToastFn = null; };
  }, [toastFn]);

  return (
    <ToastContext.Provider value={{ toasts, toast: toastFn, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a <ToastProvider>');
  }
  return ctx;
}

export { ToastContext };
export type { ToastContextValue };
