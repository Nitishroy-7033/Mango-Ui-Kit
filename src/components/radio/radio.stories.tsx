import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';
import { RadioGroup } from './radio-group';

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        label: 'Option selection',
    },
};

export const Variants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Radio variant="solid" label="Solid (Default)" defaultChecked />
        <Radio variant="outlined" label="Outlined" defaultChecked />
        <Radio variant="soft" label="Soft" defaultChecked />
    </div>
);

export const Sizes = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Radio size="sm" label="Small size" defaultChecked />
        <Radio size="md" label="Medium size" defaultChecked />
        <Radio size="lg" label="Large size" defaultChecked />
    </div>
);

export const States = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Radio label="Normal" />
        <Radio label="Disabled" disabled />
        <Radio label="Disabled Checked" disabled defaultChecked />
        <Radio label="Error State" error="Please select an option" />
    </div>
);

export const Group = () => {
    const [value, setValue] = useState('standard');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <RadioGroup
                label="Shipping Method"
                description="Choose how you want your mangoes delivered"
                value={value}
                onChange={setValue}
            >
                <Radio value="standard" label="Standard Delivery" description="3-5 business days" />
                <Radio value="express" label="Express Delivery" description="1-2 business days" />
                <Radio value="priority" label="Priority Shipping" description="Next day delivery" />
            </RadioGroup>

            <div style={{ fontSize: '0.9rem' }}>
                Selected: <strong>{value}</strong>
            </div>

            <RadioGroup
                label="Payment options"
                orientation="horizontal"
                gap="24px"
                variant="outlined"
            >
                <Radio value="card" label="Credit Card" />
                <Radio value="paypal" label="PayPal" />
                <Radio value="crypto" label="Crypto" />
            </RadioGroup>
        </div>
    );
};
