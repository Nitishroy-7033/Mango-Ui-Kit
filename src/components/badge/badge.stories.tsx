import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'success', 'error', 'warning', 'info', 'neutral'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        pill: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        children: 'Badge',
        variant: 'primary',
    },
};

export const Success: Story = {
    args: {
        children: 'Success',
        variant: 'success',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Badge',
        size: 'lg',
        variant: 'info',
    },
};

export const Pill: Story = {
    args: {
        children: 'Pill Badge',
        pill: true,
        variant: 'warning',
    },
};
