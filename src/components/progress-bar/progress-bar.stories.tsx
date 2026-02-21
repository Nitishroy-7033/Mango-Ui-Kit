import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './progress-bar';

const meta: Meta<typeof ProgressBar> = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
        color: { control: 'color' },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { value: 65, label: 'Progress', showValue: true },
};

export const NoLabel: Story = {
    args: { value: 40, showValue: false },
};

export const CustomColor: Story = {
    args: { value: 80, label: 'Custom Color', color: '#8b5cf6' },
};

export const Multiple: Story = {
    render: () => (
        <div className="flex flex-col gap-4" style={{ width: 400 }}>
            <ProgressBar value={25} label="Storage" color="var(--primaryColor)" />
            <ProgressBar value={60} label="Memory" color="#8b5cf6" />
            <ProgressBar value={90} label="CPU" color="#ef4444" />
        </div>
    ),
};
