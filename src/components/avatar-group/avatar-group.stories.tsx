import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarGroup } from './avatar-group';

const meta: Meta<typeof AvatarGroup> = {
    title: 'Components/AvatarGroup',
    component: AvatarGroup,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const users = [
    { name: 'Alice Doe', image: 'https://i.pravatar.cc/150?u=alice' },
    { name: 'Bob Smith', image: 'https://i.pravatar.cc/150?u=bob' },
    { name: 'Carol White', image: 'https://i.pravatar.cc/150?u=carol' },
    { name: 'Dan Brown', image: 'https://i.pravatar.cc/150?u=dan' },
    { name: 'Eve Black' },
];

export const Default: Story = {
    args: { users, max: 3, size: 36 },
};

export const ShowMore: Story = {
    args: { users, max: 2, size: 40 },
};

export const Initials: Story = {
    args: {
        users: [
            { name: 'Alice Doe' },
            { name: 'Bob Smith' },
            { name: 'Carol White' },
        ],
        size: 36,
    },
};
