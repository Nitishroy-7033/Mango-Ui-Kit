import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const ToggleDemo = (args: React.ComponentProps<typeof Toggle>) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
    render: (args) => <ToggleDemo {...args} />,
    args: { label: 'Enable notifications' },
};

export const Checked: Story = {
    render: (args) => <ToggleDemo {...args} />,
    args: { label: 'Dark mode', checked: true },
};

export const Disabled: Story = {
    args: { label: 'Disabled toggle', checked: false, disabled: true },
};

export const LabelRight: Story = {
    render: (args) => <ToggleDemo {...args} />,
    args: { label: 'Auto-save' },
};

export const NoLabel: Story = {
    render: (args) => <ToggleDemo {...args} />,
    args: {},
};
