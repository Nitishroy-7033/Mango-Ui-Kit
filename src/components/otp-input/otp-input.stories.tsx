import type { Meta, StoryObj } from '@storybook/react-vite';
import { OTPInput } from './otp-input';
import { useState } from 'react';

const meta: Meta<typeof OTPInput> = {
    title: 'Components/OTP Input',
    component: OTPInput,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <OTPInput
                label="Enter Verification Code"
                value={value}
                onChange={setValue}
                helperText="We sent a 6-digit code to your email."
            />
        );
    }
};

export const Variants: Story = {
    render: () => {
        const [v1, setV1] = useState('');
        const [v2, setV2] = useState('');
        const [v3, setV3] = useState('');
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <OTPInput label="Outlined (Default)" variant="outlined" value={v1} onChange={setV1} />
                <OTPInput label="Filled" variant="filled" value={v2} onChange={setV2} />
                <OTPInput label="Underlined" variant="underlined" value={v3} onChange={setV3} />
            </div>
        );
    }
};

export const Sizes: Story = {
    render: () => {
        const [s1, setS1] = useState('');
        const [s2, setS2] = useState('');
        const [s3, setS3] = useState('');
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <OTPInput label="Small" size="sm" length={4} value={s1} onChange={setS1} />
                <OTPInput label="Medium" size="md" length={6} value={s2} onChange={setS2} />
                <OTPInput label="Large" size="lg" length={6} value={s3} onChange={setS3} />
            </div>
        );
    }
};

export const ErrorState: Story = {
    render: () => {
        const [value, setValue] = useState('123');
        return (
            <OTPInput
                label="Invalid Code"
                value={value}
                onChange={setValue}
                error="The code you entered is incorrect. Please try again."
            />
        );
    }
};
