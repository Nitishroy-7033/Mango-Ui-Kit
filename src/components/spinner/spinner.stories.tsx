import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';
import { Ghost, Heart, Star, CloudRain, Zap } from 'lucide-react';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['circular', 'dots', 'pulse', 'bouncing', 'waves', 'ring', 'gear', 'icon-pulse', 'icon-spin', 'icon-bounce']
        },
        size: { control: { type: 'range', min: 10, max: 100, step: 2 } },
        color: { control: 'color' },
        speed: { control: { type: 'range', min: 0.1, max: 2, step: 0.1 } },
        thickness: { control: { type: 'range', min: 1, max: 10, step: 1 } }
    }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    args: {
        variant: 'circular',
        size: 40,
    },
};

export const IconAnimations: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', padding: '40px' }}>
            <div style={labelStyle}>
                <Spinner variant="icon-pulse" icon={<Heart fill="#ef4444" color="#ef4444" />} size={40} />
                <span>Icon Pulse (Heart)</span>
            </div>
            <div style={labelStyle}>
                <Spinner variant="icon-spin" icon={<Star color="#f59e0b" />} size={40} />
                <span>Icon Spin (Star)</span>
            </div>
            <div style={labelStyle}>
                <Spinner variant="icon-bounce" icon={<Ghost color="#64748b" />} size={40} />
                <span>Icon Bounce (Ghost)</span>
            </div>
            <div style={labelStyle}>
                <Spinner variant="icon-pulse" icon={<Zap color="#fa8029" />} size={40} speed={0.5} />
                <span>Fast Zap</span>
            </div>
            <div style={labelStyle}>
                <Spinner variant="icon-bounce" icon={<CloudRain color="#3b82f6" />} size={40} />
                <span>Rain Bounce</span>
            </div>
        </div>
    )
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', padding: '40px' }}>
            <div style={labelStyle}><Spinner variant="circular" size={40} /><span>Circular</span></div>
            <div style={labelStyle}><Spinner variant="ring" size={40} thickness={4} /><span>Ring</span></div>
            <div style={labelStyle}><Spinner variant="dots" size={40} /><span>Dots</span></div>
            <div style={labelStyle}><Spinner variant="pulse" size={40} /><span>Pulse</span></div>
            <div style={labelStyle}><Spinner variant="waves" size={40} /><span>Waves</span></div>
            <div style={labelStyle}><Spinner variant="bouncing" size={40} /><span>Bouncing</span></div>
            <div style={labelStyle}><Spinner variant="gear" size={40} /><span>Gear</span></div>
            <div style={labelStyle}><Spinner variant="icon-pulse" size={40} color="#10b981" /><span>Icon Default</span></div>
        </div>
    )
};

const labelStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '12px',
    fontSize: '12px',
    color: '#64748b'
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Spinner size={16} />
            <Spinner size={32} />
            <Spinner size={48} />
            <Spinner size={64} />
        </div>
    )
};
