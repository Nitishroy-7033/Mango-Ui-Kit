import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mail, Plus, Trash2, Send, Download } from 'lucide-react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        rounded: {
            control: 'select',
            options: ['none', 'md', 'lg', 'full'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost Button',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Danger Button',
    },
};

export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Button leftIcon={<Plus size={18} />}>Add Project</Button>
            <Button variant="secondary" rightIcon={<Mail size={18} />}>Contact Us</Button>
            <Button variant="outline" leftIcon={<Download size={18} />}>Download</Button>
            <Button variant="danger" leftIcon={<Trash2 size={18} />}>Delete</Button>
        </div>
    ),
};

export const IconOnly: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Button iconOnly variant="primary" leftIcon={<Plus size={20} />} tooltip="Add new item" />
            <Button iconOnly variant="secondary" rounded="full" leftIcon={<Mail size={20} />} tooltip="Check messages" />
            <Button iconOnly variant="outline" leftIcon={<Send size={20} />} tooltip="Send message" />
            <Button iconOnly variant="danger" rounded="full" leftIcon={<Trash2 size={20} />} tooltip="Delete forever" />
        </div>
    ),
};

export const WithTooltip: Story = {
    args: {
        children: 'Hover for Tooltip',
        tooltip: 'This is a premium tooltip! ✨',
        tooltipPosition: "right",
        variant: 'primary',
    },
};

export const TooltipDirections: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', padding: 60 }}>
            <Button tooltip="I appear on top ⬆️" tooltipPosition="top" variant="outline">Top</Button>
            <Button tooltip="I appear on the right ➡️" tooltipPosition="right" variant="outline">Right</Button>
            <Button tooltip="I appear at the bottom ⬇️" tooltipPosition="bottom" variant="outline">Bottom</Button>
            <Button tooltip="I appear on the left ⬅️" tooltipPosition="left" variant="outline">Left</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

export const Rounded: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Button rounded="none">Sharp</Button>
            <Button rounded="md">Medium</Button>
            <Button rounded="lg">Large</Button>
            <Button rounded="full">Pill Shape</Button>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button fullWidth>Full Width Button</Button>
            <Button fullWidth variant="outline">Full Width Outline</Button>
        </div>
    ),
};

export const Loading: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Button isLoading>Loading...</Button>
            <Button variant="secondary" isLoading>Processing</Button>
            <Button iconOnly variant="outline" isLoading />
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button variant="primary" leftIcon={<Plus size={18} />}>With Icon</Button>
                <Button variant="outline" leftIcon={<Download size={16} />} size="sm">Small Icon</Button>
                <Button variant="danger" leftIcon={<Trash2 size={18} />} size="lg">Large Delete</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button iconOnly variant="primary" leftIcon={<Plus size={20} />} tooltip="Add" />
                <Button iconOnly variant="secondary" leftIcon={<Mail size={20} />} rounded="full" tooltip="Mail" />
                <Button iconOnly variant="outline" leftIcon={<Send size={20} />} tooltip="Send" />
                <Button iconOnly variant="ghost" leftIcon={<Download size={20} />} tooltip="Download" />
                <Button iconOnly variant="danger" leftIcon={<Trash2 size={20} />} rounded="full" tooltip="Delete" />
            </div>
        </div>
    ),
};
