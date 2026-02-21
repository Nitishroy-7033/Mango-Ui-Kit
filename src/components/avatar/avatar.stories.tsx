import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';
import { AvatarGroup } from '../avatar-group';
import { User, Shield, Zap, Bell } from 'lucide-react';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        shape: {
            control: 'select',
            options: ['circle', 'square', 'rounded'],
        },
        status: {
            control: 'select',
            options: ['none', 'online', 'offline', 'away', 'busy'],
        },
        variant: {
            control: 'select',
            options: ['solid', 'bordered', 'ghost'],
        }
    }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Gallery: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Avatar {...args} size="xs" />
                <Avatar {...args} size="sm" />
                <Avatar {...args} size="md" />
                <Avatar {...args} size="lg" />
                <Avatar {...args} size="xl" />
                <Avatar {...args} size="2xl" />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <Avatar {...args} shape="circle" status="online" />
                <Avatar {...args} shape="rounded" status="away" />
                <Avatar {...args} shape="square" status="busy" />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <Avatar {...args} variant="bordered" />
                <Avatar {...args} variant="ghost" fallback={<User size={20} />} />
                <Avatar {...args} showRing ringColor="#f97316" />
            </div>
        </div>
    ),
    args: {
        src: 'https://i.pravatar.cc/150?u=1',
        alt: 'User',
    }
};

export const CustomColors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Avatar fallback="A" bgColor="#f97316" textColor="white" />
            <Avatar fallback="B" bgColor="#3b82f6" textColor="white" />
            <Avatar fallback="C" bgColor="#10b981" textColor="white" />
            <Avatar fallback="D" bgColor="#8b5cf6" textColor="white" />
        </div>
    )
};

export const Icons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Avatar fallback={<Shield size={20} />} bgColor="#1e293b" />
            <Avatar fallback={<Zap size={20} />} bgColor="#fef08a" textColor="#854d0e" />
            <Avatar fallback={<Bell size={20} />} variant="ghost" />
        </div>
    )
};

export const StatusPositions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Avatar status="online" statusPosition="top-right" />
            <Avatar status="online" statusPosition="bottom-right" />
            <Avatar status="online" statusPosition="top-left" />
            <Avatar status="online" statusPosition="bottom-left" />
        </div>
    ),
};

export const Groups: StoryObj<typeof AvatarGroup> = {
    render: (args: any) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <AvatarGroup {...args}>
                <Avatar src="https://i.pravatar.cc/150?u=1" />
                <Avatar src="https://i.pravatar.cc/150?u=2" />
                <Avatar src="https://i.pravatar.cc/150?u=3" />
                <Avatar src="https://i.pravatar.cc/150?u=4" />
            </AvatarGroup>

            <AvatarGroup {...args} max={3} size="sm">
                <Avatar src="https://i.pravatar.cc/150?u=5" />
                <Avatar src="https://i.pravatar.cc/150?u=6" />
                <Avatar src="https://i.pravatar.cc/150?u=7" />
                <Avatar src="https://i.pravatar.cc/150?u=8" />
                <Avatar src="https://i.pravatar.cc/150?u=9" />
            </AvatarGroup>

            <AvatarGroup {...args} spacing="relaxed">
                <Avatar fallback="A" bgColor="#f97316" />
                <Avatar fallback="B" bgColor="#3b82f6" />
                <Avatar fallback="C" bgColor="#10b981" />
            </AvatarGroup>
        </div>
    ),
    args: {
        size: 'md',
        spacing: 'tight',
    }
};
