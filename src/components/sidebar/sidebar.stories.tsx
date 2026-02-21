import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './sidebar';
import {
    Users,
    Bed,
    MessageSquare,
    Wallet,
    Settings,
    LayoutDashboard,
    Bell,
    Layers,
    Plus,
    Search,
    Image as ImageIcon,
    Grid,
    Terminal,
    Cpu,
    History,
    MessageCircle,
    Pin,
    CheckCircle2,
    AlertTriangle
} from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const MangoLogo = () => (
    <div style={{
        width: '32px',
        height: '32px',
        background: 'linear-gradient(135deg, #fa8029 0%, #ffb347 100%)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px'
    }}>
        M
    </div>
);

const UserFooter = ({ collapsed }: { collapsed?: boolean }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        gap: '12px',
        width: '100%',
        padding: collapsed ? '0' : '0 4px'
    }}>
        <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="User"
            style={{ width: '32px', height: '32px', borderRadius: '50%' }}
        />
        {!collapsed && (
            <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--textColor)' }}>Alex Thompson</p>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.6, color: 'var(--labelSecondaryColor)' }}>Admin Profile</p>
            </div>
        )}
    </div>
);

const enterpriseCategories = [
    {
        title: 'Management',
        items: [
            { id: 'dash', label: 'Overview', icon: <LayoutDashboard size={20} /> },
            { id: 'rooms', label: 'Rooms', icon: <Bed size={20} />, badge: 12 },
            { id: 'tenants', label: 'Tenants', icon: <Users size={20} /> },
            { id: 'complaints', label: 'Complaints', icon: <MessageSquare size={20} />, badge: 3, badgeVariant: 'warning' as const },
        ]
    },
    {
        title: 'Financials',
        items: [
            { id: 'rent', label: 'Rent Collection', icon: <Wallet size={20} /> },
            { id: 'reports', label: 'Financial Reports', icon: <Layers size={20} /> },
        ]
    },
    {
        title: 'Systems',
        items: [
            {
                id: 'settings',
                label: 'Settings',
                icon: <Settings size={20} />,
                subItems: [
                    { id: 'general', label: 'General Config' },
                    { id: 'security', label: 'Security & Access', badge: 'New' },
                    { id: 'api', label: 'API Keys' },
                ]
            },
            { id: 'notifications', label: 'Alerts', icon: <Bell size={20} /> },
        ]
    }
];

export const Enterprise: Story = {
    render: () => {
        const [collapsed, setCollapsed] = useState(false);
        return (
            <div style={{ display: 'flex', height: '100vh', background: 'var(--background, #f8fafc)' }}>
                <Sidebar
                    logo={<MangoLogo />}
                    brandName="MangoAdmin"
                    categories={enterpriseCategories}
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    activeId="dash"
                    togglePosition="bottom"
                    footer={<UserFooter collapsed={collapsed} />}
                />
                <main style={{ flex: 1, padding: '40px' }}>
                    <h1>Enterprise Sidebar</h1>
                    <p>Standard enterprise layout with categories and bottom toggle.</p>
                </main>
            </div>
        );
    }
};

export const Colored: Story = {
    render: () => {
        const [collapsed, setCollapsed] = useState(false);
        return (
            <div style={{ display: 'flex', height: '100vh', gap: '20px', padding: '20px', background: '#f1f5f9' }}>
                <Sidebar
                    brandName="Success Theme"
                    categories={enterpriseCategories}
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    colorScheme="success"
                    activeId="dash"
                />
                <Sidebar
                    brandName="Purple Theme"
                    categories={enterpriseCategories}
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    colorScheme="#7c3aed"
                    activeId="dash"
                />
                <main style={{ flex: 1, padding: '20px' }}>
                    <h1>Color Schemes</h1>
                    <p>Support for preset names (success, error, etc.) and custom Hex codes.</p>
                </main>
            </div>
        );
    }
};

export const ChatHistoryStyle: Story = {
    render: () => {
        const [collapsed, setCollapsed] = useState(false);
        const [active, setActive] = useState('chat-1');

        const topActions = [
            {
                title: '', items: [
                    { id: 'new', label: 'New chat', icon: <Plus size={20} /> },
                    { id: 'search', label: 'Search chats', icon: <Search size={20} /> },
                    { id: 'images', label: 'Images', icon: <ImageIcon size={20} /> },
                    { id: 'apps', label: 'Apps', icon: <Grid size={20} /> },
                    { id: 'codex', label: 'Codex', icon: <Terminal size={20} /> },
                    { id: 'gpts', label: 'GPTs', icon: <Cpu size={20} /> },
                ]
            }
        ];

        const history = [
            {
                title: 'Your chats', items: [
                    { id: 'chat-1', label: 'Laptop configuration breakdown', icon: <MessageCircle size={18} />, badge: <Pin size={12} /> },
                    { id: 'chat-2', label: 'React UI Library Setup', icon: <History size={18} /> },
                    { id: 'chat-3', label: 'Behavioral Pattern Analysis', icon: <History size={18} />, badge: <CheckCircle2 size={12} color="#22c55e" /> },
                    { id: 'chat-4', label: 'AI Video Pipeline Design', icon: <History size={18} />, badge: <AlertTriangle size={12} color="#f59e0b" /> },
                    { id: 'chat-5', label: 'Using Variables in Postman', icon: <History size={18} /> },
                    { id: 'chat-6', label: 'Postman Token Script', icon: <History size={18} /> },
                ]
            }
        ];

        return (
            <div style={{ display: 'flex', height: '100vh', background: 'var(--background)', color: 'var(--textColor)' }}>
                <Sidebar
                    logo={<Cpu size={24} color="var(--sidebar-active-color, var(--primaryColor))" />}
                    brandName="GPT-4o"
                    topCategories={topActions}
                    categories={history}
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    activeId={active}
                    onItemClick={setActive}
                    togglePosition="top"
                    style={{
                        background: 'var(--primaryContainercolor)',
                        borderRight: '1px solid var(--borderColor)',
                        '--textColor': 'var(--textColor)',
                        '--labelColor': 'var(--labelColor)',
                        '--borderColor': 'var(--borderColor)',
                        '--secondaryColor': 'var(--secondaryColor)'
                    } as any}
                    colorScheme="primary"
                    itemBorderRadius="8px"
                    footer={<UserFooter collapsed={collapsed} />}
                />
                <main style={{ flex: 1, padding: '40px', background: 'var(--background)' }}>
                    <h1 style={{ color: 'var(--textColor)' }}>AI Assistant Layout</h1>
                    <p style={{ color: 'var(--labelColor)' }}>This layout now responds to your theme colors!</p>
                </main>
            </div>
        );
    }
};

export const CustomRadius: Story = {
    render: () => {
        const [collapsed, setCollapsed] = useState(false);
        return (
            <div style={{ display: 'flex', height: '100vh', background: '#f8fafc', padding: '20px' }}>
                <Sidebar
                    logo={<MangoLogo />}
                    brandName="RoundedSide"
                    categories={enterpriseCategories}
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    borderRadius="0 30px 30px 0"
                    itemBorderRadius="20px"
                />
            </div>
        );
    }
};
