import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import type { BottomNavigationBarProps, BottomNavItem } from './bottom-nav-bar.types';
import './bottom-nav-bar.css';

export const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
    items,
    value,
    defaultValue,
    onChange,
    variant = 'classic',
    position = 'bottom',
    showLabels = true,
    activeLabelOnly = false,
    color,
    size,
    shadow,
    radius,
    gap,
    bg,
    mainAxisAlignment,
    className,
    style,
    zIndex,
    blur = false,
}) => {
    const [activeId, setActiveId] = useState<string | number | undefined>(value ?? defaultValue ?? items[0]?.id);

    useEffect(() => {
        if (value !== undefined) {
            setActiveId(value);
        }
    }, [value]);

    const handleSelect = (item: BottomNavItem) => {
        if (value === undefined) {
            setActiveId(item.id);
        }
        onChange?.(item.id);
        item.onClick?.(item.id);
    };

    const getJustify = (align?: string) => {
        if (!align) {
            // Default to start for sidebars, center for horizontal bars
            return (position === 'left' || position === 'right') ? 'flex-start' : 'space-around';
        }
        switch (align) {
            case 'start': return 'flex-start';
            case 'end': return 'flex-end';
            case 'center': return 'center';
            case 'spaceBetween': return 'space-between';
            case 'around': return 'space-around';
            case 'evenly': return 'space-evenly';
            default: return align;
        }
    };

    const containerStyles = {
        '--primaryColor': color,
        '--navSize': typeof size === 'number' ? `${size}px` : size,
        '--navShadow': shadow,
        '--navRadius': typeof radius === 'number' ? `${radius}px` : radius,
        '--navGap': typeof gap === 'number' ? `${gap}px` : gap,
        '--navBg': bg,
        '--navJustify': getJustify(mainAxisAlignment),
        zIndex,
        ...style,
    } as React.CSSProperties;

    return (
        <div
            className={cn(
                'mango-bottom-nav-container',
                `pos-${position}`,
                `variant-${variant}`,
                blur && 'is-blur',
                className
            )}
            style={containerStyles}
        >
            <nav className="mango-bottom-nav-bar">
                {items.map((item) => {
                    const isActive = activeId === item.id;
                    const showLabel = showLabels && (!activeLabelOnly || isActive);

                    return (
                        <button
                            key={item.id}
                            className={cn(
                                'mango-bottom-nav-item',
                                isActive && 'is-active',
                                item.isCTA && 'is-cta'
                            )}
                            onClick={() => handleSelect(item)}
                            aria-selected={isActive}
                            title={item.label}
                        >
                            {item.isCTA ? (
                                <>
                                    <div className="mango-cta-button">
                                        {item.icon}
                                    </div>
                                    {showLabel && <span className="mango-nav-label">{item.label}</span>}
                                </>
                            ) : (
                                <>
                                    <div className="mango-nav-icon-wrapper">
                                        {item.icon}
                                    </div>
                                    {showLabel && <span className="mango-nav-label">{item.label}</span>}
                                </>
                            )}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

BottomNavigationBar.displayName = 'BottomNavigationBar';
