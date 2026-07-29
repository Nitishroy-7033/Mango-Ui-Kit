import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { getShadow, spacingToStyle } from '../../utils/shadow';
import type { ColProps } from './layout.types';
import './layout.css';

export const Col = forwardRef<HTMLDivElement, ColProps>(
    (
        {
            span,
            flex,
            order,
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
        const colStyle: React.CSSProperties = {
            flex,
            order,
            ...spacingToStyle({ p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml }),
            width,
            height,
            backgroundColor: bg,
            color,
            borderRadius: radius,
            border,
            display,
            position,
            boxShadow: getShadow(shadow),
            ...style,
        };

        const getSpanClasses = () => {
            if (!span) return '';
            if (typeof span === 'number') return `mango-col-${span}`;

            return Object.entries(span)
                .map(([breakpoint, value]) => {
                    const prefix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
                    return `mango-col${prefix}-${value}`;
                })
                .join(' ');
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'mango-col',
                    getSpanClasses(),
                    className
                )}
                style={colStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Col.displayName = 'Col';
