import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarGroup } from './avatar-group';
import { Avatar } from '../avatar/avatar';

const meta: Meta<typeof AvatarGroup> = {
    title: 'Components/AvatarGroup',
    component: AvatarGroup,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        spacing: {
            control: 'select',
            options: ['tight', 'relaxed'],
        }
    }
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
    render: (args) => (
        <AvatarGroup {...args}>
            <Avatar src="https://i.pravatar.cc/150?u=1" />
            <Avatar src="https://i.pravatar.cc/150?u=2" />
            <Avatar src="https://i.pravatar.cc/150?u=3" />
            <Avatar src="https://i.pravatar.cc/150?u=4" />
        </AvatarGroup>
    ),
    args: {
        max: 3,
        size: 'md',
    },
};

export const Relaxed: Story = {
    render: (args) => (
        <AvatarGroup {...args}>
            <Avatar fallback="A" bgColor="#f97316" />
            <Avatar fallback="B" bgColor="#3b82f6" />
            <Avatar fallback="C" bgColor="#10b981" />
        </AvatarGroup>
    ),
    args: {
        spacing: 'relaxed',
        size: 'lg',
    },
};
