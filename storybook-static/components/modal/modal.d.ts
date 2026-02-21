import { default as React } from '../../../node_modules/react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
}
export declare const Modal: ({ isOpen, onClose, title, children, className }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
