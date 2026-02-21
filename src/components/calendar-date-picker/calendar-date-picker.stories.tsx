import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarDatePicker } from './calendar-date-picker';
import { Star, Zap, Clock, Bookmark } from 'lucide-react';
import { useState } from 'react';
import type { DatePickerFooterAction } from './calendar-date-picker.types';

const meta: Meta<typeof CalendarDatePicker> = {
    title: 'Components/CalendarDatePicker',
    component: CalendarDatePicker,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'filled', 'outline', 'ghost'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        displayFormat: { control: 'select', options: ['YYYY-MM-DD', 'DD/MM/YYYY', 'MMM DD, YYYY'] },
        disabled: { control: 'boolean' },
        clearable: { control: 'boolean' },
        dayBorderRadius: { control: 'text' },
        innerLabel: { control: 'text' },
        cardBorderRadius: { control: 'text' },
        cardBorderColor: { control: 'color' },
        cardBorderWidth: { control: 'text' },
        showBorder: { control: 'boolean' },
        showFooter: { control: 'boolean' },
    },
};
export default meta;
type Story = StoryObj<typeof CalendarDatePicker>;

const Wrapper = (props: React.ComponentProps<typeof CalendarDatePicker>) => {
    const [date, setDate] = useState(props.value ?? '');
    return (
        <div style={{ width: '320px' }}>
            <CalendarDatePicker {...props} value={date} onChange={setDate} />
        </div>
    );
};

/* ─────────────────── Basic ─────────────────────────────── */

export const Default: Story = {
    render: (args) => <Wrapper {...args} />,
};

export const WithHeaderLabel: Story = {
    render: () => {
        const [d, setD] = useState('');
        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    innerLabel="DATE-SELECTOR"
                    value={d}
                    onChange={setD}
                    clearable
                />
            </div>
        );
    },
};

export const NoHeader: Story = {
    render: () => {
        const [d, setD] = useState('');
        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    placeholder="No header — innerLabel omitted"
                    value={d}
                    onChange={setD}
                    clearable
                />
            </div>
        );
    },
};

export const CustomInnerLabel: Story = {
    render: () => {
        const [d, setD] = useState('');
        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    innerLabel="🗓 PICK APPOINTMENT"
                    value={d}
                    onChange={setD}
                    clearable
                />
            </div>
        );
    },
};

/* ─────────────────── Day Border Radius ─────────────────── */

export const DayBorderRadius: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
            {[
                { label: 'Rounded Square (default) — 8px', radius: '8px' },
                { label: 'Large Rounded — 14px', radius: '14px' },
                { label: 'Full Circle — 50%', radius: '50%' },
                { label: 'Sharp Square — 2px', radius: '2px' },
            ].map(({ label, radius }) => {
                const [d, setD] = useState('2026-02-12');
                return (
                    <div key={radius}>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            {label}
                        </p>
                        <CalendarDatePicker
                            innerLabel="DATE-SELECTOR"
                            dayBorderRadius={radius}
                            value={d}
                            onChange={setD}
                            clearable
                        />
                    </div>
                );
            })}
        </div>
    ),
};

/* ─────────────────── Footer Actions ────────────────────── */

export const DefaultFooterActions: Story = {
    render: () => {
        const [d, setD] = useState('');
        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    innerLabel="DATE-SELECTOR"
                    value={d}
                    onChange={setD}
                    clearable
                />
            </div>
        );
    },
};

export const CustomFooterActions: Story = {
    args: {
        innerLabel: "sdfdsfsdfsd"
    },

    render: () => {
        const [d, setD] = useState('');

        const toISO = (date: Date) =>
            `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

        const customActions: DatePickerFooterAction[] = [
            {
                label: 'Now',
                icon: <Clock size={13} />,
                onClick: (_v) => setD(toISO(new Date())),
            },
            {
                label: 'Fav',
                icon: <Star size={13} />,
                onClick: (_v) => setD('2026-12-25'),
            },
            {
                label: 'Sprint End',
                icon: <Zap size={13} />,
                onClick: (_v) => setD('2026-03-31'),
            },
            {
                label: 'Save',
                icon: <Bookmark size={13} />,
                onClick: (v) => alert(`Saved: ${v}`),
            },
        ];

        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    innerLabel="CUSTOM ACTIONS"
                    value={d}
                    onChange={setD}
                    footerActions={customActions}
                    clearable
                />
            </div>
        );
    }
};

export const FooterActionsNoIcons: Story = {
    args: {
        cardBorderColor: "#f34343"
    },

    render: () => {
        const [d, setD] = useState('');
        const toISO = (date: Date) =>
            `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

        const actions: DatePickerFooterAction[] = [
            { label: 'Today', onClick: (_v) => { const n = new Date(); setD(toISO(n)); } },
            { label: 'Next Week', onClick: (_v) => { const d = new Date(); d.setDate(d.getDate() + 7); setD(toISO(d)); } },
            { label: 'Next Month', onClick: (_v) => { const d = new Date(); d.setMonth(d.getMonth() + 1); setD(toISO(d)); } },
        ];
        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    innerLabel="SHORTCUTS"
                    value={d}
                    onChange={setD}
                    footerActions={actions}
                    clearable
                />
            </div>
        );
    }
};

/* ─────────────────── Variants ──────────────────────────── */

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            {(['default', 'filled', 'outline', 'ghost'] as const).map(v => {
                const [d, setD] = useState('2026-12-25');
                return (
                    <div key={v}>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'capitalize' }}>{v}</p>
                        <CalendarDatePicker variant={v} innerLabel="DATE-SELECTOR" value={d} onChange={setD} clearable />
                    </div>
                );
            })}
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            {(['sm', 'md', 'lg'] as const).map(s => {
                const [d, setD] = useState('');
                return (
                    <div key={s}>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>{s}</p>
                        <CalendarDatePicker size={s} innerLabel="DATE-SELECTOR" value={d} onChange={setD} placeholder={`Size ${s.toUpperCase()}`} />
                    </div>
                );
            })}
        </div>
    ),
};

/* ─────────────────── States ────────────────────────────── */

export const WithLabelAndHelper: Story = {
    render: () => {
        const [d, setD] = useState('');
        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    label="Date of Birth"
                    innerLabel="DATE-SELECTOR"
                    helperText="Select your birth date"
                    value={d}
                    onChange={setD}
                />
            </div>
        );
    },
};

export const ErrorState: Story = {
    render: () => {
        const [d, setD] = useState('');
        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    label="Appointment Date"
                    error="Please select a valid date"
                    innerLabel="DATE-SELECTOR"
                    value={d}
                    onChange={setD}
                />
            </div>
        );
    },
};

export const CardCustomization: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
            {[
                { label: 'Default Card', radius: '18px', color: undefined, width: '1.5px' },
                { label: 'Sharp Card + Thick Border', radius: '4px', color: '#000', width: '4px' },
                { label: 'Pill Card + Thin Border', radius: '40px', color: '#2563eb', width: '1px' },
                { label: 'No Border', radius: '12px', color: 'transparent', width: '0px' },
            ].map(({ label, radius, color, width }) => {
                const [d, setD] = useState('');
                return (
                    <div key={label}>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            {label}
                        </p>
                        <CalendarDatePicker
                            innerLabel="CUSTOM CARD"
                            cardBorderRadius={radius}
                            cardBorderColor={color}
                            cardBorderWidth={width}
                            value={d}
                            onChange={setD}
                            clearable
                        />
                    </div>
                );
            })}
        </div>
    ),
};

export const BorderAndFooterManagement: Story = {
    render: () => {
        const [d, setD] = useState('');
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>
                        No Outer Border (Shadow Only)
                    </p>
                    <CalendarDatePicker
                        innerLabel="BORDERLESS"
                        showBorder={false}
                        value={d}
                        onChange={setD}
                        clearable
                    />
                </div>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>
                        No Footer
                    </p>
                    <CalendarDatePicker
                        innerLabel="HIDDEN FOOTER"
                        showFooter={false}
                        value={d}
                        onChange={setD}
                        clearable
                    />
                </div>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>
                        No Border & No Footer
                    </p>
                    <CalendarDatePicker
                        innerLabel="MINIMALIST"
                        showBorder={false}
                        showFooter={false}
                        value={d}
                        onChange={setD}
                        clearable
                    />
                </div>
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => (
        <div style={{ width: '320px' }}>
            <CalendarDatePicker value="2026-06-15" onChange={() => { }} disabled label="Locked Date" innerLabel="DATE-SELECTOR" />
        </div>
    ),
};

export const MinMaxDates: Story = {
    render: () => {
        const [d, setD] = useState('');
        return (
            <div style={{ width: '320px' }}>
                <CalendarDatePicker
                    innerLabel="BOOKING WINDOW"
                    helperText="Only Feb 2026 is selectable"
                    value={d}
                    onChange={setD}
                    minDate="2026-02-01"
                    maxDate="2026-02-28"
                    clearable
                />
            </div>
        );
    },
};

export const DisplayFormats: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            {(['YYYY-MM-DD', 'DD/MM/YYYY', 'MMM DD, YYYY'] as const).map(fmt => {
                const [d, setD] = useState('2026-12-25');
                return (
                    <div key={fmt}>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px' }}>{fmt}</p>
                        <CalendarDatePicker value={d} onChange={setD} displayFormat={fmt} />
                    </div>
                );
            })}
        </div>
    ),
};

export const Playground: Story = {
    render: (args) => <Wrapper {...args} />,
    args: {
        label: 'Pick a Date',
        innerLabel: 'DATE-SELECTOR',
        placeholder: 'Select date...',
        variant: 'default',
        size: 'md',
        clearable: true,
        dayBorderRadius: '8px',
        displayFormat: 'MMM DD, YYYY',
        helperText: 'Fully interactive playground',
    },
};
