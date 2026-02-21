import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: { variant: 'text', width: 300, height: 16 },
};

export const Circular: Story = {
    args: { variant: 'circular', width: 48, height: 48 },
};

export const Rectangular: Story = {
    args: { variant: 'rectangular', width: 300, height: 120 },
};

export const Rounded: Story = {
    args: { variant: 'rounded', width: 300, height: 80 },
};

export const Multiple: Story = {
    args: { variant: 'text', width: 280, count: 4 },
};

export const CardSkeleton: Story = {
    render: () => (
        <div className="flex flex-col gap-3 p-4 bg-[var(--primaryContainercolor)] border border-[var(--borderColor)] rounded-2xl" style={{ width: 300 }}>
            <div className="flex items-center gap-3">
                <Skeleton variant="circular" width={40} height={40} />
                <div className="flex flex-col gap-2 flex-1">
                    <Skeleton variant="text" height={14} />
                    <Skeleton variant="text" width="60%" height={12} />
                </div>
            </div>
            <Skeleton variant="rounded" height={120} />
            <Skeleton variant="text" count={3} height={12} />
        </div>
    ),
};
