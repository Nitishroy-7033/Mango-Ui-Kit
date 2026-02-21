import React from 'react';
import { cn } from '../../utils/cn';
import type { ToggleProps } from './toggle.types';
import './toggle.css';

export const Toggle: React.FC<ToggleProps> = ({
    checked = false,
    onChange,
    disabled = false,
    label,
    size = 'md',
    className = '',
}) => {
    return (
        <div
            className={cn('toggle-container', `toggle-${size}`, className)}
            onClick={() => !disabled && onChange?.(!checked)}
        >
            <div className={cn('toggle-root', checked && 'checked', disabled && 'disabled')}>
                <div className="toggle-thumb" />
            </div>
            {label && <span className="toggle-label">{label}</span>}
        </div>
    );
};

Toggle.displayName = 'Toggle';
