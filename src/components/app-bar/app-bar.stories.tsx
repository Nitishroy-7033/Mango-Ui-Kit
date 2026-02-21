import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppBar } from './app-bar';

const meta: Meta<typeof AppBar> = {
    title: 'Components/AppBar',
    component: AppBar,
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        theme: 'light',
        user: { fullName: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?u=john' },
        searchPlaceholder: 'Search tasks...',
        notificationCount: 3,
    },
};

export const WithSubscription: Story = {
    args: {
        theme: 'light',
        user: { fullName: 'Jane Smith' },
        subscriptionPlan: 'Pro',
        notificationCount: 1,
    },
};

export const FreeWithUpgrade: Story = {
    args: {
        theme: 'light',
        user: { fullName: 'Demo User' },
        subscriptionPlan: 'Free',
        onUpgrade: () => alert('Upgrade clicked'),
        onLogout: () => alert('Logged out'),
    },
};

export const DarkTheme: Story = {
    args: {
        theme: 'dark',
        user: { fullName: 'Dark User' },
        notificationCount: 5,
    },
};
