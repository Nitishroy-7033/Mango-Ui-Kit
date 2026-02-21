import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConfirmationModal } from './confirmation-modal';
import { useState } from 'react';

const meta: Meta<typeof ConfirmationModal> = {
    title: 'Components/ConfirmationModal',
    component: ConfirmationModal,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Danger: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <button onClick={() => setIsOpen(true)}>Open Danger Modal</button>
                <ConfirmationModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    onConfirm={() => console.log('Confirmed')}
                    title="Delete Project"
                    message="Are you sure you want to delete this project? This action cannot be undone."
                    confirmLabel="Delete"
                    type="danger"
                />
            </>
        );
    }
};

export const Warning: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <button onClick={() => setIsOpen(true)}>Open Warning Modal</button>
                <ConfirmationModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    onConfirm={() => console.log('Confirmed')}
                    title="Archive Task"
                    message="Are you sure you want to archive this task? You can still find it in the archive later."
                    confirmLabel="Archive"
                    type="warning"
                />
            </>
        );
    }
};
