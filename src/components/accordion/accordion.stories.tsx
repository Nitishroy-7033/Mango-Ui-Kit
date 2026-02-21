import type { Meta, StoryObj } from '@storybook/react-vite';
import { Settings, Bell, Plus, Minus, HelpCircle, Shield, CreditCard, Heart } from 'lucide-react';
import { Accordion } from './accordion';
import React from 'react';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'padded',
        backgrounds: { default: 'dark' }
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    {
        title: 'Account Settings',
        icon: Settings,
        content: 'Manage your account preferences, security settings, and personal information. You can change your password, update your email, and manage connected third-party services.',
    },
    {
        title: 'Privacy & Security',
        icon: Shield,
        content: 'Control your visibility and security options. Enable two-factor authentication, manage app permissions, and view login activity.',
    },
    {
        title: 'Billing Information',
        icon: CreditCard,
        content: 'View your subscription status, update payment methods, and download your billing history and invoices.',
    },
    {
        title: 'Notifications',
        icon: Bell,
        content: 'Configure how and when you receive notifications from the platform. Choose between email, push notifications, and SMS alerts.',
    },
];

export const Default: Story = {
    args: { items, defaultOpen: [0] },
};

export const Bordered: Story = {
    args: { items, variant: 'bordered', defaultOpen: [0] },
};

export const Separated: Story = {
    args: {
        items,
        variant: 'separated',
        allowMultiple: true,
        defaultOpen: [0]
    },
};

export const Filled: Story = {
    args: { items, variant: 'filled', defaultOpen: [0] },
};

export const Ghost: Story = {
    args: { items, variant: 'ghost', defaultOpen: [0] },
};

export const Small: Story = {
    args: { items, size: 'sm', defaultOpen: [0] },
};

export const Large: Story = {
    args: { items, size: 'lg', defaultOpen: [0] },
};

export const CustomIcons: Story = {
    args: {
        items,
        expandIcon: <Plus size={18} />,
        collapseIcon: <Minus size={18} />,
        defaultOpen: [0]
    },
};

export const ArrowOnLeft: Story = {
    args: { items, arrowPosition: 'left', defaultOpen: [0] },
};

export const IconsOnRight: Story = {
    args: { items, iconPosition: 'right', defaultOpen: [0] },
};

export const FullRounded: Story = {
    args: { items, rounded: 'full', defaultOpen: [0] },
};

export const DisabledItems: Story = {
    args: {
        items: [
            ...items.slice(0, 2),
            { title: 'Archived Settings (Disabled)', icon: HelpCircle, content: 'This content is archived.', disabled: true },
            ...items.slice(2)
        ],
        defaultOpen: [0]
    },
};

export const CustomColors: Story = {
    args: {
        items: [
            { title: 'Premium Feature', icon: Heart, content: 'This section has custom colors for a more branded look.' },
            { title: 'Analytics', icon: Settings, content: 'View detailed performance metrics here.' },
        ],
        accentColor: '#ec4899', // Pink
        headerBg: '#fdf2f8',
        contentBg: '#ffffff',
        titleColor: '#be185d',
        contentColor: '#db2777',
        iconColor: '#db2777',
        arrowColor: '#db2777',
        borderColor: '#fbcfe8',
        variant: 'separated',
        rounded: 'xl',
        defaultOpen: [0]
    },
};

export const Controlled: React.FC = () => {
    const [active, setActive] = React.useState<number[]>([0]);

    return (
        <div className="space-y-4">
            <div className="flex gap-2 mb-4">
                {[0, 1, 2, 3].map(i => (
                    <button
                        key={i}
                        onClick={() => setActive(active.includes(i) ? active.filter(x => x !== i) : [...active, i])}
                        className={`px-3 py-1 rounded-md text-sm ${active.includes(i) ? 'bg-mango-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}
                    >
                        Toggle {i}
                    </button>
                ))}
            </div>
            <Accordion
                items={items}
                activeItems={active}
                onChange={setActive}
                allowMultiple
            />
        </div>
    );
};
