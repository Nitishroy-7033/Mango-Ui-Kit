import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './progress-bar';

const meta: Meta<typeof ProgressBar> = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
        color: { control: 'color' },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { progress: 65, label: 'Progress', showPercentage: true },
};

export const NoLabel: Story = {
    args: { progress: 40, showPercentage: false },
};

export const CustomColor: Story = {
    args: { progress: 80, label: 'Custom Color', color: '#8b5cf6' },
};

export const Multiple: Story = {
    render: () => (
        <div className="flex flex-col gap-4" style={{ width: 400 }}>
            <ProgressBar progress={25} label="Storage" color="var(--primaryColor)" />
            <ProgressBar progress={60} label="Memory" color="#8b5cf6" />
            <ProgressBar progress={90} label="CPU" color="#ef4444" />
        </div>
    ),
};
