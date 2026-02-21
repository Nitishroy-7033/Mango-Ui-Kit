import React from 'react';
import { cn } from '../../utils/cn';
import type { ToggleProps } from './toggle.types';
import './toggle.css';

export const Toggle: React.FC<ToggleProps> = ({
    checked = false,
    onChange,
    disabled = false,
    label,
    description,
    labelPosition = 'right',
    size = 'md',
    variant = 'solid',
    color,
    activeIcon,
    inactiveIcon,
    showLabels = false,
    className = '',
    style,
}) => {
    const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.stopPropagation();
        if (!disabled && onChange) {
            onChange(!checked);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleToggle(e);
        }
    };

    const containerStyle = {
        ...style,
        ...(color ? { '--toggle-color': color } : {}),
    } as React.CSSProperties;

    const labelBlock = (
        <div className="toggle-label-block">
            {label && <span className="mango-toggle-label">{label}</span>}
            {description && <span className="mango-toggle-description">{description}</span>}
        </div>
    );

    return (
        <div
            className={cn(
                'mango-toggle-container',
                `toggle-${size}`,
                checked && 'is-checked',
                disabled && 'is-disabled',
                className
            )}
            style={containerStyle}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            role="switch"
            aria-checked={checked}
            tabIndex={disabled ? -1 : 0}
        >
            {(label || description) && labelPosition === 'left' && labelBlock}

            <div className={cn('mango-toggle-root', `is-${variant}`, checked && 'is-checked')}>
                {/* ON/OFF track labels */}
                {showLabels && (
                    <>
                        <span className="toggle-track-on">ON</span>
                        <span className="toggle-track-off">OFF</span>
                    </>
                )}

                <div className={cn('mango-toggle-thumb', checked && 'is-checked')}>
                    {/* Active icon */}
                    {activeIcon && (
                        <span className={cn('mango-toggle-icon', checked && 'is-visible')}>
                            {activeIcon}
                        </span>
                    )}
                    {/* Inactive icon */}
                    {inactiveIcon && (
                        <span className={cn('mango-toggle-icon', !checked && 'is-visible')}>
                            {inactiveIcon}
                        </span>
                    )}
                </div>
            </div>

            {(label || description) && labelPosition === 'right' && labelBlock}
        </div>
    );
};

Toggle.displayName = 'Toggle';
