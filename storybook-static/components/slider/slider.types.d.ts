export type SliderColor = 'primary' | 'success' | 'warning' | 'error' | 'info';
export type SliderVariant = 'default' | 'gradient' | 'neon' | 'glass';
export type SliderSize = 'sm' | 'md' | 'lg';
export interface SliderMark {
    value: number;
    label?: string;
}
export interface SliderProps {
    /** Current value (single) */
    value?: number;
    /** Callback for single value change */
    onChange?: (value: number) => void;
    /** Default value */
    defaultValue?: number;
    /** Range mode — [min, max] */
    rangeValue?: [number, number];
    /** Callback for range change */
    onRangeChange?: (range: [number, number]) => void;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment */
    step?: number;
    /** Semantic color */
    color?: SliderColor;
    /** Custom hex color */
    customColor?: string;
    /** Visual variant */
    variant?: SliderVariant;
    /** Gradient [start, end] for gradient variant */
    gradient?: [string, string];
    /** Slider track thickness */
    size?: SliderSize;
    /** Snap points with optional labels */
    marks?: SliderMark[] | boolean;
    /** Show value tooltip above thumb */
    showTooltip?: boolean;
    /** Format the tooltip / label value */
    formatValue?: (value: number) => string;
    /** Show min/max labels */
    showMinMax?: boolean;
    /** Whether slider is disabled */
    disabled?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
