import type { Meta, StoryObj } from '@storybook/react';
import { ReportMetricsCard } from './report-metrics-card';
import { Users, Eye, DollarSign, MousePointer2, Heart, Settings, LayoutGrid, BarChart3 } from 'lucide-react';

const meta: Meta<typeof ReportMetricsCard> = {
    title: 'Components/ReportMetricsCard',
    component: ReportMetricsCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

const mockChartData = [20, 45, 28, 60, 35, 80, 55, 90];

export const AllReports: StoryObj<typeof ReportMetricsCard> = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', padding: '40px', background: '#f8fafc', width: '1000px' }}>
            {/* 1. Page Views - Default Area */}
            <ReportMetricsCard
                title="Views 24 hours"
                value="2,000"
                trend={100}
                comparisonText="vs last month"
                chartData={mockChartData}
                icon={<Eye size={20} />}
            />

            {/* 2. Professional Dashboard Variant with Banner & Footer Icons */}
            <ReportMetricsCard
                header="ANALYTICS OVERVIEW"
                title="Views 24 hours"
                value="2,000"
                trend={100}
                comparisonText="vs last month"
                icon={<BarChart3 size={20} />}
                chartData={mockChartData}
                footerIcon={<Settings size={18} />}
                footerActionLabel="View report"
                footerActionIcon={<LayoutGrid size={16} />}
            />

            {/* 3. Centered Metric Only (No Graph) */}
            <ReportMetricsCard
                centered
                title="Customer Satisfaction"
                value="98.2%"
                trend={2.4}
                comparisonText="Top 1% in region"
                icon={<Heart size={20} />}
                color="#e1306c"
                show={{ chart: false, options: true, footer: true }}
                footerActionLabel="See feedback"
            />

            {/* 4. Revenue - Step Area with Custom Colors */}
            <ReportMetricsCard
                title="Total Revenue"
                value="$45,231"
                trend={12.5}
                comparisonText="vs last month"
                chartData={[10, 25, 15, 35, 25, 45, 40]}
                chartVariant="area"
                chartCurve="step"
                chartColor="#fa8029"
                chartFill="#ffd8bf"
                icon={<DollarSign size={20} />}
            />

            {/* 5. Bounce Rate - Bar Chart */}
            <ReportMetricsCard
                title="Bounce Rate"
                value="24.8%"
                trend={-4.2}
                trendDirection="down"
                comparisonText="vs yesterday"
                chartData={[40, 35, 45, 30, 35, 25, 28]}
                chartVariant="bar"
                icon={<MousePointer2 size={20} />}
            />

            {/* 6. Active Users - Line Chart */}
            <ReportMetricsCard
                title="Active Users"
                value="1,280"
                trend={8.4}
                chartData={[20, 22, 18, 25, 30, 28, 32]}
                chartVariant="line"
                chartCurve="monotone"
                icon={<Users size={20} />}
            />
        </div>
    )
};

export const Minimal: StoryObj<typeof ReportMetricsCard> = {
    args: {
        title: "Simplified View",
        value: "956",
        show: {
            title: true,
            value: true,
            trend: false,
            comparison: false,
            chart: false,
            footer: false,
            options: true
        }
    }
};
