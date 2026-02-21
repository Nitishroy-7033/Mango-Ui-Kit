import { toast, ToastContainer } from './index';
import { Button } from '../button';
import type { Meta } from '@storybook/react';

const meta: Meta = {
    title: 'Components/Toast',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Demo = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ToastContainer position="top-right" />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <Button variant="outline" onClick={() => toast('This is a simple message')}>
                    Show Message
                </Button>
                <Button variant="primary" onClick={() => toast.success({
                    title: 'Success!',
                    description: 'Your changes have been saved successfully.',
                })}>
                    Show Success
                </Button>
                <Button style={{ backgroundColor: '#ef4444', color: 'white' }} onClick={() => toast.error({
                    title: 'Error Occurred',
                    description: 'Failed to upload files. Please try again.',
                })}>
                    Show Error
                </Button>
                <Button style={{ backgroundColor: '#f59e0b', color: 'white' }} onClick={() => toast.warning({
                    title: 'Warning',
                    description: 'Your subscription is about to expire.',
                })}>
                    Show Warning
                </Button>
                <Button variant="secondary" onClick={() => toast.info({
                    title: 'New Update',
                    description: 'A new version of the app is available.',
                    action: {
                        label: 'Update Now',
                        onClick: () => alert('Updating...'),
                    }
                })}>
                    Show Info with Action
                </Button>
                <Button variant="ghost" onClick={() => toast({
                    description: 'This toast will stay forever until you close it.',
                    duration: 0,
                })}>
                    Persistent Toast
                </Button>
            </div>
        </div>
    );
};
