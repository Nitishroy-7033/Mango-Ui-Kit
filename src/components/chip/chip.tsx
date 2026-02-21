import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { ChipProps } from './chip.types';
import './chip.css';

export const Chip: React.FC<ChipProps> = ({
    children,
    variant = 'soft',
    color = 'primary',
    size = 'md',
    icon,
    removable = false,
    onRemove,
    onClick,
    selected = false,
    disabled = false,
    className = '',
}) => {
    const isClickable = !!onClick;

    return (
        <span
            className={cn(
                'mango-chip',
                `chip-${variant}`,
                `chip-color-${color}`,
                `chip-size-${size}`,
                isClickable && 'is-clickable',
                selected && 'is-selected',
                disabled && 'is-disabled',
                className
            )}
            onClick={!disabled && isClickable ? onClick : undefined}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable && !disabled ? 0 : undefined}
            onKeyDown={isClickable && !disabled ? (e) => e.key === 'Enter' && onClick?.() : undefined}
        >
            {icon && <span className="chip-icon">{icon}</span>}
            <span className="chip-label">{children}</span>
            {removable && (
                <button
                    className="chip-remove"
                    onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
                    disabled={disabled}
                    aria-label="Remove"
                >
                    <X size={12} />
                </button>
            )}
        </span>
    );
};

Chip.displayName = 'Chip';
