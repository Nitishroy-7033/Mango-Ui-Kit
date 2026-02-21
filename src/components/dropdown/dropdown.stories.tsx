import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Globe } from 'lucide-react';
import { Dropdown } from './dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const options = [
    { id: 'us', name: 'United States', details: 'North America' },
    { id: 'uk', name: 'United Kingdom', details: 'Europe' },
    { id: 'au', name: 'Australia', details: 'Oceania' },
    { id: 'ca', name: 'Canada', details: 'North America' },
    { id: 'de', name: 'Germany', details: 'Europe' },
];

const DropdownDemo = (args: React.ComponentProps<typeof Dropdown>) => {
    const [value, setValue] = useState<string | number>('');
    return (
        <div style={{ width: 280 }}>
            <Dropdown {...args} value={value} onChange={setValue} />
        </div>
    );
};

export const Default: Story = {
    render: (args) => <DropdownDemo {...args} />,
    args: { options, placeholder: 'Select a country', label: 'Country' },
};

export const Searchable: Story = {
    render: (args) => <DropdownDemo {...args} />,
    args: { options, placeholder: 'Select a country', label: 'Country', searchable: true },
};

export const WithIcon: Story = {
    render: (args) => <DropdownDemo {...args} />,
    args: { options, placeholder: 'Select region', label: 'Region', icon: Globe },
};

export const Disabled: Story = {
    render: (args) => <DropdownDemo {...args} />,
    args: { options, placeholder: 'Disabled', disabled: true },
};
