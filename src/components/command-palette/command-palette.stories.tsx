import { useState } from 'react';
import { CommandPalette } from './index';
import { Button } from '../button';
import { User, Settings, FileText, Bell, Plus, Trash2, Home, Palette } from 'lucide-react';
import type { Meta } from '@storybook/react';

const meta: Meta = {
    title: 'Components/CommandPalette',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Demo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        {
            id: 'home',
            label: 'Home',
            description: 'Go to the dashboard',
            shortcut: ['G', 'D'],
            icon: <Home size={18} />,
            group: 'Navigation',
            onSelect: () => console.log('Home')
        },
        {
            id: 'profile',
            label: 'View Profile',
            description: 'Manage your personal information',
            shortcut: ['G', 'P'],
            icon: <User size={18} />,
            group: 'Navigation',
            onSelect: () => console.log('Profile')
        },
        {
            id: 'settings',
            label: 'Settings',
            description: 'Change application appearance and settings',
            shortcut: ['⌘', ','],
            icon: <Settings size={18} />,
            group: 'Preferences',
            onSelect: () => console.log('Settings')
        },
        {
            id: 'theme',
            label: 'Change Theme',
            description: 'Switch between light and dark mode',
            shortcut: ['⇧', 'T'],
            icon: <Palette size={18} />,
            group: 'Preferences',
            onSelect: () => console.log('Theme')
        },
        {
            id: 'new-doc',
            label: 'Create New Document',
            shortcut: ['⌘', 'N'],
            icon: <Plus size={18} />,
            group: 'Actions',
            onSelect: () => console.log('New Doc')
        },
        {
            id: 'search-files',
            label: 'Search Files',
            shortcut: ['⌘', 'P'],
            icon: <FileText size={18} />,
            group: 'Actions',
            onSelect: () => console.log('Search')
        },
        {
            id: 'notif',
            label: 'Notifications',
            shortcut: ['G', 'N'],
            icon: <Bell size={18} />,
            group: 'Actions',
            onSelect: () => console.log('Notifications')
        },
        {
            id: 'delete',
            label: 'Delete Items',
            description: 'Move selected items to trash',
            shortcut: ['⌫'],
            icon: <Trash2 size={18} />,
            group: 'Actions',
            onSelect: () => console.log('Delete')
        },
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <Button variant="primary" onClick={() => setIsOpen(true)}>
                Open Command Palette (⌘K)
            </Button>

            <p style={{ marginTop: '20px', color: '#6b7280' }}>
                Or press <strong>⌘ + K</strong> or <strong>Ctrl + K</strong> to open.
            </p>

            <CommandPalette
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                actions={actions}
            />
        </div>
    );
};
