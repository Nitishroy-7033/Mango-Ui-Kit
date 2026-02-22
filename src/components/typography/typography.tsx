import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TypographyProps } from './typography.types';
import './typography.css';

/**
 * Typography is a versatile component for all text elements, 
 * ensuring consistent font sizes, weights, and alignment.
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
    (
        {
            children,
            variant = 'body-md',
            as,
            weight,
            color,
            align,
            truncate,
            lineClamp,
            className,
            style,
            ...props
        },
        ref
    ) => {
        // Map variants to default HTML elements if 'as' is not provided
        const getDefaultElement = (v: string): React.ElementType => {
            if (v.startsWith('h')) return v as React.ElementType;
            if (v === 'label') return 'label';
            return 'p';
        };

        const Component = as || getDefaultElement(variant);

        const typographyStyle: React.CSSProperties = {
            color,
            textAlign: align,
            WebkitLineClamp: lineClamp,
            ...style,
        };

        return (
            <Component
                ref={ref as any}
                className={cn(
                    'mango-typography',
                    `mango-variant-${variant}`,
                    weight && `mango-weight-${weight}`,
                    truncate && 'mango-truncate',
                    lineClamp && 'mango-line-clamp',
                    className
                )}
                style={typographyStyle}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Typography.displayName = 'Typography';
