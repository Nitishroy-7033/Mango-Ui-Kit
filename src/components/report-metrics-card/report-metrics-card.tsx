import React from 'react';
import { cn } from '../../utils/cn';
import { MoreVertical, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, BarChart, Bar } from 'recharts';
import type { ReportMetricsCardProps } from './report-metrics-card.types';
import './report-metrics-card.css';

/**
 * ReportMetricsCard component for displaying key performance indicators (KPIs) with trends and charts.
 */
export const ReportMetricsCard: React.FC<ReportMetricsCardProps> = ({
    title,
    value,
    trend,
    comparisonText,
    trendDirection = 'neutral',
    icon,
    chartData,
    color,
    chartColor,
    chartFill,
    chartVariant = 'area',
    chartCurve = 'monotone',
    header,
    centered = false,
    footerIcon,
    footerActionIcon,
    footerActionLabel,
    onFooterAction,
    onOptionsClick,
    show = {
        title: true,
        value: true,
        trend: true,
        comparison: true,
        chart: true,
        footer: true,
        options: true,
        icon: true,
    },
    className,
    style,
}) => {
    const isPositive = trendDirection === 'up' || (trend && trend > 0);
    const isNegative = trendDirection === 'down' || (trend && trend < 0);
    const baseColor = color || (isPositive ? '#16a34a' : isNegative ? '#dc2626' : '#6b7280');
    const activeChartColor = chartColor || baseColor;
    const activeChartFill = chartFill || activeChartColor;

    const renderChart = () => {
        if (!chartData || chartData.length < 2) return null;

        const data = chartData.map((val, i) => ({ value: val, index: i }));
        const gradientId = `colorValue-${title?.replace(/\s+/g, '-') || Math.random().toString(36).substr(2, 9)}`;

        if (chartVariant === 'bar') {
            return (
                <div className="mango-report-card-chart-wrapper">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <Bar
                                dataKey="value"
                                fill={activeChartColor}
                                radius={[4, 4, 0, 0]}
                                isAnimationActive={true}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            );
        }

        if (chartVariant === 'line') {
            return (
                <div className="mango-report-card-chart-wrapper">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <Line
                                type={chartCurve}
                                dataKey="value"
                                stroke={activeChartColor}
                                strokeWidth={2}
                                dot={false}
                                isAnimationActive={true}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            );
        }

        // Default: Area Chart
        return (
            <div className="mango-report-card-chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={activeChartFill} stopOpacity={0.2} />
                                <stop offset="95%" stopColor={activeChartFill} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Area
                            type={chartCurve}
                            dataKey="value"
                            stroke={activeChartColor}
                            strokeWidth={2}
                            fillOpacity={1}
                            fill={`url(#${gradientId})`}
                            isAnimationActive={true}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    };

    return (
        <div className={cn('mango-report-card', centered && 'is-centered', className)} style={style}>
            {header && <div className="mango-report-card-banner">{header}</div>}

            <div className="mango-report-card-header">
                <div>
                    {show.icon && icon && (
                        <div className={cn('mango-report-card-icon-wrapper', isNegative && 'trend-down')}>
                            {icon}
                        </div>
                    )}
                    {show.title && title && <h4 className="mango-report-card-title">{title}</h4>}
                </div>
                {show.options && (
                    <button className="mango-report-card-options" onClick={onOptionsClick}>
                        <MoreVertical size={18} />
                    </button>
                )}
            </div>

            <div className="mango-report-card-content">
                <div className="mango-report-card-value-row">
                    {show.value && value !== undefined && (
                        <p className="mango-report-card-value">{value}</p>
                    )}
                    {show.trend && trend !== undefined && (
                        <div className={cn(
                            'mango-report-card-trend-box',
                            isPositive ? 'trend-up' : isNegative ? 'trend-down' : ''
                        )}>
                            {isPositive ? <TrendingUp size={14} /> : isNegative ? <TrendingDown size={14} /> : <Minus size={14} />}
                            {Math.abs(trend)}%
                        </div>
                    )}
                </div>
                {show.comparison && comparisonText && (
                    <span className="mango-report-card-comparison">{comparisonText}</span>
                )}
            </div>

            {show.chart && renderChart()}

            {show.footer && (footerActionLabel || footerIcon) && (
                <div className="mango-report-card-footer">
                    {footerIcon && <div className="mango-report-card-footer-icon">{footerIcon}</div>}
                    {footerActionLabel && (
                        <button className="mango-report-card-footer-btn" onClick={onFooterAction}>
                            {footerActionIcon && <span className="btn-icon">{footerActionIcon}</span>}
                            {footerActionLabel}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};


ReportMetricsCard.displayName = 'ReportMetricsCard';
