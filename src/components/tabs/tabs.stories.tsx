import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayoutDashboard, Users, Settings } from 'lucide-react';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const tabs = [
    {
        id: 'overview',
        label: 'Overview',
        icon: <LayoutDashboard size={16} />,
        content: (
            <div className="p-4 bg-[var(--primaryContainercolor)] rounded-xl border border-[var(--borderColor)]">
                <p className="text-[var(--textColor)] font-medium">Overview Content</p>
                <p className="text-sm text-[var(--labelColor)] mt-1">Summary of activity and metrics.</p>
            </div>
        ),
    },
    {
        id: 'users',
        label: 'Users',
        icon: <Users size={16} />,
        content: (
            <div className="p-4 bg-[var(--primaryContainercolor)] rounded-xl border border-[var(--borderColor)]">
                <p className="text-[var(--textColor)] font-medium">Users Content</p>
                <p className="text-sm text-[var(--labelColor)] mt-1">Manage your team members.</p>
            </div>
        ),
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: <Settings size={16} />,
        content: (
            <div className="p-4 bg-[var(--primaryContainercolor)] rounded-xl border border-[var(--borderColor)]">
                <p className="text-[var(--textColor)] font-medium">Settings Content</p>
                <p className="text-sm text-[var(--labelColor)] mt-1">Configure your workspace.</p>
            </div>
        ),
    },
];

export const Default: Story = {
    render: () => <Tabs tabs={tabs} defaultTab="overview" />,
};

export const NoIcons: Story = {
    render: () => (
        <Tabs
            tabs={tabs.map(({ icon: _icon, ...t }) => t)}
            defaultTab="users"
        />
    ),
};
