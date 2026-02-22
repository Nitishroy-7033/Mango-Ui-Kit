import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper } from './stepper';

const meta: Meta<typeof Stepper> = {
    title: 'Components/Stepper',
    component: Stepper,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Stepper>;

const basicSteps = [
    { title: 'Account Info', description: 'Your name & email' },
    { title: 'Billing', description: 'Payment method' },
    { title: 'Review', description: 'Confirm your order' },
    { title: 'Done', description: 'Order placed!' },
];

export const Numbered: Story = {
    args: {
        steps: basicSteps,
        activeStep: 1,
        variant: 'numbered',
    },
};

export const WithError: Story = {
    args: {
        steps: [
            { title: 'Account Info', description: 'Completed' },
            { title: 'Billing', description: 'Card declined', status: 'error' },
            { title: 'Review' },
            { title: 'Done' },
        ],
        activeStep: 1,
    },
};

export const DotVariant: Story = {
    args: {
        steps: basicSteps,
        activeStep: 2,
        variant: 'dot',
    },
};

export const PillVariant: Story = {
    args: {
        steps: basicSteps,
        activeStep: 1,
        variant: 'pill',
    },
};

export const Vertical: Story = {
    args: {
        steps: [
            { title: 'Shipping Address', description: 'Where to deliver your package' },
            { title: 'Payment Method', description: 'Choose how to pay', optional: true },
            { title: 'Order Review', description: 'Check everything before placing' },
            { title: 'Confirmation', description: 'Your order is on its way!' },
        ],
        activeStep: 1,
        orientation: 'vertical',
    },
};

export const Clickable: Story = {
    render: () => {
        const [step, setStep] = useState(0);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <Stepper steps={basicSteps} activeStep={step} onStepClick={setStep} />
                <div style={{ display: 'flex', gap: 8 }}>
                    <button
                        style={{ padding: '8px 16px', background: 'var(--primaryColor)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}
                        onClick={() => setStep(Math.max(0, step - 1))}
                        disabled={step === 0}
                    >
                        ← Back
                    </button>
                    <button
                        style={{ padding: '8px 16px', background: 'var(--primaryColor)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}
                        onClick={() => setStep(Math.min(basicSteps.length - 1, step + 1))}
                        disabled={step === basicSteps.length - 1}
                    >
                        Next →
                    </button>
                </div>
            </div>
        );
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {(['sm', 'md', 'lg'] as const).map((size) => (
                <div key={size}>
                    <p style={{ marginBottom: 12, fontWeight: 600, fontSize: 13, color: 'var(--labelColor)' }}>Size: {size}</p>
                    <Stepper steps={basicSteps} activeStep={1} size={size} />
                </div>
            ))}
        </div>
    ),
};
