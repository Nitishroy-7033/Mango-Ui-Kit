import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import type { SliderMark, SliderProps } from './slider.types';
import './slider.css';

export const Slider: React.FC<SliderProps> = ({
    value,
    onChange,
    rangeValue,
    onRangeChange,
    min = 0,
    max = 100,
    defaultValue,
    step = 1,
    color: _color,
    customColor,
    variant = 'default',
    size = 'md',
    marks,
    showTooltip = true,
    formatValue,
    showMinMax = false,
    disabled = false,
    className = '',
    style,
}) => {
    const isRange = !!rangeValue;
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<'single' | 'min' | 'max' | null>(null);

    // Initial state setup
    const [internalValue, setInternalValue] = useState<number>(value ?? defaultValue ?? 0);
    const [internalRange, setInternalRange] = useState<[number, number]>(rangeValue ?? [0, 0]);

    const activeValue = value !== undefined ? value : internalValue;
    const activeRange = rangeValue !== undefined ? rangeValue : internalRange;

    const getPercentage = useCallback((val: number) => {
        return ((val - min) / (max - min)) * 100;
    }, [min, max]);

    const getValueFromPos = useCallback((posX: number) => {
        if (!containerRef.current) return 0;
        const rect = containerRef.current.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(1, (posX - rect.left) / rect.width));
        const rawValue = percentage * (max - min) + min;
        return Math.round(rawValue / step) * step;
    }, [min, max, step]);

    const handleMouseDown = (_e: React.MouseEvent, type: 'single' | 'min' | 'max') => {
        if (disabled) return;
        setIsDragging(type);
    };

    const handleMove = useCallback((clientX: number) => {
        if (!isDragging || disabled) return;

        const newValue = getValueFromPos(clientX);
        const clampedValue = Math.max(min, Math.min(max, newValue));

        if (isDragging === 'single') {
            if (value === undefined) setInternalValue(clampedValue);
            onChange?.(clampedValue);
        } else if (isDragging === 'min') {
            const nextRange: [number, number] = [clampedValue, activeRange[1]];
            if (nextRange[0] <= nextRange[1]) {
                if (rangeValue === undefined) setInternalRange(nextRange);
                onRangeChange?.(nextRange);
            }
        } else if (isDragging === 'max') {
            const nextRange: [number, number] = [activeRange[0], clampedValue];
            if (nextRange[1] >= nextRange[0]) {
                if (rangeValue === undefined) setInternalRange(nextRange);
                onRangeChange?.(nextRange);
            }
        }
    }, [isDragging, disabled, getValueFromPos, min, max, value, onChange, activeRange, rangeValue, onRangeChange]);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
        const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
        const onMouseUp = () => setIsDragging(null);

        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchmove', onTouchMove);
            window.addEventListener('touchend', onMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onMouseUp);
        };
    }, [isDragging, handleMove]);

    const renderThumb = (val: number, type: 'single' | 'min' | 'max') => {
        const percent = getPercentage(val);
        const displayValue = formatValue ? formatValue(val) : val.toString();

        return (
            <div
                className="mango-slider-thumb"
                style={{ left: `${percent}%` }}
                onMouseDown={(e) => handleMouseDown(e, type)}
                onTouchStart={(e) => handleMouseDown(e as any, type)}
            >
                {showTooltip && (
                    <div className="mango-slider-tooltip">
                        {displayValue}
                    </div>
                )}
            </div>
        );
    };

    const sliderStyle = {
        ...style,
        ...(customColor ? { '--slider-primary': customColor } : {}),
    } as React.CSSProperties;

    const fillStyle = isRange
        ? { left: `${getPercentage(activeRange[0])}%`, width: `${getPercentage(activeRange[1]) - getPercentage(activeRange[0])}%` }
        : { left: '0%', width: `${getPercentage(activeValue)}%` };

    return (
        <div className={cn(
            'mango-slider-root',
            `mango-slider-size-${size}`,
            `mango-slider-variant-${variant}`,
            disabled && 'is-disabled',
            className
        )} style={sliderStyle}>

            {showMinMax && (
                <div className="mango-slider-labels">
                    <span>{min}</span>
                    <span>{max}</span>
                </div>
            )}

            <div className="mango-slider-container" ref={containerRef}>
                <div className="mango-slider-track">
                    <div className="mango-slider-fill" style={fillStyle} />
                </div>

                {isRange ? (
                    <>
                        {renderThumb(activeRange[0], 'min')}
                        {renderThumb(activeRange[1], 'max')}
                    </>
                ) : (
                    renderThumb(activeValue, 'single')
                )}
            </div>

            {marks && (
                <div className="mango-slider-marks">
                    {(Array.isArray(marks) ? marks : []).map((mark: SliderMark) => {
                        const percent = getPercentage(mark.value);
                        const isActive = isRange
                            ? (mark.value >= activeRange[0] && mark.value <= activeRange[1])
                            : (mark.value <= activeValue);

                        return (
                            <div
                                key={mark.value}
                                className={cn('mango-slider-mark', isActive && 'is-active')}
                                style={{ left: `${percent}%` }}
                            >
                                <div className="mango-slider-mark-dot" />
                                {mark.label && <span className="mango-slider-mark-label">{mark.label}</span>}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

Slider.displayName = 'Slider';
