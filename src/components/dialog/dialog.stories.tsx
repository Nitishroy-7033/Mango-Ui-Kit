import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './dialog';
import { Button } from '../button';
import { Trash2, Lock, Database } from 'lucide-react';

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const DeleteExample: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button variant="danger" onClick={() => setIsOpen(true)}>Delete Template</Button>
                <Dialog
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant="danger"
                    icon={<Trash2 size={24} />}
                    title="Delete Template?"
                    description='Are you sure you want to delete "4 Sharing"? This action cannot be undone.'
                    primaryButton={{
                        label: 'Delete Template',
                        onClick: () => {
                            console.log('Deleted');
                            setIsOpen(false);
                        }
                    }}
                    secondaryButton={{
                        label: 'Cancel'
                    }}
                />
            </>
        );
    }
};

export const CustomColors: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Custom Dialog</Button>
                <Dialog
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    icon={<Lock size={24} />}
                    iconBgColor="#f5f3ff"
                    iconColor="#7c3aed"
                    title="Enable Security?"
                    description="Activating two-factor authentication will add an extra layer of security to your account."
                    borderRadius="16px"
                    primaryButton={{
                        label: 'Enable Now',
                        style: { background: '#7c3aed' },
                        onClick: () => setIsOpen(false)
                    }}
                    secondaryButton={{ label: 'Later' }}
                />
            </>
        );
    }
};

export const SuccessState: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Finalize Process</Button>
                <Dialog
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant="success"
                    title="Success!"
                    description="Your changes have been successfully saved to the cloud database."
                    primaryButton={{
                        label: 'Done',
                        onClick: () => setIsOpen(false)
                    }}
                />
            </>
        );
    }
};

export const LargeCustomContent: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button variant="outline" onClick={() => setIsOpen(true)}>Data Report</Button>
                <Dialog
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    width={600}
                    icon={<Database size={24} />}
                    title="Monthly Usage Report"
                >
                    <div style={{ marginTop: '20px', padding: '16px', borderRadius: '12px', background: 'var(--secondaryColor)' }}>
                        <p style={{ margin: 0, fontWeight: 600 }}>Summary</p>
                        <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', color: 'var(--labelColor)' }}>
                            <li>CPU Usage: 45%</li>
                            <li>Memory: 2.4 GB</li>
                            <li>Requests: 1.2M</li>
                        </ul>
                    </div>
                </Dialog>
            </>
        );
    }
};
