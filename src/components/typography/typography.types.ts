export type TypographyVariant =
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    | 'body-lg' | 'body-md' | 'body-sm'
    | 'label' | 'caption';

export type TypographyWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    /** The content to display */
    children: React.ReactNode;
    /** The visual style variant */
    variant?: TypographyVariant;
    /** Underlying HTML element (defaults based on variant) */
    as?: React.ElementType;
    /** Font weight */
    weight?: TypographyWeight;
    /** Text color (can be a hex or a theme variable like 'var(--primaryColor)') */
    color?: string;
    /** Text alignment */
    align?: 'left' | 'center' | 'right' | 'justify';
    /** Whether to truncate with ellipsis */
    truncate?: boolean;
    /** Number of lines before truncating */
    lineClamp?: number;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
