import React from 'react';
import { cn } from '../../utils/cn';

export interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Toggle = ({ label, className, ...props }: ToggleProps) => {
    return (
        <label className={cn("flex items-center gap-3 cursor-pointer select-none", props.disabled && "opacity-50 cursor-not-allowed", className)}>
            {label && <span className="text-sm font-medium text-neutral-300">{label}</span>}
            <div className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mango-400 focus-visible:ring-offset-2 bg-neutral-700 peer-checked:bg-mango-400">
                <input
                    type="checkbox"
                    className="peer sr-only"
                    {...props}
                />
                <span 
                    className={cn(
                        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform translate-x-0.5 peer-checked:translate-x-5"
                    )} 
                />
            </div>
        </label>
    );
};

Toggle.displayName = 'Toggle';
