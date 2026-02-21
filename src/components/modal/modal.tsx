import React from 'react';
import { cn } from '../../utils/cn';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Modal = ({ isOpen, onClose, title, children, className }: ModalProps) => {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
                className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
                onClick={onClose} 
            />
            <div className={cn(
                "relative w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl animate-in fade-in zoom-in duration-200",
                className
            )}>
                <div className="mb-6 flex items-center justify-between">
                    {title && <h2 className="text-xl font-bold text-white">{title}</h2>}
                    <button 
                        onClick={onClose} 
                        className="rounded-full p-1 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="text-neutral-300">
                    {children}
                </div>
            </div>
        </div>
    );
};
