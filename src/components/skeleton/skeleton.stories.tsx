import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        width: 200,
        height: 20,
        variant: 'text',
    },
};

export const Composition: Story = {
    render: () => (
        <div style={{ width: '400px', display: 'flex', gap: '16px', alignItems: 'center', padding: '24px', background: 'var(--secondaryColor)', borderRadius: '24px' }}>
            <Skeleton variant="circular" width={60} height={60} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="90%" height={14} />
            </div>
        </div>
    )
};

export const MultipleLines: Story = {
    args: {
        count: 5,
        variant: 'text',
        width: 300,
    }
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>Text Line</p>
                <Skeleton variant="text" width={200} />
            </div>
            <div>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>Circular (Avatar)</p>
                <Skeleton variant="circular" width={48} height={48} />
            </div>
            <div>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>Rectangular (Block)</p>
                <Skeleton variant="rectangular" width={200} height={100} />
            </div>
            <div>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>Rounded (Card)</p>
                <Skeleton variant="rounded" width={300} height={150} />
            </div>
        </div>
    )
};

export const CustomRadius: Story = {
    args: {
        variant: 'rectangular',
        width: 200,
        height: 100,
        borderRadius: '30px',
    }
};
