import type { Meta, StoryObj } from '@storybook/react';
import { OptionMenu } from './option-menu';
import {
    MoreHorizontal,
    Edit,
    Copy,
    Trash,
    Settings,
    User,
    LogOut,
    Share2,
    Scissors,
    Clipboard,
    Cloud,
    ChevronDown
} from 'lucide-react';
import { Button } from '../button';

const meta: Meta<typeof OptionMenu> = {
    title: 'Components/OptionMenu',
    component: OptionMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

const basicOptions = [
    { id: 'edit', label: 'Edit', icon: <Edit size={16} /> },
    { id: 'duplicate', label: 'Duplicate', icon: <Copy size={16} /> },
    { id: 'divider-1', label: '', isDivider: true },
    { id: 'archive', label: 'Archive', icon: <Trash size={16} /> },
    { id: 'more', label: 'More', icon: <MoreHorizontal size={16} /> },
];

export const Default: StoryObj<typeof OptionMenu> = {
    args: {
        trigger: <Button variant="secondary" rightIcon={<ChevronDown size={14} />}>Options</Button>,
        options: basicOptions,
    },
};

const nestedOptions = [
    {
        id: 'view',
        label: 'View',
        icon: <User size={16} />,
        children: [
            { id: 'large-icons', label: 'Large Icons', rightSection: 'Ctrl+Shift+2' },
            { id: 'medium-icons', label: 'Medium Icons', rightSection: 'Ctrl+Shift+3' },
            { id: 'small-icons', label: 'Small Icons', rightSection: 'Ctrl+Shift+4' },
            { id: 'divider-v', label: '', isDivider: true },
            { id: 'show-icons', label: 'Show Desktop Icons' },
        ]
    },
    { id: 'sort', label: 'Sort by', icon: <Settings size={16} /> },
    { id: 'refresh', label: 'Refresh', icon: <Share2 size={16} /> },
    { id: 'divider-main', label: '', isDivider: true },
    {
        id: 'new',
        label: 'New',
        children: [
            { id: 'folder', label: 'Folder' },
            { id: 'shortcut', label: 'Shortcut' },
        ]
    },
    { id: 'display', label: 'Display Settings' },
    { id: 'personalize', label: 'Personalize', icon: <Edit size={16} /> },
];

export const Nested: StoryObj<typeof OptionMenu> = {
    args: {
        trigger: <Button>Context Menu</Button>,
        options: nestedOptions,
        blur: true,
    },
};

const clipboardOptions = [
    { id: 'cut', label: 'Cut', icon: <Scissors size={16} />, rightSection: '⌘X' },
    { id: 'copy', label: 'Copy', icon: <Clipboard size={16} />, rightSection: '⌘C' },
    { id: 'paste', label: 'Paste', icon: <Clipboard size={16} />, rightSection: '⌘V' },
    { id: 'divider', label: '', isDivider: true },
    { id: 'cloud', label: 'Web Clipboard', icon: <Cloud size={16} /> },
];

export const WithShortcuts: StoryObj<typeof OptionMenu> = {
    args: {
        trigger: <div style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>Right Click Area (Simulated)</div>,
        options: clipboardOptions,
        theme: 'dark',
    },
};

export const HoverTrigger: StoryObj<typeof OptionMenu> = {
    args: {
        trigger: <Button variant="outline">Hover Me</Button>,
        options: basicOptions,
        triggerType: 'hover',
    },
};

export const Positioning: StoryObj<typeof OptionMenu> = {
    render: () => (
        <div style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <OptionMenu
                trigger={<Button>Open Down</Button>}
                options={basicOptions}
                placement="bottom-start"
            />
            <OptionMenu
                trigger={<Button>Open Up</Button>}
                options={basicOptions}
                placement="top-start"
            />
        </div>
    )
};

export const DangerItems: StoryObj<typeof OptionMenu> = {
    args: {
        trigger: <Button variant="secondary" iconOnly><MoreHorizontal size={20} /></Button>,
        options: [
            { id: 'profile', label: 'Profile Settings', icon: <User size={16} /> },
            { id: 'billing', label: 'Billing', icon: <Settings size={16} /> },
            { id: 'divider', label: '', isDivider: true },
            { id: 'logout', label: 'Logout', icon: <LogOut size={16} />, variant: 'danger' },
        ],
    },
};

export const IconOnly: StoryObj<typeof OptionMenu> = {
    args: {
        trigger: (
            <div style={{ cursor: 'pointer', padding: '8px', borderRadius: '50%', display: 'inline-flex', background: '#f5f5f5' }}>
                <MoreHorizontal size={20} />
            </div>
        ),
        options: basicOptions,
    },
};

export const TextTrigger: StoryObj<typeof OptionMenu> = {
    args: {
        trigger: <span style={{ cursor: 'pointer', color: 'var(--primaryColor)', fontWeight: 600, textDecoration: 'underline' }}>Click for More Options</span>,
        options: basicOptions,
    },
};

export const AllPositionsGrid: StoryObj<typeof OptionMenu> = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '100px',
            padding: '100px',
            width: '800px'
        }}>
            <OptionMenu placement="top-start" trigger={<Button variant="outline">Top Start</Button>} options={basicOptions} />
            <OptionMenu placement="top-center" trigger={<Button variant="outline">Top Center</Button>} options={basicOptions} />
            <OptionMenu placement="top-end" trigger={<Button variant="outline">Top End</Button>} options={basicOptions} />

            <OptionMenu placement="left-start" trigger={<Button variant="outline">Left Start</Button>} options={basicOptions} />
            <div /> {/* Spacer */}
            <OptionMenu placement="right-start" trigger={<Button variant="outline">Right Start</Button>} options={basicOptions} />

            <OptionMenu placement="bottom-start" trigger={<Button variant="outline">Bottom Start</Button>} options={basicOptions} />
            <OptionMenu placement="bottom-center" trigger={<Button variant="outline">Bottom Center</Button>} options={basicOptions} />
            <OptionMenu placement="bottom-end" trigger={<Button variant="outline">Bottom End</Button>} options={basicOptions} />
        </div>
    )
};

