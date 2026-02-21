import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateRangePicker } from './date-range-picker';
import { useState } from 'react';
import type { DateRange } from './date-range-picker.types';

const meta: Meta<typeof DateRangePicker> = {
    title: 'Components/DateRangePicker',
    component: DateRangePicker,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange>({ startDate: null, endDate: null });
        return (
            <div style={{ width: '400px' }}>
                <DateRangePicker value={range} onChange={setRange} />
            </div>
        );
    }
};

export const Preselected: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange>({
            startDate: '2023-12-01',
            endDate: '2023-12-10'
        });
        return (
            <div style={{ width: '400px' }}>
                <DateRangePicker value={range} onChange={setRange} />
            </div>
        );
    }
};
