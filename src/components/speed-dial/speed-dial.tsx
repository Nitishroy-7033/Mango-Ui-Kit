import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import type { SpeedDialProps } from './speed-dial.types';
import './speed-dial.css';

/**
 * SpeedDial component for floating action buttons with multiple secondary actions.
 */
export const SpeedDial: React.FC<SpeedDialProps> = ({
    icon,
    activeIcon,
    actions,
    direction = 'up',
    position = 'bottom-right',
    closeOnAction = true,
    showLabels = true,
    variant = 'primary',
    offset,
    className,
    style,
    onToggle,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleDial = (state?: boolean) => {
        const nextState = state !== undefined ? state : !isOpen;
        setIsOpen(nextState);
        onToggle?.(nextState);
    };

    const handleActionClick = (id: string, onClick?: (id: string) => void) => {
        onClick?.(id);
        if (closeOnAction) {
            toggleDial(false);
        }
    };

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                toggleDial(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            className={cn('mango-speed-dial-root', `position-${position}`, className)}
            style={{
                bottom: position === 'bottom-right' || position === 'bottom-left' ? offset : undefined,
                top: position === 'top-right' || position === 'top-left' ? offset : undefined,
                right: position === 'bottom-right' || position === 'top-right' ? offset : undefined,
                left: position === 'bottom-left' || position === 'top-left' ? offset : undefined,
                ...style
            }}
        >
            <div
                ref={containerRef}
                className={cn('mango-speed-dial-container', `direction-${direction}`, isOpen && 'is-open')}
            >
                <button
                    className={cn('mango-speed-dial-trigger', `mango-variant-${variant}`, isOpen && 'is-open')}
                    onClick={() => toggleDial()}
                    aria-expanded={isOpen}
                >
                    {isOpen && activeIcon ? activeIcon : icon}
                </button>

                <div className="mango-speed-dial-actions">
                    {actions.map((action) => (
                        <div
                            key={action.id}
                            className={cn('mango-speed-dial-action-wrapper', action.className)}
                        >
                            <button
                                className={cn(
                                    'mango-speed-dial-action-btn',
                                    `mango-variant-${action.variant || 'secondary'}`,
                                    variant === 'glass' && 'action-glass'
                                )}
                                onClick={() => handleActionClick(action.id, action.onClick)}
                                disabled={action.disabled}
                                title={action.label}
                            >
                                {action.icon}
                            </button>
                            {showLabels && action.label && (
                                <span className="mango-speed-dial-label">{action.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

SpeedDial.displayName = 'SpeedDial';
