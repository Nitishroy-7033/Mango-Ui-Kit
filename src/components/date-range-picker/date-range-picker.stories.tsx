import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateRangePicker } from './date-range-picker';
import { useState } from 'react';
import type { DateRange } from './date-range-picker.types';

const meta: Meta<typeof DateRangePicker> = {
    title: 'Components/DateRangePicker',
    component: DateRangePicker,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'filled', 'outline', 'ghost'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        disabled: { control: 'boolean' },
        clearable: { control: 'boolean' },
        showBorder: { control: 'boolean' },
        showFooter: { control: 'boolean' },
        cardBorderRadius: { control: 'text' },
        cardBorderColor: { control: 'color' },
        cardBorderWidth: { control: 'text' },
    },
};
export default meta;
type Story = StoryObj<typeof DateRangePicker>;

const emptyRange: DateRange = { startDate: null, endDate: null };

const today = new Date();
const fmt = (d: Date) => d.toISOString().split('T')[0];
const addDays = (d: Date, n: number) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };

const PRESETS = [
    { label: 'Today', range: { startDate: fmt(today), endDate: fmt(today) } },
    { label: 'Last 7 days', range: { startDate: fmt(addDays(today, -6)), endDate: fmt(today) } },
    { label: 'Last 30 days', range: { startDate: fmt(addDays(today, -29)), endDate: fmt(today) } },
    { label: 'This month', range: { startDate: fmt(new Date(today.getFullYear(), today.getMonth(), 1)), endDate: fmt(new Date(today.getFullYear(), today.getMonth() + 1, 0)) } },
];

const Wrapper = (props: React.ComponentProps<typeof DateRangePicker>) => {
    const [range, setRange] = useState<DateRange>(props.value ?? emptyRange);
    return (
        <div style={{ width: '380px' }}>
            <DateRangePicker {...props} value={range} onChange={setRange} />
        </div>
    );
};

export const Default: Story = {
    render: (args) => <Wrapper {...args} value={emptyRange} />,
};

export const Preselected: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange>({
            startDate: '2026-02-01',
            endDate: '2026-02-14',
        });
        return (
            <div style={{ width: '380px' }}>
                <DateRangePicker value={range} onChange={setRange} label="Event Window" clearable />
            </div>
        );
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '380px' }}>
            {(['default', 'filled', 'outline', 'ghost'] as const).map(v => {
                const [range, setRange] = useState<DateRange>(emptyRange);
                return (
                    <div key={v}>
                        <p style={{ fontSize: '0.75rem', marginBottom: '6px', fontWeight: 600, textTransform: 'capitalize', opacity: 0.6 }}>{v}</p>
                        <DateRangePicker variant={v} value={range} onChange={setRange} />
                    </div>
                );
            })}
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '380px' }}>
            {(['sm', 'md', 'lg'] as const).map(s => {
                const [range, setRange] = useState<DateRange>(emptyRange);
                return (
                    <div key={s}>
                        <p style={{ fontSize: '0.75rem', marginBottom: '6px', fontWeight: 600, textTransform: 'uppercase', opacity: 0.6 }}>{s}</p>
                        <DateRangePicker size={s} value={range} onChange={setRange} placeholder={`Size ${s.toUpperCase()} range`} />
                    </div>
                );
            })}
        </div>
    ),
};

export const WithPresets: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange>(emptyRange);
        return (
            <div style={{ width: '380px' }}>
                <DateRangePicker
                    label="Analytics Period"
                    helperText="Click a preset or pick dates manually"
                    value={range}
                    onChange={setRange}
                    presets={PRESETS}
                    clearable
                />
            </div>
        );
    },
};

export const WithMinMaxDates: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange>(emptyRange);
        return (
            <div style={{ width: '380px' }}>
                <DateRangePicker
                    label="Booking Window"
                    helperText="Only Feb 2026 is available"
                    value={range}
                    onChange={setRange}
                    minDate="2026-02-01"
                    maxDate="2026-02-28"
                    clearable
                />
            </div>
        );
    },
};

export const WithLabelAndError: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange>(emptyRange);
        return (
            <div style={{ width: '380px' }}>
                <DateRangePicker
                    label="Report Dates"
                    error="Please select a valid date range"
                    value={range}
                    onChange={setRange}
                />
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => (
        <div style={{ width: '380px' }}>
            <DateRangePicker
                label="Locked Period"
                value={{ startDate: '2026-01-01', endDate: '2026-01-31' }}
                onChange={() => { }}
                disabled
            />
        </div>
    ),
};

export const BorderAndFooterManagement: Story = {
    render: () => {
        const [r, setR] = useState<DateRange>(emptyRange);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '380px' }}>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>
                        No Outer Border (Shadow Only)
                    </p>
                    <DateRangePicker
                        showBorder={false}
                        value={r}
                        onChange={setR}
                        clearable
                    />
                </div>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>
                        No Footer
                    </p>
                    <DateRangePicker
                        showFooter={false}
                        value={r}
                        onChange={setR}
                        clearable
                    />
                </div>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>
                        Card Customization
                    </p>
                    <DateRangePicker
                        cardBorderRadius="40px"
                        cardBorderColor="#2563eb"
                        cardBorderWidth="3px"
                        value={r}
                        onChange={setR}
                        clearable
                    />
                </div>
            </div>
        );
    },
};

export const Playground: Story = {
    render: (args) => <Wrapper {...args} value={emptyRange} />,
    args: {
        label: 'Date Range',
        placeholder: 'Select a date range',
        variant: 'default',
        size: 'md',
        clearable: true,
        helperText: 'Click to start and select end date',
    },
};

export const InnerLabel: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '380px' }}>
            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '6px' }}>Label in Popup Only</p>
                {(() => {
                    const [r, setR] = useState<DateRange>(emptyRange); return (
                        <DateRangePicker innerLabel="Filter Range" value={r} onChange={setR} clearable placeholder="Open to see inner label" />
                    );
                })()}
            </div>

            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '8px' }}>Sizes with innerLabel</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {(['sm', 'md', 'lg'] as const).map(s => {
                        const [r, setR] = useState<DateRange>(emptyRange);
                        return <DateRangePicker key={s} size={s} innerLabel={`Range ${s.toUpperCase()}`} value={r} onChange={setR} placeholder={`Size ${s.toUpperCase()} range`} />;
                    })}
                </div>
            </div>

            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '6px' }}>With presets + innerLabel</p>
                {(() => {
                    const [r, setR] = useState<DateRange>(emptyRange); return (
                        <DateRangePicker
                            innerLabel="Analytics Period"
                            value={r}
                            onChange={setR}
                            clearable
                            presets={PRESETS}
                        />
                    );
                })()}
            </div>
        </div>
    ),
};
