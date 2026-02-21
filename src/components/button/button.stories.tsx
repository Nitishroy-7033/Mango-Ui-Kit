import type { Meta, StoryObj } from '@storybook/react-vite';
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
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Button',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
        children: 'Button',
    },
};
