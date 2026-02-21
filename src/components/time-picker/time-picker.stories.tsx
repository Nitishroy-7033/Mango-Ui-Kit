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
        innerLabelPosition: { control: 'select', options: ['left', 'top'] },
    },
};
export default meta;
type Story = StoryObj<typeof TimePicker>;

const Wrapper = (props: React.ComponentProps<typeof TimePicker>) => {
    const [value, setValue] = useState(props.value ?? '');
    return (
        <div style={{ width: '280px' }}>
            <TimePicker {...props} value={value} onChange={setValue} />
        </div>
    );
};

export const Default: Story = {
    render: (args) => <Wrapper {...args} />,
    args: { placeholder: 'Select time' },
};

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
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '6px' }}>Left (default)</p>
                {(() => {
                    const [t, setT] = useState(''); return (
                        <TimePicker innerLabel="Time" value={t} onChange={setT} placeholder="Select time" />
                    );
                })()}
            </div>

            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '6px' }}>Left with value</p>
                {(() => {
                    const [t, setT] = useState('14:30'); return (
                        <TimePicker innerLabel="Meeting Time" innerLabelPosition="left" value={t} onChange={setT} />
                    );
                })()}
            </div>

            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '6px' }}>Top position</p>
                {(() => {
                    const [t, setT] = useState(''); return (
                        <TimePicker innerLabel="Closing Time" innerLabelPosition="top" value={t} onChange={setT} placeholder="Pick a time" />
                    );
                })()}
            </div>

            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '8px' }}>Sizes with innerLabel</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {(['sm', 'md', 'lg'] as const).map(s => {
                        const [t, setT] = useState('');
                        return <TimePicker key={s} size={s} innerLabel="Time" value={t} onChange={setT} placeholder={`Size ${s.toUpperCase()}`} />;
                    })}
                </div>
            </div>

            <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '6px' }}>12-hour with innerLabel</p>
                {(() => {
                    const [t, setT] = useState('09:30'); return (
                        <TimePicker innerLabel="Start Time" value={t} onChange={setT} use12Hours />
                    );
                })()}
            </div>
        </div>
    ),
};
