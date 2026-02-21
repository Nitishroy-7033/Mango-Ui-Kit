import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './progress-bar';

const meta: Meta<typeof ProgressBar> = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
        size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        variant: { control: 'select', options: ['linear', 'striped', 'indeterminate'] },
        rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
        color: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
    args: {
        progress: 60,
        label: 'Downloading files...',
        showPercentage: true,
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <ProgressBar progress={45} label="Default Linear" showPercentage />
            <ProgressBar progress={75} variant="striped" label="Striped Bar" color="#3b82f6" />
            <ProgressBar variant="indeterminate" label="Indeterminate (Loading...)" color="#fa8029" />
            <ProgressBar progress={90} animated label="With Shimmer" color="#10b981" />
        </div>
    )
};

export const Gradients: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <ProgressBar progress={80} gradient={['#fa8029', '#f97316']} label="Mango Gradient" />
            <ProgressBar progress={60} gradient={['#3b82f6', '#2563eb']} label="Ocean Blue" />
            <ProgressBar progress={40} gradient={['#10b981', '#059669']} label="Forest Green" />
            <ProgressBar progress={100} gradient="linear-gradient(90deg, #8b5cf6 0%, #d946ef 100%)" label="Purple Rain" />
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <ProgressBar progress={50} size="xs" label="Extra Small (xs)" />
            <ProgressBar progress={50} size="sm" label="Small (sm)" />
            <ProgressBar progress={50} size="md" label="Medium (md)" />
            <ProgressBar progress={50} size="lg" label="Large (lg)" />
            <ProgressBar progress={50} size="xl" label="Extra Large (xl)" />
        </div>
    )
};

export const Roundedness: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <ProgressBar progress={70} rounded="none" label="Square (none)" />
            <ProgressBar progress={70} rounded="md" label="Medium (md)" />
            <ProgressBar progress={70} rounded="full" label="Full Round" />
        </div>
    )
};
