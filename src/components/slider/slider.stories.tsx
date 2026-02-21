import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
    title: 'Components/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    args: {
        value: 50,
        style: { width: '400px' },
    },
};

export const Range = () => {
    const [range, setRange] = useState<[number, number]>([20, 80]);
    return (
        <div style={{ width: '400px' }}>
            <Slider
                rangeValue={range}
                onRangeChange={setRange}
                showMinMax
                formatValue={(v) => `$${v}`}
            />
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                Price Range: <strong>${range[0]} - ${range[1]}</strong>
            </div>
        </div>
    );
};

export const Variants = () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <Slider value={40} variant="default" showTooltip />
        <Slider value={60} variant="gradient" showTooltip />
        <Slider value={80} variant="neon" showTooltip />
        <Slider value={30} variant="glass" showTooltip />
    </div>
);

export const Sizes = () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Slider size="sm" value={30} />
        <Slider size="md" value={50} />
        <Slider size="lg" value={70} />
    </div>
);

export const WithMarks = () => (
    <div style={{ width: '400px' }}>
        <Slider
            defaultValue={50}
            step={10}
            marks={[
                { value: 0, label: '0%' },
                { value: 25, label: '25%' },
                { value: 50, label: '50%' },
                { value: 75, label: '75%' },
                { value: 100, label: '100%' },
            ]}
        />
    </div>
);

export const CustomColor = () => (
    <div style={{ width: '400px' }}>
        <Slider value={60} customColor="#9c27b0" />
    </div>
);

export const Disabled = () => (
    <div style={{ width: '400px' }}>
        <Slider value={50} disabled showMinMax />
    </div>
);
