import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './segmented-control';
import { LayoutGrid, List, Maximize, User, Settings, Bell } from 'lucide-react';

const meta: Meta<typeof SegmentedControl> = {
    title: 'Components/SegmentedControl',
    component: SegmentedControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const basicOptions = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
];

export const Default: Story = {
    args: {
        options: basicOptions,
        defaultValue: 'week',
    },
};

export const Variants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
        <SegmentedControl options={basicOptions} defaultValue="day" variant="rectangle" />
        <SegmentedControl options={basicOptions} defaultValue="day" variant="pill" />
    </div>
);

export const Sizes = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
        <SegmentedControl size="sm" options={basicOptions} defaultValue="day" />
        <SegmentedControl size="md" options={basicOptions} defaultValue="day" />
        <SegmentedControl size="lg" options={basicOptions} defaultValue="day" />
    </div>
);

export const WithIcons = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
        <SegmentedControl
            options={[
                { label: 'Grid', value: 'grid', icon: <LayoutGrid size={16} /> },
                { label: 'List', value: 'list', icon: <List size={16} /> },
                { label: 'Gallery', value: 'gallery', icon: <Maximize size={16} /> },
            ]}
            defaultValue="grid"
        />

        <SegmentedControl
            variant="pill"
            options={[
                { label: 'Account', value: 'account', icon: <User size={16} /> },
                { label: 'Notifications', value: 'notif', icon: <Bell size={16} /> },
                { label: 'Settings', value: 'settings', icon: <Settings size={16} /> },
            ]}
            defaultValue="account"
        />
    </div>
);

export const FullWidth = () => {
    const [val, setVal] = useState('one');
    return (
        <div style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <SegmentedControl
                fullWidth
                options={[
                    { label: 'Option One', value: 'one' },
                    { label: 'Option Two', value: 'two' },
                    { label: 'Option Three', value: 'three' },
                ]}
                value={val}
                onChange={setVal}
            />
            <div style={{ textAlign: 'center' }}>Selected: {val}</div>
        </div>
    );
};

export const DisabledState = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
        <SegmentedControl disabled options={basicOptions} defaultValue="day" />
        <SegmentedControl
            options={[
                { label: 'Available', value: '1' },
                { label: 'Disabled', value: '2', disabled: true },
                { label: 'Works', value: '3' },
            ]}
            defaultValue="1"
        />
    </div>
);
