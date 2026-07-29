import type React from 'react';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info' | 'message';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastOptions {
  title?: string;
  description: React.ReactNode;
  variant?: ToastVariant;
  duration?: number;
  icon?: React.ReactNode;
  closable?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
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
