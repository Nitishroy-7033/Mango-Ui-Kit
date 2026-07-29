import type React from 'react';

export type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body-lg' | 'body-md' | 'body-sm'
  | 'label' | 'caption';

export type TypographyWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export type TypographyTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

export type TypographyDecoration = 'none' | 'underline' | 'line-through' | 'overline';

/** Responsive object: { base: value, sm: value, md: value, lg: value, xl: value } */
export interface ResponsiveValue<T> {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: TypographyVariant | string;
  as?: React.ElementType;
  weight?: TypographyWeight | string | number;
  color?: string;
  align?: TypographyAlign | ResponsiveValue<TypographyAlign>;
  truncate?: boolean;
  lineClamp?: number;
  /** Letter spacing. Can be a theme token key like 'wide' or a CSS value */
  letterSpacing?: string;
  /** Text transform */
  textTransform?: TypographyTransform;
  /** Text decoration */
  textDecoration?: TypographyDecoration;
  /** Font size override (any CSS font-size value) */
  fontSize?: string;
  /** Line height override */
  lineHeight?: string;
  /** Font family override */
  fontFamily?: string;
  /** Gradient text. E.g., "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" */
  gradient?: string;
  /** Opacity */
  opacity?: number;
  /** Custom CSS properties */
  sx?: React.CSSProperties;
  /** Whitespace behavior */
  whiteSpace?: React.CSSProperties['whiteSpace'];
  /** Word break */
  wordBreak?: React.CSSProperties['wordBreak'];
  /** Writing mode */
  writingMode?: React.CSSProperties['writingMode'];
  /** Text orientation */
  textOrientation?: React.CSSProperties['textOrientation'];
  /** Hover color */
  hoverColor?: string;
  /** Cursor style */
  cursor?: React.CSSProperties['cursor'];
  /** User select */
  userSelect?: React.CSSProperties['userSelect'];
}
