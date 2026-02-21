import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './breadcrumbs';
import { Home, User, Shield, Zap, ChevronRight, Slash } from 'lucide-react';

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const items = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Users', href: '/users', icon: User },
    { label: 'Acknowledge', href: '/users/ack', icon: Zap },
    { label: 'Security Settings', href: '/settings/security', icon: Shield },
    { label: 'Current Page' }
];

export const Gallery: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
                <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>Default with Icons</p>
                <Breadcrumbs items={items.slice(0, 3)} />
            </section>

            <section>
                <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>Filled Variant (Premium)</p>
                <Breadcrumbs items={items.slice(0, 4)} variant="filled" />
            </section>

            <section>
                <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>Outline & Small Size</p>
                <Breadcrumbs items={items.slice(0, 3)} variant="outline" size="sm" />
            </section>

            <section>
                <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>Ghost Variant & Large Size</p>
                <Breadcrumbs items={items.slice(0, 3)} variant="ghost" size="lg" />
            </section>
        </div>
    )
};

export const CustomColors: Story = {
    args: {
        items: items.slice(0, 4),
        activeColor: '#f97316', // Mango Orange
        hoverColor: '#3b82f6',  // Blue
        textColor: '#64748b',
        variant: 'filled',
        bgColor: '#fff7ed'
    }
};

export const Collapsed: Story = {
    args: {
        items: items,
        maxItems: 3,
        variant: 'filled'
    }
};

export const CustomSeparators: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Breadcrumbs
                items={items.slice(0, 3)}
                separator={<Slash size={14} style={{ transform: 'rotate(-20deg)' }} />}
            />
            <Breadcrumbs
                items={items.slice(0, 3)}
                separator={<span style={{ fontWeight: 800 }}>/</span>}
            />
            <Breadcrumbs
                items={items.slice(0, 3)}
                separator={<ChevronRight size={14} strokeWidth={3} />}
            />
        </div>
    )
};
