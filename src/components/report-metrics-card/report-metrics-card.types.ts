import type React from 'react';

export interface ReportMetricsCardProps {
    /** Title of the metric */
    title?: string;
    /** The main value to display */
    value?: string | number;
    /** Percentage change (e.g., 10 or -5) */
    trend?: number;
    /** Comparison text (e.g., "vs last month") */
    comparisonText?: string;
    /** Whether the trend is positive or negative */
    trendDirection?: 'up' | 'down' | 'neutral';
    /** Optional icon at the top */
    icon?: React.ReactNode;
    /** Optional trend chart data (array of numbers for sparkline) */
    chartData?: number[];
    /** Color for the chart and trend (defaults based on trendDirection) */
    color?: string;
    /** Custom color for the chart line/bars specifically */
    chartColor?: string;
    /** Custom color for the chart fill (optional) */
    chartFill?: string;
    /** Style of the graph */
    chartVariant?: 'area' | 'line' | 'bar';
    /** Curve type for line/area charts */
    chartCurve?: 'monotone' | 'linear' | 'step' | 'stepAfter' | 'stepBefore';
    /** Custom header element (like a list heading) */
    header?: React.ReactNode;
    /** Whether to center the metric value and trend (ideal for graph-less cards) */
    centered?: boolean;
    /** Icon to show in the footer (e.g., a gear icon) */
    footerIcon?: React.ReactNode;
    /** Icon for the footer action button */
    footerActionIcon?: React.ReactNode;
    /** Label for the footer action button */
    footerActionLabel?: string;
    /** Callback for the footer action */
    onFooterAction?: () => void;
    /** Callback for the options menu click */
    onOptionsClick?: () => void;
    /** Whether to show/hide specific elements */
    show?: {
        title?: boolean;
        value?: boolean;
        trend?: boolean;
        comparison?: boolean;
        chart?: boolean;
        footer?: boolean;
        options?: boolean;
        icon?: boolean;
    };
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
