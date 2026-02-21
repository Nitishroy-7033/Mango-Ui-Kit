import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            { label: 'Dashboard', href: '#' },
            { label: 'Settings', href: '#' },
            { label: 'Profile' },
        ],
    },
};

export const TwoLevels: Story = {
    args: {
        items: [
            { label: 'Users', href: '#' },
            { label: 'John Doe' },
        ],
    },
};
