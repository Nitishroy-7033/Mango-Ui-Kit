import React from 'react';
import { cn } from '../../utils/cn';
import type { ToggleProps } from './toggle.types';
import './toggle.css';

export const Toggle: React.FC<ToggleProps> = ({
    checked = false,
    onChange,
    disabled = false,
    label,
    labelPosition = 'right',
    size = 'md',
    variant = 'solid',
    color,
    activeIcon,
    inactiveIcon,
    className = '',
    style,
}) => {
    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!disabled && onChange) {
            onChange(!checked);
        }
    };

    const containerStyle = {
        ...style,
        '--toggle-color': color,
    } as React.CSSProperties;

    return (
        <div
            className={cn(
                'mango-toggle-container',
                `toggle-${size}`,
                checked && 'checked',
                disabled && 'is-disabled',
                className
            )}
            onClick={handleToggle}
            style={containerStyle}
        >
            {label && labelPosition === 'left' && (
                <span className="mango-toggle-label">{label}</span>
            )}

            <div className={cn('mango-toggle-root', `is-${variant}`, checked && 'checked')}>
                <div className="mango-toggle-thumb">
                    {activeIcon && (
                        <span className={cn('mango-toggle-icon', checked && 'is-visible')}>
                            {activeIcon}
                        </span>
                    )}
                    {inactiveIcon && (
                        <span className={cn('mango-toggle-icon', !checked && 'is-visible')}>
                            {inactiveIcon}
                        </span>
                    )}
                </div>
            </div>

            {label && labelPosition === 'right' && (
                <span className="mango-toggle-label">{label}</span>
            )}
        </div>
    );
};

Toggle.displayName = 'Toggle';
