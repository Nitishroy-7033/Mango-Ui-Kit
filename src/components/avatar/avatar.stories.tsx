import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        alt: 'John Doe',
        fallback: 'JD',
    },
};

export const Image: Story = {
    args: {
        src: 'https://github.com/shadcn.png',
        alt: '@shadcn',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        src: 'https://github.com/shadcn.png',
        alt: '@shadcn',
    },
};
