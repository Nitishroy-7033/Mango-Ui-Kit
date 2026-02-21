import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';
import { Button } from '../button/button';
import { Info, Settings, Trash2, Download, HelpCircle, Star, Bell } from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        },
        delay: {
            control: { type: 'number', min: 0, max: 2000, step: 100 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Wrap a Button ─────────────────────────────────────── */
export const Default: Story = {
    args: {
        content: 'Hello from Tooltip! 👋',
        position: 'top',
        children: <Button variant="primary">Hover me</Button>,
    },
};

/* ── All 4 directions ──────────────────────────────────── */
export const Positions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', padding: 80 }}>
            <Tooltip content="Top tooltip ⬆️" position="top">
                <Button variant="outline">Top</Button>
            </Tooltip>
            <Tooltip content="Right tooltip ➡️" position="right">
                <Button variant="outline">Right</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip ⬇️" position="bottom">
                <Button variant="outline">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip ⬅️" position="left">
                <Button variant="outline">Left</Button>
            </Tooltip>
        </div>
    ),
};

/* ── Wrap plain text ───────────────────────────────────── */
export const OnText: Story = {
    render: () => (
        <p style={{ fontSize: 16, color: 'var(--textColor)' }}>
            Hover on the{' '}
            <Tooltip content="This is a helpful hint 💡" position="top">
                <span style={{
                    textDecoration: 'underline dotted',
                    textUnderlineOffset: 4,
                    color: 'var(--primaryColor)',
                    cursor: 'help',
                    fontWeight: 600,
                }}>
                    underlined word
                </span>
            </Tooltip>
            {' '}to see a tooltip.
        </p>
    ),
};

/* ── Wrap an icon ──────────────────────────────────────── */
export const OnIcon: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Tooltip content="Get help" position="bottom">
                <HelpCircle size={24} style={{ color: 'var(--labelColor)', cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip content="Notifications" position="bottom">
                <Bell size={24} style={{ color: 'var(--labelColor)', cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip content="Favorites" position="bottom">
                <Star size={24} style={{ color: 'var(--primaryColor)', cursor: 'pointer' }} />
            </Tooltip>
        </div>
    ),
};

/* ── Wrap icon buttons ─────────────────────────────────── */
export const OnIconButtons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Tooltip content="App info">
                <Button iconOnly variant="secondary" leftIcon={<Info size={18} />} />
            </Tooltip>
            <Tooltip content="Settings" position="right">
                <Button iconOnly variant="secondary" leftIcon={<Settings size={18} />} />
            </Tooltip>
            <Tooltip content="Download file" position="bottom">
                <Button iconOnly variant="primary" leftIcon={<Download size={18} />} />
            </Tooltip>
            <Tooltip content="Delete permanently" position="left">
                <Button iconOnly variant="danger" rounded="full" leftIcon={<Trash2 size={18} />} />
            </Tooltip>
        </div>
    ),
};

/* ── Wrap any div / card ───────────────────────────────── */
export const OnCustomElement: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 40 }}>
            <Tooltip content="This is the user's avatar" position="bottom">
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--primaryColor)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 18,
                    cursor: 'pointer',
                }}>
                    N
                </div>
            </Tooltip>

            <Tooltip content="Click to view details" position="top">
                <div style={{
                    padding: '12px 20px',
                    background: 'var(--primaryContainercolor)',
                    border: '1px solid var(--borderColor)',
                    borderRadius: 12,
                    color: 'var(--textColor)',
                    fontWeight: 500,
                    cursor: 'pointer',
                }}>
                    Hover this card
                </div>
            </Tooltip>

            <Tooltip content="Status: Active ✅" position="right">
                <div style={{
                    padding: '4px 12px',
                    background: '#dcfce7',
                    color: '#166534',
                    borderRadius: 9999,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'default',
                }}>
                    Active
                </div>
            </Tooltip>
        </div>
    ),
};

/* ── With delay ────────────────────────────────────────── */
export const WithDelay: Story = {
    args: {
        content: 'I appear after 500ms ⏱️',
        position: 'top',
        delay: 500,
        children: <Button variant="secondary">Hover & Wait</Button>,
    },
};

/* ── Rich content inside tooltip ───────────────────────── */
export const RichContent: Story = {
    render: () => (
        <div style={{ padding: 40 }}>
            <Tooltip
                position="right"
                content={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <span style={{ fontWeight: 700 }}>Pro Feature ⚡</span>
                        <span style={{ opacity: 0.8, fontSize: 12 }}>Upgrade to unlock this</span>
                    </div>
                }
            >
                <Button variant="outline" leftIcon={<Star size={16} />}>
                    Premium Feature
                </Button>
            </Tooltip>
        </div>
    ),
};
