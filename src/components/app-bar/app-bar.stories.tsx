import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppBar } from './app-bar';
import { Button } from '../button/button';
import { Layout, Home, Package, Info, Rocket, HelpCircle } from 'lucide-react';

const meta: Meta<typeof AppBar> = {
    title: 'Components/AppBar',
    component: AppBar,
    parameters: {
        layout: 'fullscreen',
        backgrounds: { default: 'dark' }
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const navItems = [
    { label: 'Home', icon: Home, active: true },
    {
        label: 'Products',
        icon: Package,
        children: [
            { label: 'Electronics' },
            { label: 'Clothing' },
            { label: 'Books' }
        ]
    },
    { label: 'About', icon: Info },
];

export const ModernDashboard: Story = {
    args: {
        brandName: 'MangoUI',
        logo: <div style={{ background: '#f97316', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Package size={20} /></div>,
        navItems: navItems,
        user: { fullName: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?u=john', email: 'john@example.com' },
        showSearch: true,
        notificationCount: 3,
        subscriptionPlan: 'Business',
    },
};

export const MarketingNavBar: Story = {
    args: {
        variant: 'glass',
        brandName: 'MangoKit',
        navItems: [
            { label: 'Features' },
            { label: 'Pricing' },
            { label: 'Resources', children: [{ label: 'Docs' }, { label: 'Tutorials' }] }
        ],
        showSearch: false,
        rightContent: (
            <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="ghost" size="sm">Log in</Button>
                <Button variant="primary" size="sm" rounded="full">Get Started</Button>
            </div>
        )
    }
};

export const FloatingNavBar: Story = {
    args: {
        variant: 'floating',
        brandName: 'FloatingApp',
        navItems: navItems,
        rightContent: <Button variant="outline" size="sm" rounded="full" icon={<Rocket size={16} />}>Deploy</Button>,
        showSearch: false,
        showThemeToggle: true,
        theme: 'dark'
    }
};

export const FullControl: Story = {
    args: {
        variant: 'bordered',
        leftContent: <Button variant="ghost" size="sm" icon={<Layout size={16} />}>Dashboard</Button>,
        centerContent: (
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <a href="#" style={{ color: 'var(--primaryColor)', fontWeight: 600 }}>Overview</a>
                <a href="#" style={{ color: 'var(--labelSecondaryColor)' }}>Analytics</a>
                <a href="#" style={{ color: 'var(--labelSecondaryColor)' }}>Reports</a>
            </div>
        ),
        rightContent: (
            <div style={{ display: 'flex', gap: 12 }}>
                <Button variant="outline" size="sm" icon={<HelpCircle size={16} />} />
                <Button variant="primary" size="sm">New Project</Button>
            </div>
        ),
        showSearch: false,
        showThemeToggle: false,
    }
};

export const BrandedTheme: Story = {
    args: {
        brandName: 'CustomColor',
        bgColor: '#1e1b4b', // Indigo-950
        textColor: '#e0e7ff',
        accentColor: '#818cf8',
        borderColor: '#312e81',
        navItems: navItems,
        user: { fullName: 'Indigo User' },
        showSearch: false
    }
};
