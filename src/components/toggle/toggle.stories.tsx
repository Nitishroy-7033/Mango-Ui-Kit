import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';
import type { ToggleProps } from './toggle.types';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const ToggleDemo = (props: ToggleProps) => {
    const [checked, setChecked] = useState(props.checked ?? false);
    return <Toggle {...props} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
    render: (args: ToggleProps) => <ToggleDemo {...args} />,
    args: { label: 'Enable notifications' },
};

export const Checked: Story = {
    render: (args: ToggleProps) => <ToggleDemo {...args} />,
    args: { label: 'Dark mode', checked: true },
};

export const Disabled: Story = {
    args: { label: 'Disabled toggle', checked: false, disabled: true },
};

export const LabelRight: Story = {
    render: (args: ToggleProps) => <ToggleDemo {...args} />,
    args: { label: 'Auto-save' },
};

export const NoLabel: Story = {
    render: (args: ToggleProps) => <ToggleDemo {...args} />,
    args: {},
};
