import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { getShadow, spacingToStyle } from '../../utils/shadow';
import type { RowProps } from './layout.types';
import './layout.css';

export const Row = forwardRef<HTMLDivElement, RowProps>(
    (
        {
            mainAxisAlignment = 'start',
            crossAxisAlignment = 'center',
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

        const rowStyle: React.CSSProperties = {
            gap,
            rowGap,
            columnGap,
            flexWrap: wrap,
            ...spacingToStyle({ p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml }),
            width,
            height,
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
                    'mango-row',
                    `justify-${finalMainAxis}`,
                    `align-${finalCrossAxis}`,
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
