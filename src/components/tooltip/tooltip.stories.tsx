import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';
import { Button } from '../button/button';
import { Info, Settings, Trash2, Download } from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: 'Hello from Tooltip! 👋',
        position: 'top',
        children: <Button variant="primary">Hover me</Button>,
    },
};

export const Positions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', padding: 60 }}>
            <Tooltip content="I'm on top" position="top">
                <Button variant="outline">Top</Button>
            </Tooltip>
            <Tooltip content="I'm on the right" position="right">
                <Button variant="outline">Right</Button>
            </Tooltip>
            <Tooltip content="I'm at the bottom" position="bottom">
                <Button variant="outline">Bottom</Button>
            </Tooltip>
            <Tooltip content="I'm on the left" position="left">
                <Button variant="outline">Left</Button>
            </Tooltip>
        </div>
    ),
};

export const WithIconButtons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Tooltip content="Info">
                <Button iconOnly variant="secondary" leftIcon={<Info size={18} />} />
            </Tooltip>
            <Tooltip content="Settings">
                <Button iconOnly variant="secondary" leftIcon={<Settings size={18} />} />
            </Tooltip>
            <Tooltip content="Download" position="bottom">
                <Button iconOnly variant="primary" leftIcon={<Download size={18} />} />
            </Tooltip>
            <Tooltip content="Delete permanently" position="bottom">
                <Button iconOnly variant="danger" rounded="full" leftIcon={<Trash2 size={18} />} />
            </Tooltip>
        </div>
    ),
};

export const WithDelay: Story = {
    args: {
        content: 'I appear after 500ms ⏱️',
        position: 'top',
        delay: 500,
        children: <Button variant="secondary">Hover & Wait</Button>,
    },
};
