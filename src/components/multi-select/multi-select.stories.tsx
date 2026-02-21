import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultiSelect } from './multi-select';

const meta: Meta<typeof MultiSelect> = {
    title: 'Components/MultiSelect',
    component: MultiSelect,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const options = [
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue' },
    { id: 'angular', name: 'Angular' },
    { id: 'svelte', name: 'Svelte' },
    { id: 'solid', name: 'SolidJS' },
    { id: 'next', name: 'Next.js' },
];

const MultiSelectDemo = (args: React.ComponentProps<typeof MultiSelect>) => {
    const [value, setValue] = useState<(string | number)[]>([]);
    return (
        <div style={{ width: 320 }}>
            <MultiSelect {...args} value={value} onChange={setValue} />
        </div>
    );
};

export const Default: Story = {
    render: (args) => <MultiSelectDemo {...args} />,
    args: { options, label: 'Frameworks', placeholder: 'Select frameworks...' },
};

export const PreSelected: Story = {
    render: (args) => {
        const [value, setValue] = useState<(string | number)[]>(['react', 'next']);
        return (
            <div style={{ width: 320 }}>
                <MultiSelect {...args} value={value} onChange={setValue} />
            </div>
        );
    },
    args: { options, label: 'Frameworks' },
};
