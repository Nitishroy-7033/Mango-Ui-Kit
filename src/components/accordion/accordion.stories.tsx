import type { Meta, StoryObj } from '@storybook/react-vite';
import { Settings, Bell, User } from 'lucide-react';
import { Accordion } from './accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    {
        title: 'Account Settings',
        icon: Settings,
        content: 'Manage your account preferences, security settings, and personal information.',
    },
    {
        title: 'Notifications',
        icon: Bell,
        content: 'Configure how and when you receive notifications from the platform.',
    },
    {
        title: 'Profile',
        icon: User,
        content: 'Update your public profile, avatar, and bio visible to other users.',
    },
];

export const Default: Story = {
    args: { items, defaultOpen: [0] },
};

export const AllowMultiple: Story = {
    args: { items, allowMultiple: true, defaultOpen: [0, 1] },
};

export const AllClosed: Story = {
    args: { items, defaultOpen: [] },
};
