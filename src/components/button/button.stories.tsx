import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Plus, Mail, Trash2, Download, Send, Copy, Edit, Share2, Star, MoreHorizontal, Link as LinkIcon, Upload, Settings } from 'lucide-react';
import { Button } from './button';
import { SplitButton } from './split-button';

/* ═══════════════════════════════════════════════════════════
   META
   ═══════════════════════════════════════════════════════════ */
const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'dashed', 'link'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'] },
        iconPosition: { control: 'select', options: ['start', 'end'] },
        bgColor: { control: 'color' },
        textColor: { control: 'color' },
        iconColor: { control: 'color' },
        borderColor: { control: 'color' },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

/* ═══════ All Variants ═════════════════════════════════════ */
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dashed">Dashed</Button>
            <Button variant="link">Link Button</Button>
        </div>
    ),
};

/* ═══════ Hover Effects ═══════════════════════════════════ */
export const HoverEffects: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
            <Button icon={<Settings size={18} />} hoverEffect="rotate">Rotate Icon</Button>
            <Button variant="outline" icon={<Send size={18} />} hoverEffect="slide">Slide Icon</Button>
            <Button variant="secondary" hoverEffect="scale">Scale Button</Button>
            <Button variant="primary" hoverEffect="glow">Glow Effect</Button>
            <Button iconOnly variant="danger" icon={<Trash2 size={20} />} hoverEffect="rotate" rounded="full" />
        </div>
    ),
};

/* ═══════ Dashed Buttons ═══════════════════════════════════ */
export const DashedButtons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Button variant="dashed" icon={<Plus size={18} />}>Add Item</Button>
            <Button variant="dashed" icon={<Upload size={18} />}>Upload File</Button>
            <Button variant="dashed" iconOnly icon={<Plus size={20} />} />
            <Button variant="dashed" iconOnly icon={<Plus size={20} />} rounded="full" />
        </div>
    ),
};

/* ═══════ Link Buttons ═════════════════════════════════════ */
export const LinkButtons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
            <Button variant="link">Learn More</Button>
            <Button variant="link" icon={<LinkIcon size={14} />}>Visit Website</Button>
            <Button variant="link" icon={<Download size={14} />} iconPosition="end">Download</Button>
        </div>
    ),
};

/* ═══════ Icon Position ════════════════════════════════════ */
export const IconPosition: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button icon={<Send size={16} />} iconPosition="start">Send (Start)</Button>
            <Button icon={<Send size={16} />} iconPosition="end">Send (End)</Button>
            <Button variant="outline" icon={<Download size={16} />} iconPosition="start">Download</Button>
            <Button variant="outline" icon={<Download size={16} />} iconPosition="end">Download</Button>
        </div>
    ),
};

/* ═══════ Loading – Interactive Demo ═══════════════════════ */
const LoadingDemo = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
            <p style={{ color: 'var(--labelColor)', fontSize: 13, margin: 0 }}>
                Click the button — it loads for 2 seconds then resets
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button isLoading={loading} onClick={handleClick} icon={<Send size={16} />}>
                    {loading ? 'Sending...' : 'Send Message'}
                </Button>
                <Button variant="outline" isLoading={loading} onClick={handleClick}>
                    {loading ? 'Processing...' : 'Process'}
                </Button>
                <Button variant="danger" isLoading={loading} onClick={handleClick}>
                    {loading ? 'Deleting...' : 'Delete'}
                </Button>
            </div>

            <p style={{ color: 'var(--labelColor)', fontSize: 13, margin: 0 }}>
                Always loading (isLoading=true):
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button isLoading>Loading</Button>
                <Button variant="secondary" isLoading>Loading</Button>
                <Button variant="outline" isLoading>Loading</Button>
                <Button variant="dashed" isLoading>Loading</Button>
                <Button iconOnly variant="secondary" isLoading />
            </div>
        </div>
    );
};

export const Loading: Story = {
    render: () => <LoadingDemo />,
};

/* ═══════ Split Button (Action Button) ═════════════════════ */
export const SplitButtonStory: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
            <SplitButton
                icon={<Send size={16} />}
                onClick={() => alert('Sent!')}
                actions={[
                    { label: 'Send Later', icon: <Mail size={14} />, onClick: () => alert('Send later') },
                    { label: 'Save as Draft', icon: <Edit size={14} />, onClick: () => alert('Draft saved') },
                    { label: 'Copy Link', icon: <Copy size={14} />, onClick: () => alert('Copied!') },
                ]}
            >
                Send
            </SplitButton>

            <SplitButton
                variant="secondary"
                icon={<Share2 size={16} />}
                onClick={() => alert('Shared!')}
                actions={[
                    { label: 'Copy Link', icon: <Copy size={14} />, onClick: () => alert('Copied') },
                    { label: 'Share via Email', icon: <Mail size={14} />, onClick: () => alert('Email') },
                    { label: 'Delete', icon: <Trash2 size={14} />, onClick: () => alert('Deleted'), danger: true },
                ]}
            >
                Share
            </SplitButton>

            <SplitButton
                variant="outline"
                icon={<MoreHorizontal size={16} />}
                onClick={() => alert('More')}
                actions={[
                    { label: 'Edit', icon: <Edit size={14} />, onClick: () => alert('Edit') },
                    { label: 'Duplicate', icon: <Copy size={14} />, onClick: () => alert('Duplicate') },
                    { label: 'Star', icon: <Star size={14} />, onClick: () => alert('Starred') },
                    { label: 'Delete', icon: <Trash2 size={14} />, onClick: () => alert('Delete'), danger: true },
                ]}
            >
                More Actions
            </SplitButton>
        </div>
    ),
};

/* ═══════ Custom Colors ════════════════════════════════════ */
export const CustomColors: Story = {
    args: {
        bgColor: "#e53535"
    },

    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button bgColor="#7c3aed" textColor="#ffffff">Purple</Button>
            <Button bgColor="#059669" textColor="#ffffff" icon={<Star size={16} />}>Emerald</Button>
            <Button variant="outline" borderColor="#ec4899" textColor="#ec4899">Pink Outline</Button>
            <Button variant="dashed" borderColor="#8b5cf6" textColor="#8b5cf6" icon={<Plus size={16} />}>
                Purple Dashed
            </Button>
            <Button bgColor="#1e293b" textColor="#e2e8f0" icon={<Send size={16} />} iconColor="#38bdf8">
                Custom Icon Color
            </Button>
            <Button variant="ghost" textColor="#059669">Green Ghost</Button>
        </div>
    )
};

/* ═══════ Rounded Variants ═════════════════════════════════ */
export const Rounded: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button rounded="none">Sharp</Button>
            <Button rounded="sm">Small</Button>
            <Button rounded="md">Medium</Button>
            <Button rounded="lg">Large</Button>
            <Button rounded="xl">Extra Large</Button>
            <Button rounded="full">Pill</Button>
        </div>
    ),
};

/* ═══════ Sizes ════════════════════════════════════════════ */
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button size="sm" icon={<Plus size={14} />}>Small</Button>
            <Button size="md" icon={<Plus size={16} />}>Medium</Button>
            <Button size="lg" icon={<Plus size={18} />}>Large</Button>
        </div>
    ),
};

/* ═══════ Icon Only ════════════════════════════════════════ */
export const IconOnly: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button iconOnly variant="primary" icon={<Plus size={20} />} tooltip="Add" />
            <Button iconOnly variant="secondary" icon={<Mail size={20} />} tooltip="Mail" />
            <Button iconOnly variant="outline" icon={<Edit size={20} />} tooltip="Edit" />
            <Button iconOnly variant="ghost" icon={<Star size={20} />} tooltip="Favorite" />
            <Button iconOnly variant="danger" icon={<Trash2 size={20} />} rounded="full" tooltip="Delete" />
            <Button iconOnly variant="dashed" icon={<Plus size={20} />} tooltip="Add" />
        </div>
    ),
};

/* ═══════ Full Width ═══════════════════════════════════════ */
export const FullWidth: Story = {
    render: () => (
        <div style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button fullWidth icon={<Send size={16} />}>Send Message</Button>
            <Button fullWidth variant="outline" icon={<Download size={16} />} iconPosition="end">Download Report</Button>
            <Button fullWidth variant="dashed" icon={<Plus size={16} />}>Add New Item</Button>
        </div>
    ),
};

/* ═══════ Playground – Configurable via Controls ════════════ */
export const Playground: Story = {
    args: {
        children: 'Click Me',
        variant: 'primary',
        size: 'md',
        rounded: 'md',
    },
};
