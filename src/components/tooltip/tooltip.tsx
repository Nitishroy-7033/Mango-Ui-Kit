import React, { useState, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import type { TooltipProps } from './tooltip.types';
import './tooltip.css';

export const Tooltip: React.FC<TooltipProps> = ({
    children,
    content,
    position = 'top',
    className = '',
    delay = 0,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const show = useCallback(() => {
        if (delay > 0) {
            timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
        } else {
            setIsVisible(true);
        }
    }, [delay]);

    const hide = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsVisible(false);
    }, []);

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
        >
            {children}
            <div
                className={cn(
                    'tooltip-bubble',
                    `tooltip-pos-${position}`,
                    isVisible && 'tooltip-visible',
                    className
                )}
                role="tooltip"
            >
                {content}
            </div>
        </div>
    );
};

Tooltip.displayName = 'Tooltip';
