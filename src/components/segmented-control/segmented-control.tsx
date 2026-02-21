import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import type { SegmentedControlProps } from './segmented-control.types';
import './segmented-control.css';

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
    options,
    value,
    defaultValue,
    onChange,
    size = 'md',
    variant = 'rectangle',
    fullWidth = false,
    color,
    disabled = false,
    className = '',
    style,
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue || options[0]?.value);
    const containerRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    useEffect(() => {
        if (!containerRef.current) return;

        const activeItem = containerRef.current.querySelector('.is-active') as HTMLElement;
        if (activeItem) {
            setIndicatorStyle({
                width: `${activeItem.offsetWidth}px`,
                transform: `translateX(${activeItem.offsetLeft - 4}px)`, // -4 to account for padding
            });
        }
    }, [currentValue, size, fullWidth]);

    const handleSelect = (val: string, isOptionDisabled?: boolean) => {
        if (disabled || isOptionDisabled) return;

        if (!isControlled) {
            setInternalValue(val);
        }
        onChange?.(val);
    };

    const containerStyle = {
        ...style,
        ...(color ? { '--segment-active-text': color } : {}),
    } as React.CSSProperties;

    return (
        <div
            ref={containerRef}
            className={cn(
                'mango-segmented-control',
                `mango-segmented-size-${size}`,
                `variant-${variant}`,
                fullWidth && 'is-full-width',
                disabled && 'is-disabled',
                className
            )}
            style={containerStyle}
        >
            <div className="mango-segmented-indicator" style={indicatorStyle} />

            {options.map((option) => (
                <div
                    key={option.value}
                    className={cn(
                        'mango-segmented-item',
                        currentValue === option.value && 'is-active',
                        (disabled || option.disabled) && 'is-disabled'
                    )}
                    onClick={() => handleSelect(option.value, option.disabled)}
                >
                    {option.icon && <span className="mango-segmented-icon">{option.icon}</span>}
                    <span>{option.label}</span>
                </div>
            ))}
        </div>
    );
};

SegmentedControl.displayName = 'SegmentedControl';
