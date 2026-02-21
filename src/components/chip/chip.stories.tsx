import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './chip';
import { useState } from 'react';
import { Tag, Star, Bell } from 'lucide-react';

const meta: Meta<typeof Chip> = {
    title: 'Components/Chip',
    component: Chip,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        children: 'Label',
        variant: 'soft',
        color: 'primary',
        size: 'md',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {(['filled', 'soft', 'outline', 'ghost'] as const).map(v => (
                <div key={v} style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {(['primary', 'success', 'warning', 'error', 'info', 'neutral'] as const).map(c => (
                        <Chip key={c} variant={v} color={c}>{c}</Chip>
                    ))}
                </div>
            ))}
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Chip size="sm">Small</Chip>
            <Chip size="md">Medium</Chip>
            <Chip size="lg">Large</Chip>
        </div>
    )
};

export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Chip icon={<Tag size={12} />}>Category</Chip>
            <Chip icon={<Star size={12} />} color="warning" variant="filled">Featured</Chip>
            <Chip icon={<Bell size={12} />} color="error" variant="soft">Alert</Chip>
        </div>
    )
};

export const Removable: Story = {
    render: () => {
        const [chips, setChips] = useState(['React', 'TypeScript', 'Vite', 'Storybook']);
        return (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {chips.map(chip => (
                    <Chip
                        key={chip}
                        removable
                        onRemove={() => setChips(prev => prev.filter(c => c !== chip))}
                    >
                        {chip}
                    </Chip>
                ))}
            </div>
        );
    }
};

export const SelectableGroup: Story = {
    render: () => {
        const options = ['All', 'Design', 'Engineering', 'Marketing', 'Product'];
        const [selected, setSelected] = useState('All');
        return (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {options.map(opt => (
                    <Chip
                        key={opt}
                        variant={selected === opt ? 'filled' : 'outline'}
                        color="primary"
                        onClick={() => setSelected(opt)}
                        selected={selected === opt}
                    >
                        {opt}
                    </Chip>
                ))}
            </div>
        );
    }
};
