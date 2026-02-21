import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker } from './time-picker';

const meta: Meta<typeof TimePicker> = {
    title: 'Components/TimePicker',
    component: TimePicker,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const TimePickerDemo = (args: React.ComponentProps<typeof TimePicker>) => {
    const [value, setValue] = useState(args.value ?? '');
    return <TimePicker {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
    render: (args) => <TimePickerDemo {...args} />,
    args: { placeholder: 'Select time' },
};

export const WithValue: Story = {
    render: (args) => <TimePickerDemo {...args} />,
    args: { value: '09:30' },
};
