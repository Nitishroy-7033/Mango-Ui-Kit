import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './tabs';
import { Home, Users, Settings, Bell, Star, Mail, Shield, Zap } from 'lucide-react';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['pills', 'underline', 'solid', 'hybrid', 'flat', 'bordered'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        color: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const panelStyle = {
    padding: '24px',
    background: 'var(--secondaryColor)',
    borderRadius: '16px',
    border: '1px solid var(--borderColor)',
    minHeight: '200px',
    fontWeight: 500,
};

const commonTabs = [
    { id: 'overview', label: 'Overview', icon: <Home size={18} />, content: <div style={panelStyle}>Overview Dashboard Content</div> },
    { id: 'residents', label: 'Residents', icon: <Users size={18} />, content: <div style={panelStyle}>Resident Management List</div> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} />, content: <div style={panelStyle}>Application Settings Panel</div> },
];

export const HybridRef: Story = {
    args: {
        variant: 'hybrid',
        tabs: [
            { id: 'overview', label: 'Overview', icon: <Home size={20} />, content: <div style={panelStyle}>Dashboard Overview</div> },
            { id: 'residents', label: 'Residents', icon: <Users size={20} />, content: <div style={panelStyle}>Manage Residents</div> },
            { id: 'billing', label: 'Billing', icon: <Mail size={20} />, content: <div style={panelStyle}>Invoices & Payments</div> },
        ],
        defaultTab: 'overview',
    },
    render: (args) => (
        <div style={{ maxWidth: '600px' }}>
            <h4 style={{ marginBottom: '16px', color: 'var(--labelSecondaryColor)' }}>Reference Style (from image)</h4>
            <Tabs {...args} />
        </div>
    )
};

export const Underline: Story = {
    args: {
        variant: 'underline',
        tabs: commonTabs,
    },
};

export const Pills: Story = {
    args: {
        variant: 'pills',
        tabs: [
            ...commonTabs,
            { id: 'notifications', label: 'Alerts', icon: <Bell size={18} />, badge: '12', content: <div style={panelStyle}>Notifications</div> }
        ],
    },
};

export const SolidAccent: Story = {
    args: {
        variant: 'solid',
        tabs: commonTabs,
        color: '#10b981', // Emerald green
    },
};

export const WithBadges: Story = {
    render: () => {
        return (
            <Tabs
                variant="underline"
                tabs={[
                    { id: 'all', label: 'All Projects', badge: '24', content: <div style={panelStyle}>Total projects active</div> },
                    { id: 'starred', label: 'Starred', icon: <Star size={16} />, badge: '5', content: <div style={panelStyle}>Your favorite picks</div> },
                    { id: 'archived', label: 'Archived', content: <div style={panelStyle}>Historical data</div> },
                ]}
            />
        )
    }
}

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div>
                <p style={{ fontSize: '12px', marginBottom: '8px' }}>Small (sm)</p>
                <Tabs size="sm" tabs={commonTabs} />
            </div>
            <div>
                <p style={{ fontSize: '12px', marginBottom: '8px' }}>Medium (md)</p>
                <Tabs size="md" tabs={commonTabs} />
            </div>
            <div>
                <p style={{ fontSize: '12px', marginBottom: '8px' }}>Large (lg)</p>
                <Tabs size="lg" tabs={commonTabs} />
            </div>
        </div>
    )
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        variant: 'pills',
        tabs: commonTabs,
    },
    render: (args) => (
        <div style={{ width: '800px', padding: '20px', border: '1px solid var(--borderColor)', borderRadius: '20px' }}>
            <Tabs {...args} />
        </div>
    )
};

export const Scrollable: Story = {
    render: () => (
        <div style={{ maxWidth: '400px', border: '1px dashed #ccc' }}>
            <Tabs
                variant="pills"
                tabs={[
                    { id: '1', label: 'Overview', icon: <Home size={16} /> },
                    { id: '2', label: 'Team', icon: <Users size={16} /> },
                    { id: '3', label: 'Security', icon: <Shield size={16} /> },
                    { id: '4', label: 'Performance', icon: <Zap size={16} /> },
                    { id: '5', label: 'Storage', icon: <Star size={16} /> },
                    { id: '6', label: 'Settings', icon: <Settings size={16} /> },
                ]}
            />
        </div>
    )
};
