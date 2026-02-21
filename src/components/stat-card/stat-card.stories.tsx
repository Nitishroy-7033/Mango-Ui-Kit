import React from 'react';
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
        title: 'Total Users',
        value: '12,430',
        icon: Users,
        trend: 'up',
        trendValue: 12,
    },
};

export const Negative: Story = {
    args: {
        title: 'Revenue',
        value: '$48,295',
        icon: DollarSign,
        trend: 'down',
        trendValue: 4,
        color: '#ef4444',
    },
};

export const WithDescription: Story = {
    args: {
        title: 'Monthly Sales',
        value: '3,821',
        icon: ShoppingCart,
        trend: 'up',
        trendValue: 8,
        description: 'Compared to last month',
    },
};

export const Grid: Story = {
    render: () => (
        <div className="grid grid-cols-2 gap-4" style={{ width: 600 }}>
            <StatCard title="Total Users" value="12,430" icon={Users} trend="up" trendValue={12} />
            <StatCard title="Revenue" value="$48,295" icon={DollarSign} trend="up" trendValue={8} color="#8b5cf6" />
            <StatCard title="Growth" value="+24%" icon={TrendingUp} trend="up" trendValue={3} color="#10b981" />
            <StatCard title="Orders" value="1,029" icon={ShoppingCart} trend="down" trendValue={2} color="#ef4444" />
        </div>
    ),
};
