import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { getShadow, getFlexAlign, getFlexJustify, spacingToStyle } from '../../utils/shadow';
import type { BoxProps } from './layout.types';
import './layout.css';

export const Box = forwardRef<HTMLElement, BoxProps>(
    (
        {
            as: Component = 'div',
            p, px, py, pt, pr, pb, pl,
            m, mx, my, mt, mr, mb, ml,
            width, height, bg, color, radius, border,
            shadow, display, position,
            blur, gradient, opacity, zIndex, overflow,
            pointerEvents, cursor, transition,
            justify, align, flexDirection, gap, flex,
            className, style, children,
            ...props
        },
        ref
    ) => {
        const boxStyle: React.CSSProperties = {
            ...spacingToStyle({ p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml }),
            width,
            height,
            backgroundColor: bg,
            backgroundImage: gradient,
            color,
            borderRadius: radius,
            border,
            display,
            position,
            opacity,
            zIndex,
            overflow,
            pointerEvents,
            cursor,
            transition,
            justifyContent: getFlexJustify(justify),
            alignItems: getFlexAlign(align),
            flexDirection,
            gap,
            flex,
            backdropFilter: blur ? `blur(${typeof blur === 'number' ? `${blur}px` : blur})` : undefined,
            boxShadow: getShadow(shadow),
            ...style,
        } as React.CSSProperties;

        return (
            <Component
                ref={ref}
                className={cn('mango-box', className)}
                style={boxStyle}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Box.displayName = 'Box';
