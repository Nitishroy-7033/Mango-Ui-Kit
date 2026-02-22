import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './index';

const meta: Meta<typeof NumberInput> = {
    title: 'Components/NumberInput',
    component: NumberInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Number Spinner',
        defaultValue: 13,
    },
};

export const Small: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Number Spinner (Small)',
        size: 'sm',
        defaultValue: 2,
    },
};

export const Large: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Number Spinner (Large)',
        size: 'lg',
        defaultValue: 100,
    },
};

export const WithError: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Spinner with Error',
        error: true,
        errorText: 'Value must be less than 50',
        defaultValue: 100,
    },
};

export const MinMax: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Quantity (1-10)',
        min: 1,
        max: 10,
        defaultValue: 5,
    },
};

export const CustomStep: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Price Step (0.5)',
        step: 0.5,
        defaultValue: 10.5,
    },
};

export const Disabled: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Disabled Input',
        disabled: true,
        defaultValue: 42,
    },
};

export const FullWidth: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Full Width Spinner',
        fullWidth: true,
        defaultValue: 0,
    },
    render: (args) => (
        <div style={{ width: '400px' }}>
            <NumberInput {...args} />
        </div>
    )
};
