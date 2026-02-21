import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayoutDashboard, Users, Settings, Bell } from 'lucide-react';
import { Sidebar } from './sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    component: Sidebar,
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const sections = [
    {
        title: 'Main',
        links: [
            { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '#', active: true },
            { icon: <Users size={20} />, label: 'Users', path: '#', badge: 5 },
            { icon: <Bell size={20} />, label: 'Notifications', path: '#' },
        ],
    },
    {
        title: 'System',
        links: [
            { icon: <Settings size={20} />, label: 'Settings', path: '#' },
        ],
    },
];

export const Default: Story = {
    args: {
        isOpen: true,
        sections,
        logo: <span className="text-lg font-bold text-[var(--primaryColor)]">MangoUI</span>,
    },
};

export const WithFooter: Story = {
    args: {
        isOpen: true,
        sections,
        logo: <span className="text-lg font-bold text-[var(--primaryColor)]">MangoUI</span>,
        footer: (
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[var(--secondaryColor)] cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[var(--primaryColor)] flex items-center justify-center text-white text-sm font-bold">J</div>
                <div>
                    <p className="text-sm font-semibold text-[var(--textColor)]">John Doe</p>
                    <p className="text-xs text-[var(--labelSecondaryColor)]">john@example.com</p>
                </div>
            </div>
        ),
    },
};

