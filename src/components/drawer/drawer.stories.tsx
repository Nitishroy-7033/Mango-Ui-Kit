import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './drawer';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const DrawerDemo = (args: React.ComponentProps<typeof Drawer>) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                className="px-4 py-2 bg-[var(--primaryColor)] text-white rounded-xl font-medium"
                onClick={() => setOpen(true)}
            >
                Open Drawer
            </button>
            <Drawer {...args} isOpen={open} onClose={() => setOpen(false)}>
                <p className="text-[var(--labelColor)] text-sm">Drawer content goes here.</p>
            </Drawer>
        </>
    );
};

export const Default: Story = {
    render: (args) => <DrawerDemo {...args} />,
    args: { title: 'Settings', subtitle: 'Manage your preferences' },
};

export const WithFooter: Story = {
    render: (args) => <DrawerDemo {...args} />,
    args: {
        title: 'Edit Profile',
        subtitle: 'Update your information',
        footer: (
            <div className="flex gap-3 justify-end">
                <button className="px-4 py-2 rounded-xl border border-[var(--borderColor)] text-sm text-[var(--labelColor)]">Cancel</button>
                <button className="px-4 py-2 rounded-xl bg-[var(--primaryColor)] text-white text-sm font-medium">Save</button>
            </div>
        ),
    },
};
