import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { BoxProps } from './layout.types';
import './layout.css';

/**
 * Box is a generic container component with shorthand props for spacing, layout, and styling.
 */
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
        const getShadow = (s?: string) => {
            switch (s) {
                case 'xs': return '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                case 'sm': return '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)';
                case 'md': return '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
                case 'lg': return '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)';
                case 'xl': return '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)';
                case '2xl': return '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                case 'inner': return 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)';
                default: return s;
            }
        };

        const getFlexAlign = (a?: string) => {
            if (a === 'start' || a === 'end') return `flex-${a}`;
            return a;
        };

        const getFlexJustify = (j?: string) => {
            if (j === 'start' || j === 'end') return `flex-${j}`;
            if (j === 'between') return 'space-between';
            if (j === 'around') return 'space-around';
            if (j === 'evenly') return 'space-evenly';
            return j;
        };

        const boxStyle: React.CSSProperties = {
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
