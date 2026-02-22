import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { RowProps } from './layout.types';
import './layout.css';

/**
 * Row is a flexbox container for organizing elements in a horizontal line.
 */
export const Row = forwardRef<HTMLDivElement, RowProps>(
    (
        {
            justify = 'start',
            align = 'stretch',
            gap,
            rowGap,
            columnGap,
            wrap = 'nowrap',
            fullWidth = true,
            className,
            style,
            children,
            // Box props
            p, px, py, pt, pr, pb, pl,
            m, mx, my, mt, mr, mb, ml,
            width, height, bg, color, radius, border, shadow, display, position,
            ...props
        },
        ref
    ) => {
        const rowStyle: React.CSSProperties = {
            gap,
            rowGap,
            columnGap,
            flexWrap: wrap,
            padding: p,
            paddingLeft: pl || px,
            paddingRight: pr || px,
            paddingTop: pt || py,
            paddingBottom: pb || py,
            margin: m,
            marginLeft: ml || mx,
            marginRight: mr || mx,
            marginTop: mt || my,
            marginBottom: mb || my,
            width,
            height,
            backgroundColor: bg,
            color,
            borderRadius: radius,
            border,
            display: display || 'flex',
            position,
            boxShadow: shadow === 'sm' ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' :
                shadow === 'md' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' :
                    shadow === 'lg' ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' :
                        shadow === 'xl' ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' :
                            shadow,
            ...style,
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'mango-row',
                    `justify-${justify}`,
                    `align-${align}`,
                    fullWidth && 'is-full-width',
                    className
                )}
                style={rowStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Row.displayName = 'Row';
