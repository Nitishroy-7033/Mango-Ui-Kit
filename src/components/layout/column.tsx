import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ColumnProps } from './layout.types';
import './layout.css';

/**
 * Column is a flexbox container for organizing elements in a vertical line.
 * Inspired by Flutter's Column widget.
 */
export const Column = forwardRef<HTMLDivElement, ColumnProps>(
    (
        {
            mainAxisAlignment = 'start',
            crossAxisAlignment = 'stretch',
            justify,
            align,
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
        // Shorthand justify/align take precedence for backwards compatibility
        const finalMainAxis = justify || mainAxisAlignment;
        const finalCrossAxis = align || crossAxisAlignment;

        const columnStyle: React.CSSProperties = {
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
            height: height || 'auto',
            backgroundColor: bg,
            color,
            borderRadius: radius,
            border,
            display: display || 'flex',
            position,
            boxShadow: shadow === 'xs' ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' :
                shadow === 'sm' ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' :
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
                    'mango-column',
                    `justify-${finalMainAxis}`,
                    `align-${finalCrossAxis}`,
                    fullWidth && 'is-full-width',
                    className
                )}
                style={columnStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Column.displayName = 'Column';
