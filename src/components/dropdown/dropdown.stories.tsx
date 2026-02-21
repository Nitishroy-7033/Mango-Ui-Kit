import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './dropdown';
import {
    User,
    Mail,
    Settings,
    LogOut,
    Shield,
    Bell,
    Hotel,
    MoreHorizontal
} from 'lucide-react';
import { Button } from '../button';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        showLabel: { control: 'boolean' },
        loading: { control: 'boolean' },
        searchable: { control: 'boolean' },
        multiple: { control: 'boolean' },
        placement: {
            control: 'select',
            options: ['bottom', 'top']
        }
    }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const baseOptions = [
    { id: '1', name: 'Profile', icon: <User size={16} />, details: 'View your account' },
    { id: '2', name: 'Billing', icon: <Mail size={16} />, details: 'Manage subscription' },
    { id: '3', name: 'Settings', icon: <Settings size={16} />, details: 'App configurations' },
    { id: '4', name: 'Team', icon: <Shield size={16} />, details: 'Collaborators' },
    { id: '5', name: 'Notifications', icon: <Bell size={16} />, details: 'Alert settings' },
    { id: '6', name: 'Logout', icon: <LogOut size={16} />, details: 'Sign out' },
];

const roomOptions = [
    { id: 'r1', name: 'Room 01', icon: <Hotel size={18} />, details: 'AC • 0/2 Beds Available' },
    { id: 'r2', name: 'Room 451', icon: <Hotel size={18} />, details: 'AC • 3/4 Beds Available' },
    { id: 'r3', name: 'Room 804', icon: <Hotel size={18} />, details: 'AC • 0/2 Beds Available' },
    { id: 'r4', name: 'Room 387', icon: <Hotel size={18} />, details: 'AC • 3/4 Beds Available' },
    { id: 'r5', name: 'Room 588', icon: <Hotel size={18} />, details: 'AC • 2/2 Beds Available' },
    { id: 'r6', name: 'Room 902', icon: <Hotel size={18} />, details: 'Non-AC • 1/4 Beds Available' },
];

export const Default: Story = {
    render: (args) => {
        const [val, setVal] = useState('');
        return <Dropdown {...args} value={val} onChange={setVal} />;
    },
    args: {
        options: baseOptions,
        placeholder: 'Select an action',
        label: 'User Actions',
    },
};

export const MultiSelect: Story = {
    render: (args) => {
        const [val, setVal] = useState<string[]>([]);
        return <Dropdown {...args} value={val} onChange={setVal} />;
    },
    args: {
        options: baseOptions,
        multiple: true,
        placeholder: 'Select features',
        label: 'Permissions',
        closeOnSelect: false,
    },
};

export const Searchable: Story = {
    render: (args) => {
        const [val, setVal] = useState('');
        return <Dropdown {...args} value={val} onChange={setVal} />;
    },
    args: {
        options: roomOptions,
        searchable: true,
        placeholder: 'Search rooms...',
        label: 'Vacant Inventory',
    },
};

export const HoverTrigger: Story = {
    render: (args) => {
        const [val, setVal] = useState('');
        return <Dropdown {...args} value={val} onChange={setVal} />;
    },
    args: {
        options: baseOptions,
        trigger: 'hover',
        placeholder: 'Hover me',
        variant: 'outline',
    },
};

export const RichUI: Story = {
    render: (args) => {
        const [val, setVal] = useState('');
        return (
            <div style={{ width: '400px' }}>
                <Dropdown
                    {...args}
                    value={val}
                    onChange={setVal}
                    footer={
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Button size="sm" variant="outline" style={{ flex: 1 }}>View More</Button>
                            <Button size="sm" style={{ flex: 1 }}>Add New</Button>
                        </div>
                    }
                />
            </div>
        );
    },
    args: {
        options: roomOptions,
        searchable: true,
        placeholder: 'Pick a room with vacant beds...',
        label: 'VACANT INVENTORY',
    },
};

export const LazyLoading: Story = {
    render: (args) => {
        const [items, setItems] = useState(roomOptions);
        const [loading, setLoading] = useState(false);
        const [val, setVal] = useState('');

        const loadMore = () => {
            if (loading) return;
            setLoading(true);
            setTimeout(() => {
                const nextBatch = roomOptions.map(r => ({
                    ...r,
                    id: `${r.id}-${Date.now()}`,
                    name: `${r.name} (Batch ${Math.floor(items.length / 5)})`
                }));
                setItems(prev => [...prev, ...nextBatch]);
                setLoading(false);
            }, 1500);
        };

        return (
            <div style={{ width: '350px' }}>
                <Dropdown
                    {...args}
                    options={items}
                    loading={loading}
                    value={val}
                    onChange={setVal}
                    onLoadMore={loadMore}
                    hasMore={items.length < 30}
                />
            </div>
        );
    },
    args: {
        placeholder: 'Infinite rooms...',
        label: 'Scroll to bottom (60%+)',
        loadMoreThreshold: 0.6,
    },
};

export const ContextMenu: Story = {
    render: (args) => {
        const [val, setVal] = useState('');
        return (
            <div style={{
                width: '500px',
                height: '300px',
                background: 'var(--secondaryColor)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--labelSecondaryColor)',
                fontWeight: 600,
                border: '2px dashed var(--borderColor)'
            }}>
                Right Click Anywhere Here
                <Dropdown {...args} value={val} onChange={setVal} />
            </div>
        );
    },
    args: {
        options: baseOptions,
        trigger: 'contextMenu',
        placeholder: 'Hidden',
    },
};

export const LoadingState: Story = {
    args: {
        options: [],
        loading: true,
        placeholder: 'Fetching data...',
    },
};

export const CustomVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Dropdown options={baseOptions} variant="default" placeholder="Default" style={{ width: '150px' }} />
            <Dropdown options={baseOptions} variant="outline" placeholder="Outline" style={{ width: '150px' }} />
            <Dropdown options={baseOptions} variant="ghost" placeholder="Ghost" style={{ width: '150px' }} />
            <Dropdown
                options={baseOptions}
                variant="plain"
                icon={MoreHorizontal}
                placeholder=""
                style={{ width: '40px' }}
            />
        </div>
    ),
};
