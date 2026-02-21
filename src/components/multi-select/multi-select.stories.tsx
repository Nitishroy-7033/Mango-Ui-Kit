import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultiSelect } from './multi-select';
import {
    User,
    Settings,
    Mail,
    Shield,
    Bell,
    CheckCircle,
    FileText,
    Image as ImageIcon
} from 'lucide-react';
import { Button } from '../button';

const meta: Meta<typeof MultiSelect> = {
    title: 'Components/MultiSelect',
    component: MultiSelect,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const richOptions = [
    { id: '1', name: 'Profile Settings', icon: <User size={14} />, details: 'Manage your bio and avatar' },
    { id: '2', name: 'Security', icon: <Shield size={14} />, details: 'Passwords and 2FA' },
    { id: '3', name: 'Email Notifications', icon: <Mail size={14} />, details: 'Configure alerts' },
    { id: '4', name: 'System Logs', icon: <Settings size={14} />, details: 'View app performance' },
    { id: '5', name: 'Push Alerts', icon: <Bell size={14} />, details: 'Mobile notifications' },
];

export const Default: Story = {
    render: () => {
        const [val, setVal] = useState<(string | number)[]>([]);
        return (
            <div style={{ width: '400px' }}>
                <MultiSelect
                    label="Frameworks"
                    placeholder="Select tools..."
                    options={[
                        { id: 'react', name: 'React' },
                        { id: 'vue', name: 'Vue' },
                        { id: 'angular', name: 'Angular' },
                        { id: 'svelte', name: 'Svelte' },
                        { id: 'nextjs', name: 'Next.js' },
                    ]}
                    value={val}
                    onChange={setVal}
                />
            </div>
        );
    }
};

export const WithIcons: Story = {
    render: () => {
        const [val, setVal] = useState<(string | number)[]>(['1']);
        return (
            <div style={{ width: '450px' }}>
                <MultiSelect
                    label="Icons Enabled"
                    options={richOptions}
                    value={val}
                    onChange={setVal}
                    showIcons={true}
                />
            </div>
        );
    }
};

export const WithoutIcons: Story = {
    render: () => {
        const [val, setVal] = useState<(string | number)[]>(['1']);
        return (
            <div style={{ width: '450px' }}>
                <MultiSelect
                    label="Icons Disabled"
                    options={richOptions}
                    value={val}
                    onChange={setVal}
                    showIcons={false}
                />
            </div>
        );
    }
};

export const RichUI: Story = {
    render: () => {
        const [val, setVal] = useState<(string | number)[]>(['1', '3']);
        return (
            <div style={{ width: '450px' }}>
                <MultiSelect
                    label="Account Preferences"
                    options={richOptions}
                    value={val}
                    onChange={setVal}
                    maxTagsVisible={2}
                />
            </div>
        );
    }
};

export const PaginationAndLoading: Story = {
    render: () => {
        const [items, setItems] = useState([
            { id: 'doc1', name: 'Project_Alpha.pdf', icon: <FileText size={14} />, details: 'Created 2 days ago' },
            { id: 'doc2', name: 'Logo_Final.png', icon: <ImageIcon size={14} />, details: 'Design assets' },
            { id: 'doc3', name: 'Invoice_778.docx', icon: <FileText size={14} />, details: 'Billing department' },
        ]);
        const [loading, setLoading] = useState(false);
        const [val, setVal] = useState<(string | number)[]>([]);

        const loadMore = () => {
            if (loading) return;
            setLoading(true);
            setTimeout(() => {
                const nextBatch = [
                    { id: `new-${Date.now()}`, name: 'Newly_Added_File.pdf', icon: <CheckCircle size={14} />, details: 'Just synced' },
                    { id: `new2-${Date.now()}`, name: 'Backup_Log.txt', icon: <FileText size={14} />, details: 'System generated' },
                ];
                setItems(prev => [...prev, ...nextBatch]);
                setLoading(false);
            }, 1500);
        };

        return (
            <div style={{ width: '400px' }}>
                <MultiSelect
                    label="Recent Files"
                    placeholder="Pick files to share..."
                    options={items}
                    value={val}
                    onChange={setVal}
                    onLoadMore={loadMore}
                    hasMore={items.length < 15}
                    loading={loading}
                />
            </div>
        );
    }
};

export const SizesAndVariants: Story = {
    render: () => {
        const [v, setV] = useState<(string | number)[]>([]);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '400px' }}>
                <MultiSelect label="Small (Filled)" size="sm" variant="filled" options={richOptions} value={v} onChange={setV} />
                <MultiSelect label="Medium (Outlined)" size="md" options={richOptions} value={v} onChange={setV} />
                <MultiSelect label="Large (Outlined)" size="lg" options={richOptions} value={v} onChange={setV} />
            </div>
        );
    }
};

export const PreSelected: Story = {
    render: () => {
        const [val, setVal] = useState<(string | number)[]>(['1', '2']);
        return (
            <div style={{ width: '400px' }}>
                <MultiSelect
                    label="Pre-selected Items"
                    options={richOptions}
                    value={val}
                    onChange={setVal}
                />
            </div>
        );
    }
};

export const WithFooter: Story = {
    render: () => {
        const [val, setVal] = useState<(string | number)[]>([]);
        return (
            <div style={{ width: '400px' }}>
                <MultiSelect
                    label="Team Members"
                    options={richOptions}
                    value={val}
                    onChange={setVal}
                    footer={
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Button size="sm" variant="outline" style={{ flex: 1 }}>Invite Others</Button>
                            <Button size="sm" style={{ flex: 1 }}>Manage Roles</Button>
                        </div>
                    }
                />
            </div>
        );
    }
};
