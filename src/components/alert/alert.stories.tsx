import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './alert';
import { useState } from 'react';
import { Rocket } from 'lucide-react';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        variant: 'info',
        alertStyle: 'soft',
        title: 'Heads up!',
        children: 'This is an informational message to keep you in the loop.',
        dismissible: true,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '600px' }}>
            <Alert variant="info" title="Info">Your changes have been synced.</Alert>
            <Alert variant="success" title="Success">Profile updated successfully!</Alert>
            <Alert variant="warning" title="Warning">Your subscription expires in 3 days.</Alert>
            <Alert variant="error" title="Error">Failed to connect to the server.</Alert>
            <Alert variant="neutral" title="Note">Some features may be unavailable at this time.</Alert>
        </div>
    )
};

export const AllStyles: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            {(['soft', 'filled', 'outline', 'glass'] as const).map(s => (
                <div key={s}>
                    <p style={{ fontWeight: 700, marginBottom: '8px', textTransform: 'capitalize' }}>{s}</p>
                    <Alert variant="success" alertStyle={s} title="Payment Received">
                        Your invoice #1024 has been paid.
                    </Alert>
                </div>
            ))}
        </div>
    )
};

export const Dismissible: Story = {
    render: () => {
        const [visible, setVisible] = useState(true);
        return visible ? (
            <Alert variant="warning" title="Storage Almost Full" dismissible onDismiss={() => setVisible(false)} style={{ maxWidth: '500px' }}>
                You are using 90% of your 5GB plan. Upgrade for more space.
            </Alert>
        ) : (
            <p style={{ color: 'var(--labelSecondaryColor)', fontSize: '14px' }}>Alert dismissed.</p>
        );
    }
};

export const WithAction: Story = {
    args: {
        variant: 'warning',
        title: 'Session Expiring',
        children: 'Your session will expire in 5 minutes.',
        actionLabel: 'Keep me logged in',
        onAction: () => alert('Session extended!'),
        dismissible: true,
    }
};

export const CustomIcon: Story = {
    args: {
        variant: 'info',
        icon: <Rocket size={20} />,
        title: 'New Feature Live!',
        children: 'Check out the new Dashboard Analytics. Available now for all users.',
        actionLabel: 'Explore →',
        onAction: () => { },
    }
};
