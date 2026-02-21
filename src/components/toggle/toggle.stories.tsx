import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';
import { Sun, Moon, Check, X } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'ios', 'modern', 'glass']
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        },
        color: { control: 'color' }
    }
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    args: {
        label: 'Enable notifications',
        checked: true,
    },
};

export const Variants: Story = {
    render: () => {
        const [states, setStates] = useState([true, true, true, true]);

        const handleChange = (index: number) => (checked: boolean) => {
            const newStates = [...states];
            newStates[index] = checked;
            setStates(newStates);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <Toggle checked={states[0]} onChange={handleChange(0)} variant="solid" label="Mango Solid" />
                <Toggle checked={states[1]} onChange={handleChange(1)} variant="ios" label="iOS Style" />
                <Toggle checked={states[2]} onChange={handleChange(2)} variant="modern" label="Modern Minimal" />
                <Toggle checked={states[3]} onChange={handleChange(3)} variant="glass" label="Glassmorphism" />
            </div>
        )
    }
};

export const ThemeToggle: Story = {
    render: () => {
        const [isDark, setIsDark] = useState(false);
        return (
            <Toggle
                checked={isDark}
                onChange={setIsDark}
                size="lg"
                color={isDark ? '#8b5cf6' : '#f59e0b'}
                inactiveIcon={<Sun size={14} color="#f59e0b" />}
                activeIcon={<Moon size={14} color="#8b5cf6" />}
                label={isDark ? 'Dark Mode' : 'Light Mode'}
            />
        )
    }
};

export const StatusToggle: Story = {
    render: () => {
        const [active, setActive] = useState(true);
        return (
            <Toggle
                checked={active}
                onChange={setActive}
                variant="modern"
                activeIcon={<Check size={12} color="white" />}
                inactiveIcon={<X size={12} color="#64748b" />}
                label={active ? 'Active' : 'Disabled'}
            />
        )
    }
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Toggle size="sm" label="Small" />
            <Toggle size="md" label="Medium" />
            <Toggle size="lg" label="Large" />
        </div>
    )
};

export const LabelPositions: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle label="Label on Right" labelPosition="right" />
            <Toggle label="Label on Left" labelPosition="left" checked />
        </div>
    )
};
