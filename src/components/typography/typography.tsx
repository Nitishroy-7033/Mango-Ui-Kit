import React, { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';
import type { TypographyProps, TypographyAlign, ResponsiveValue } from './typography.types';
import './typography.css';

const variantElementMap: Record<string, React.ElementType> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
  'body-lg': 'p', 'body-md': 'p', 'body-sm': 'p',
  label: 'label', caption: 'span',
};

function isResponsiveAlign(val: unknown): val is ResponsiveValue<TypographyAlign> {
  return typeof val === 'object' && val !== null && 'base' in val;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({
    children,
    variant = 'body-md',
    as,
    weight,
    color,
    align,
    truncate,
    lineClamp,
    letterSpacing,
    textTransform,
    textDecoration,
    fontSize,
    lineHeight,
    fontFamily,
    gradient,
    opacity,
    sx,
    whiteSpace,
    wordBreak,
    writingMode,
    textOrientation,
    hoverColor,
    cursor,
    userSelect,
    className,
    style,
    ...props
  }, ref) => {
    const Component = as || variantElementMap[variant] || 'p';

    const typographyStyle: React.CSSProperties = useMemo(() => {
      const styles: React.CSSProperties = {
        color,
        textAlign: align && !isResponsiveAlign(align) ? align as TypographyAlign : undefined,
        letterSpacing,
        textTransform,
        textDecoration,
        fontSize,
        lineHeight,
        fontFamily: fontFamily ? `var(--font-${fontFamily}, ${fontFamily})` : undefined,
        opacity,
        whiteSpace,
        wordBreak,
        writingMode,
        textOrientation,
        cursor,
        userSelect,
        WebkitLineClamp: lineClamp,
        ...sx,
        ...style,
      };

      if (gradient) {
        styles.background = gradient;
        styles.WebkitBackgroundClip = 'text';
        styles.WebkitTextFillColor = 'transparent';
        styles.backgroundClip = 'text';
      }

      if (hoverColor) {
        (styles as Record<string, unknown>)['--hover-color'] = hoverColor;
      }

      if (isResponsiveAlign(align)) {
        const resp = align as ResponsiveValue<TypographyAlign>;
        if (resp.base) styles.textAlign = resp.base;
      }

      return styles;
    }, [color, align, letterSpacing, textTransform, textDecoration, fontSize, lineHeight, fontFamily, gradient, opacity, sx, whiteSpace, wordBreak, writingMode, textOrientation, cursor, userSelect, lineClamp, hoverColor, style]);

    const classes = cn(
      'mango-typography',
      `mango-variant-${variant}`,
      weight && (typeof weight === 'string' && ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'black'].includes(weight)
        ? `mango-weight-${weight}`
        : undefined),
      truncate && 'mango-truncate',
      lineClamp && 'mango-line-clamp',
      gradient && 'mango-gradient-text',
      isResponsiveAlign(align) && 'mango-responsive-align',
      hoverColor && 'mango-hover-color',
      className,
    );

    return (
      <Component
        ref={ref}
        className={classes}
        style={{
          ...typographyStyle,
          ...(weight && !['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'black'].includes(String(weight))
            ? { fontWeight: weight }
            : {}),
        }}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = 'Typography';
