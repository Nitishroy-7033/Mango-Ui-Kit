import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarDatePicker } from './calendar-date-picker';
import { useState } from 'react';

const meta: Meta<typeof CalendarDatePicker> = {
    title: 'Components/CalendarDatePicker',
    component: CalendarDatePicker,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [date, setDate] = useState('');
        return (
            <div style={{ width: '300px' }}>
                <CalendarDatePicker value={date} onChange={setDate} />
            </div>
        );
    }
};

export const WithValue: Story = {
    render: () => {
        const [date, setDate] = useState('2023-12-25');
        return (
            <div style={{ width: '300px' }}>
                <CalendarDatePicker value={date} onChange={setDate} />
            </div>
        );
    }
};
