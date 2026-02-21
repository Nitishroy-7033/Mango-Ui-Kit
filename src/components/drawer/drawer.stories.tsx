import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './drawer';
import { Button } from '../button';
import { Settings, User, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'select',
            options: ['left', 'right', 'top', 'bottom'],
            description: 'The direction from which the drawer enters',
        },
        size: {
            control: 'text',
            description: 'Width (for left/right) or Height (for top/bottom)',
        },
        title: { control: 'text' },
        subtitle: { control: 'text' },
        showClose: { control: 'boolean' },
        isOpen: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Interactive: Story = {
    args: {
        title: 'Interactive Drawer',
        subtitle: 'You can change my props in the controls panel below!',
        position: 'right',
        size: '420px',
        showClose: true,
        isOpen: false,
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.isOpen);

        // Update local state when Storybook controls change
        React.useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Customizable Drawer</Button>
                <Drawer
                    {...args}
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                        args.onClose?.();
                    }}
                >
                    <div style={{ padding: '4px' }}>
                        <p>Try changing the <strong>position</strong>, <strong>size</strong>, or <strong>title</strong> in the Storybook controls!</p>
                        <div style={{ marginTop: '20px', padding: '16px', background: 'var(--secondaryColor)', borderRadius: '12px' }}>
                            Current Config:
                            <pre style={{ fontSize: '12px', marginTop: '8px' }}>
                                {JSON.stringify({
                                    position: args.position,
                                    size: args.size,
                                    title: args.title
                                }, null, 2)}
                            </pre>
                        </div>
                    </div>
                </Drawer>
            </>
        );
    }
};

export const AppSettings: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button variant="outline" icon={<Settings size={18} />} onClick={() => setIsOpen(true)}>
                    Open Settings
                </Button>
                <Drawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Account Settings"
                    subtitle="Manage your profile and security preferences"
                    size={480}
                    footer={<Button fullWidth onClick={() => setIsOpen(false)}>Update Preferences</Button>}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {[
                            { icon: <User size={18} />, label: 'Personal Information' },
                            { icon: <Bell size={18} />, label: 'Notification Settings' },
                            { icon: <Shield size={18} />, label: 'Privacy & Security' },
                            { icon: <LogOut size={18} />, label: 'Logout session' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '16px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'background 0.2s',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--secondaryColor)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                <div style={{ color: 'var(--primaryColor)' }}>{item.icon}</div>
                                <span style={{ flex: 1, fontWeight: 500 }}>{item.label}</span>
                                <ChevronRight size={16} color="var(--labelSecondaryColor)" />
                            </div>
                        ))}
                    </div>
                </Drawer>
            </>
        );
    }
};

export const DirectionalExamples: Story = {
    render: () => {
        const [open, setOpen] = useState<string | null>(null);

        const renderDrawer = (pos: 'left' | 'right' | 'top' | 'bottom') => (
            <Drawer
                isOpen={open === pos}
                onClose={() => setOpen(null)}
                position={pos}
                title={`${pos.charAt(0).toUpperCase() + pos.slice(1)} Drawer`}
                subtitle={`This drawer slides from the ${pos} side.`}
                size={pos === 'top' || pos === 'bottom' ? 300 : 400}
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setOpen(null)}>Cancel</Button>
                        <Button onClick={() => setOpen(null)}>Save Changes</Button>
                    </>
                }
            >
                <div>
                    <p>Customizable content goes here.</p>
                </div>
            </Drawer>
        );

        return (
            <div style={{ display: 'flex', gap: '12px' }}>
                <Button onClick={() => setOpen('left')}>Left</Button>
                <Button onClick={() => setOpen('right')}>Right</Button>
                <Button onClick={() => setOpen('top')}>Top</Button>
                <Button onClick={() => setOpen('bottom')}>Bottom</Button>
                {renderDrawer('left')}
                {renderDrawer('right')}
                {renderDrawer('top')}
                {renderDrawer('bottom')}
            </div>
        );
    }
};
