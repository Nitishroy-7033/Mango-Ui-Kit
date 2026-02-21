import type { Meta, StoryObj } from '@storybook/react-vite';
import { Users, DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';
import { StatCard } from './stat-card';

const meta: Meta<typeof StatCard> = {
    title: 'Components/StatCard',
    component: StatCard,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Total Users',
        value: '12,430',
        icon: Users,
        trend: 12,
        trendLabel: 'from last month',
    },
};

export const Negative: Story = {
    args: {
        label: 'Revenue',
        value: '$48,295',
        icon: DollarSign,
        trend: -4,
        trendLabel: 'from last month',
        variant: 'error',
    },
};

export const WithDescription: Story = {
    args: {
        label: 'Monthly Sales',
        value: '3,821',
        icon: ShoppingCart,
        trend: 8,
        trendLabel: 'Compared to last month',
        variant: 'success',
    },
};

export const Grid: Story = {
    render: () => (
        <div className="grid grid-cols-2 gap-4" style={{ width: 600 }}>
            <StatCard label="Total Users" value="12,430" icon={Users} trend={12} variant="primary" />
            <StatCard label="Revenue" value="$48,295" icon={DollarSign} trend={8} variant="secondary" />
            <StatCard label="Growth" value="+24%" icon={TrendingUp} trend={3} variant="success" />
            <StatCard label="Orders" value="1,029" icon={ShoppingCart} trend={-2} variant="error" />
        </div>
    ),
};
