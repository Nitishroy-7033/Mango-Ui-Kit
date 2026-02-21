import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker } from './time-picker';
import { useState } from 'react';

const meta: Meta<typeof TimePicker> = {
    title: 'Components/TimePicker',
    component: TimePicker,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'filled', 'outline', 'ghost'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        disabled: { control: 'boolean' },
        use12Hours: { control: 'boolean' },
        showSeconds: { control: 'boolean' },
        minuteStep: { control: 'select', options: [1, 5, 10, 15, 30] },
        selectionMode: { control: 'select', options: ['digital', 'analog'] },
        showBorder: { control: 'boolean' },
        showFooter: { control: 'boolean' },
        cardBorderRadius: { control: 'text' },
        cardBorderColor: { control: 'color' },
        cardBorderWidth: { control: 'text' },
    },
};
export default meta;
type Story = StoryObj<typeof TimePicker>;

/* ... (Metadata and imports above) */

const Wrapper = (props: React.ComponentProps<typeof TimePicker>) => {
    const [value, setValue] = useState(props.value ?? '');
    return (
        <div style={{ width: '280px' }}>
            <TimePicker {...props} value={value} onChange={setValue} />
        </div>
    );
};

export const AnalogMode: Story = {
    render: () => {
        const [t, setT] = useState('09:30 AM');
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '320px' }}>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>Analog (12h)</p>
                    <TimePicker
                        selectionMode="analog"
                        use12Hours
                        value={t}
                        onChange={setT}
                        innerLabel="ANALOG CLOCK"
                    />
                </div>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>Analog (24h)</p>
                    <TimePicker
                        selectionMode="analog"
                        use12Hours={false}
                        value={t.split(' ')[0]}
                        onChange={setT}
                        innerLabel="24H CLOCK"
                    />
                </div>
            </div>
        );
    }
};

export const BorderAndFooterManagement: Story = {
    render: () => {
        const [t, setT] = useState('');
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>No Outer Border</p>
                    <TimePicker
                        showBorder={false}
                        value={t}
                        onChange={setT}
                        innerLabel="SHADOW ONLY"
                    />
                </div>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>No Footer</p>
                    <TimePicker
                        showFooter={false}
                        value={t}
                        onChange={setT}
                        innerLabel="HIDDEN FOOTER"
                    />
                </div>
                <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.5, marginBottom: '6px', textTransform: 'uppercase' }}>Custom Card Styles</p>
                    <TimePicker
                        cardBorderRadius="40px"
                        cardBorderColor="#2563eb"
                        cardBorderWidth="4px"
                        value={t}
                        onChange={setT}
                        innerLabel="PILL CARD"
                    />
                </div>
            </div>
        );
    },
};

export const Default: Story = {
    render: (args) => <Wrapper {...args} />,
    args: { placeholder: 'Select time' },
};
/* ... (remaining stories moved down) */

export const WithValue: Story = {
    render: (args) => <Wrapper {...args} />,
    args: { value: '09:30' },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
            {(['default', 'filled', 'outline', 'ghost'] as const).map(v => {
                const [t, setT] = useState('14:30');
                return (
                    <div key={v}>
                        <p style={{ fontSize: '0.75rem', marginBottom: '6px', fontWeight: 600, textTransform: 'capitalize', opacity: 0.6 }}>{v}</p>
                        <TimePicker variant={v} value={t} onChange={setT} />
                    </div>
                );
            })}
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
            {(['sm', 'md', 'lg'] as const).map(s => {
                const [t, setT] = useState('');
                return (
                    <div key={s}>
                        <p style={{ fontSize: '0.75rem', marginBottom: '6px', fontWeight: 600, textTransform: 'uppercase', opacity: 0.6 }}>{s}</p>
                        <TimePicker size={s} value={t} onChange={setT} placeholder={`Size ${s.toUpperCase()}`} />
                    </div>
                );
            })}
        </div>
    ),
};

export const TwelveHourFormat: Story = {
    render: () => {
        const [t, setT] = useState('14:30');
        return (
            <div style={{ width: '280px' }}>
                <TimePicker
                    label="Meeting Time"
                    helperText="12-hour format with AM/PM switcher"
                    value={t}
                    onChange={setT}
                    use12Hours
                />
            </div>
        );
    }
};

export const WithSeconds: Story = {
    render: () => {
        const [t, setT] = useState('09:00:00');
        return (
            <div style={{ width: '280px' }}>
                <TimePicker
                    label="Precise Time"
                    helperText="Hours, Minutes and Seconds"
                    value={t}
                    onChange={setT}
                    showSeconds
                />
            </div>
        );
    }
};

export const TwelveHourWithSeconds: Story = {
    render: () => {
        const [t, setT] = useState('14:05:30');
        return (
            <div style={{ width: '280px' }}>
                <TimePicker
                    label="Full Precision"
                    value={t}
                    onChange={setT}
                    use12Hours
                    showSeconds
                />
            </div>
        );
    }
};

export const MinuteSteps: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
            {[5, 15, 30].map(step => {
                const [t, setT] = useState('');
                return (
                    <div key={step}>
                        <p style={{ fontSize: '0.75rem', marginBottom: '6px', fontWeight: 600, opacity: 0.6 }}>
                            {step}-minute steps
                        </p>
                        <TimePicker
                            value={t}
                            onChange={setT}
                            minuteStep={step}
                            placeholder={`Every ${step} mins`}
                        />
                    </div>
                );
            })}
        </div>
    ),
};

export const WithLabelAndError: Story = {
    render: () => {
        const [t, setT] = useState('');
        return (
            <div style={{ width: '280px' }}>
                <TimePicker
                    label="Closing Time"
                    error="Time is required for this field"
                    value={t}
                    onChange={setT}
                />
            </div>
        );
    }
};

export const Disabled: Story = {
    render: () => (
        <div style={{ width: '280px' }}>
            <TimePicker label="Locked Time" value="10:30" onChange={() => { }} disabled />
        </div>
    ),
};

export const Playground: Story = {
    render: (args) => <Wrapper {...args} />,
    args: {
        label: 'Pick a Time',
        placeholder: 'Select time...',
        variant: 'default',
        size: 'md',
        use12Hours: false,
        showSeconds: false,
        minuteStep: 1,
        helperText: 'Fully interactive playground',
    },
};

export const InnerLabel: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '6px' }}>Label in Popup Only</p>
                {(() => {
                    const [t, setT] = useState(''); return (
                        <TimePicker innerLabel="Time Selector" value={t} onChange={setT} placeholder="Open to see inner label" />
                    );
                })()}
            </div>

            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '8px' }}>Sizes with innerLabel</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {(['sm', 'md', 'lg'] as const).map(s => {
                        const [t, setT] = useState('');
                        return <TimePicker key={s} size={s} innerLabel={`Label ${s.toUpperCase()}`} value={t} onChange={setT} placeholder={`Size ${s.toUpperCase()}`} />;
                    })}
                </div>
            </div>

            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '6px' }}>12-hour with innerLabel</p>
                {(() => {
                    const [t, setT] = useState('09:30 AM'); return (
                        <TimePicker innerLabel="Start Time" value={t} onChange={setT} use12Hours />
                    );
                })()}
            </div>
        </div>
    ),
};
