import type React from 'react';

export type SpacingValue = number | string;

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Change the underlying element */
    as?: React.ElementType;
    /** Padding */
    p?: SpacingValue;
    px?: SpacingValue;
    py?: SpacingValue;
    pt?: SpacingValue;
    pr?: SpacingValue;
    pb?: SpacingValue;
    pl?: SpacingValue;
    /** Margin */
    m?: SpacingValue;
    mx?: SpacingValue;
    my?: SpacingValue;
    mt?: SpacingValue;
    mr?: SpacingValue;
    mb?: SpacingValue;
    ml?: SpacingValue;
    /** Width / Height */
    width?: string | number;
    height?: string | number;
    /** Background color */
    bg?: string;
    /** Text color */
    color?: string;
    /** Border radius */
    radius?: string | number;
    /** Border */
    border?: string;
    /** Shadow preset */
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | string;
    /** Display mode */
    display?: React.CSSProperties['display'];
    /** Position */
    position?: React.CSSProperties['position'];
    /** Blur effect */
    blur?: string | number;
    /** Background gradient */
    gradient?: string;
    /** Appearance */
    opacity?: number;
    zIndex?: number;
    overflow?: React.CSSProperties['overflow'];
    pointerEvents?: React.CSSProperties['pointerEvents'];
    cursor?: React.CSSProperties['cursor'];
    transition?: string;
    /** Flex alignment shorthand */
    justify?: JustifyContent;
    align?: AlignItems;
    flexDirection?: React.CSSProperties['flexDirection'];
    gap?: SpacingValue;
}

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export interface RowProps extends BoxProps {
    /** Flex justify-content */
    justify?: JustifyContent;
    /** Flex align-items */
    align?: AlignItems;
    /** Gap between elements */
    gap?: SpacingValue;
    /** Vertical gap */
    rowGap?: SpacingValue;
    /** Horizontal gap */
    columnGap?: SpacingValue;
    /** Flex wrap */
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    /** Whether to take full width */
    fullWidth?: boolean;
}

export interface ResponsiveSpan {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

export interface ColProps extends BoxProps {
    /** Span (out of 12 columns). Can be a number or an object for responsiveness. */
    span?: number | ResponsiveSpan;
    /** Custom flex property */
    flex?: string | number;
    /** Order */
    order?: number;
}
