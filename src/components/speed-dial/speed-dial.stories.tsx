import type { Meta, StoryObj } from '@storybook/react';
import { SpeedDial } from './speed-dial';
import { Plus, X, Mail, Share2, Printer, Star, Heart, FileText, Trash2 } from 'lucide-react';

const meta: Meta<typeof SpeedDial> = {
    title: 'Components/SpeedDial',
    component: SpeedDial,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

const defaultActions = [
    { id: 'print', icon: <Printer size={18} />, label: 'Print File', onClick: () => alert('Printing...') },
    { id: 'share', icon: <Share2 size={18} />, label: 'Share Link', onClick: () => alert('Sharing...') },
    { id: 'email', icon: <Mail size={18} />, label: 'Send Email', onClick: () => alert('Emailing...') },
    { id: 'star', icon: <Star size={18} />, label: 'Favorite', onClick: () => alert('Starred!') },
];

export const BottomRight: StoryObj<typeof SpeedDial> = {
    render: () => (
        <div style={{ height: '300px', width: '500px' }}>
            <p style={{ textAlign: 'center', paddingTop: '100px', color: '#666' }}>Look at the bottom-right corner</p>
            <SpeedDial
                icon={<Plus />}
                activeIcon={<X />}
                actions={defaultActions}
                position="bottom-right"
            />
        </div>
    )
};

export const DifferentDirections: StoryObj<typeof SpeedDial> = {
    render: () => (
        <div style={{ height: '500px', width: '800px', display: 'flex', flexWrap: 'wrap', gap: '200px', padding: '100px' }}>
            <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                <span style={{ fontSize: '12px', display: 'block', marginBottom: '8px' }}>Up (Default)</span>
                <SpeedDial
                    icon={<Plus />}
                    actions={defaultActions.slice(0, 3)}
                    direction="up"
                    position="fixed"
                    style={{ position: 'absolute', bottom: 0, right: 0 }}
                />
            </div>

            <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                <span style={{ fontSize: '12px', display: 'block', marginBottom: '8px' }}>Down</span>
                <SpeedDial
                    icon={<Plus />}
                    actions={defaultActions.slice(0, 3)}
                    direction="down"
                    position="fixed"
                    style={{ position: 'absolute', top: 0, right: 0 }}
                />
            </div>

            <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                <span style={{ fontSize: '12px', display: 'block', marginBottom: '8px' }}>Left</span>
                <SpeedDial
                    icon={<Plus />}
                    actions={defaultActions.slice(0, 3)}
                    direction="left"
                    position="fixed"
                    style={{ position: 'absolute', bottom: 0, right: 0 }}
                />
            </div>

            <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                <span style={{ fontSize: '12px', display: 'block', marginBottom: '8px' }}>Right</span>
                <SpeedDial
                    icon={<Plus />}
                    actions={defaultActions.slice(0, 3)}
                    direction="right"
                    position="fixed"
                    style={{ position: 'absolute', bottom: 0, left: 0 }}
                />
            </div>
        </div>
    )
};

export const GlassTheme: StoryObj<typeof SpeedDial> = {
    render: () => (
        <div style={{ height: '400px', width: '600px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ padding: '40px', color: 'white' }}>
                <h3>Glassmorphism Style</h3>
                <p>Perfect for dark or colorful backgrounds</p>
            </div>
            <SpeedDial
                icon={<Plus />}
                activeIcon={<X />}
                variant="glass"
                actions={[
                    { id: '1', icon: <Heart size={18} />, label: 'Like', variant: 'danger' },
                    { id: '2', icon: <FileText size={18} />, label: 'Save' },
                    { id: '3', icon: <Trash2 size={18} />, label: 'Delete', variant: 'danger' },
                ]}
                position="bottom-right"
            />
        </div>
    )
};

export const CustomColors: StoryObj<typeof SpeedDial> = {
    render: () => (
        <div style={{ height: '300px', width: '500px' }}>
            <SpeedDial
                icon={<Settings size={20} />}
                variant="black"
                actions={[
                    { id: 'p', icon: <User size={18} />, label: 'Profile', variant: 'info' },
                    { id: 's', icon: <Settings size={18} />, label: 'Settings', variant: 'success' },
                    { id: 'l', icon: <Share2 size={18} />, label: 'Logout', variant: 'danger' },
                ]}
                position="bottom-left"
            />
        </div>
    )
};

import { User, Settings } from 'lucide-react';
