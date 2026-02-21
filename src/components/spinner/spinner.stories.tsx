import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: { type: 'range', min: 16, max: 80, step: 4 } },
        thickness: { control: { type: 'range', min: 1, max: 8, step: 1 } },
        color: { control: 'color' },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { size: 32, thickness: 3 },
};

export const Large: Story = {
    args: { size: 56, thickness: 4 },
};

export const CustomColor: Story = {
    args: { size: 32, color: '#8b5cf6', thickness: 3 },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-6">
            <Spinner size={20} />
            <Spinner size={32} />
            <Spinner size={48} />
            <Spinner size={64} />
        </div>
    ),
};

