import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { getShadow, spacingToStyle } from '../../utils/shadow';
import type { ColumnProps } from './layout.types';
import './layout.css';

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
            p, px, py, pt, pr, pb, pl,
            m, mx, my, mt, mr, mb, ml,
            width, height, bg, color, radius, border, shadow, display, position,
            ...props
        },
        ref
    ) => {
        const finalMainAxis = justify || mainAxisAlignment;
        const finalCrossAxis = align || crossAxisAlignment;

        const columnStyle: React.CSSProperties = {
            gap,
            rowGap,
            columnGap,
            flexWrap: wrap,
            ...spacingToStyle({ p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml }),
            width,
            height: height || 'auto',
            backgroundColor: bg,
            color,
            borderRadius: radius,
            border,
            display: display || 'flex',
            position,
            boxShadow: getShadow(shadow),
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
