import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';
import { useState } from 'react';
import { Sun, Moon, Wifi, WifiOff, Bell, BellOff, Eye, EyeOff, Zap } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const Controlled = (args: any) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
    render: (args) => <Controlled {...args} />,
    args: { label: 'Toggle me', variant: 'solid', size: 'md' },
};

export const AllVariants: Story = {
    render: () => {
        const variants = [
            { name: 'Solid (Default)', key: 'solid' },
            { name: 'iOS Style', key: 'ios' },
            { name: 'Modern (Outline)', key: 'modern' },
            { name: 'Glassmorphism', key: 'glass' },
            { name: 'Square', key: 'square' },
            { name: 'Pill-Slim', key: 'pill-slim' },
            { name: 'Flat', key: 'flat' },
            { name: 'Neon Glow', key: 'neon' },
            { name: 'Bounce Spring', key: 'bounce' },
        ] as const;

        return (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 40px', maxWidth: '700px' }}>
                {variants.map(({ name, key }) => {
                    const [on, setOn] = useState(false);
                    return (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--secondaryColor)', borderRadius: '12px', border: '1px solid var(--borderColor)' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--textColor)' }}>{name}</span>
                            <Toggle variant={key} checked={on} onChange={setOn} />
                        </div>
                    );
                })}
            </div>
        );
    },
};

export const Sizes: Story = {
    render: () => {
        const [sm, setSm] = useState(true);
        const [md, setMd] = useState(true);
        const [lg, setLg] = useState(true);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Toggle size="sm" checked={sm} onChange={setSm} label="Small" />
                <Toggle size="md" checked={md} onChange={setMd} label="Medium" />
                <Toggle size="lg" checked={lg} onChange={setLg} label="Large" />
            </div>
        );
    },
};

export const WithIcons: Story = {
    render: () => {
        const [dark, setDark] = useState(false);
        const [wifi, setWifi] = useState(true);
        const [bell, setBell] = useState(false);
        const [vis, setVis] = useState(true);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Toggle checked={dark} onChange={setDark} label="Dark Mode" variant="solid"
                    activeIcon={<Moon size={10} color="#fff" />} inactiveIcon={<Sun size={10} color="#fa8029" />} />
                <Toggle checked={wifi} onChange={setWifi} label="Wi-Fi" variant="ios"
                    activeIcon={<Wifi size={10} color="#fff" />} inactiveIcon={<WifiOff size={10} color="#999" />} />
                <Toggle checked={bell} onChange={setBell} label="Notifications" variant="neon"
                    activeIcon={<Bell size={10} color="#fa8029" />} inactiveIcon={<BellOff size={10} color="#999" />} />
                <Toggle checked={vis} onChange={setVis} label="Preview" variant="square"
                    activeIcon={<Eye size={10} color="#fa8029" />} inactiveIcon={<EyeOff size={10} color="#999" />} />
            </div>
        );
    },
};

export const WithLabels: Story = {
    render: () => {
        const [on, setOn] = useState(false);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Toggle checked={on} onChange={setOn} showLabels size="md" label="Show ON/OFF label" />
                <Toggle checked={!on} onChange={(v) => setOn(!v)} showLabels variant="ios" label="iOS with labels" />
            </div>
        );
    },
};

export const WithDescription: Story = {
    render: () => {
        const [v1, sv1] = useState(true);
        const [v2, sv2] = useState(false);
        const [v3, sv3] = useState(true);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
                <Toggle checked={v1} onChange={sv1} label="Notifications" description="Receive email updates and alerts" />
                <Toggle checked={v2} onChange={sv2} label="Auto-save" description="Automatically save changes every 30 seconds" variant="ios" />
                <Toggle checked={v3} onChange={sv3} label="Analytics" description="Share anonymous usage data to improve the product" variant="neon" />
            </div>
        );
    },
};

export const CustomColors: Story = {
    render: () => {
        const colors = ['#8b5cf6', '#10b981', '#f43f5e', '#0ea5e9'];
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {colors.map((c) => {
                    const [on, setOn] = useState(true);
                    return <Toggle key={c} checked={on} onChange={setOn} color={c} label={c} variant="bounce" />;
                })}
            </div>
        );
    },
};

export const RealWorldSettings: Story = {
    render: () => {
        const [settings, setSettings] = useState({
            darkMode: false,
            pushNotifs: true,
            emailDigest: false,
            autoUpdate: true,
            betaFeatures: false,
            analytics: true,
        });

        const toggle = (key: keyof typeof settings) =>
            setSettings(prev => ({ ...prev, [key]: !prev[key] }));

        return (
            <div style={{ maxWidth: '460px', border: '1px solid var(--borderColor)', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--borderColor)', fontWeight: 700, fontSize: '1rem' }}>
                    ⚙️ App Preferences
                </div>
                {[
                    { key: 'darkMode', label: 'Dark Mode', desc: 'Switch to dark theme', icon: <Moon size={14} /> },
                    { key: 'pushNotifs', label: 'Push Notifications', desc: 'Get real-time alerts', icon: <Bell size={14} /> },
                    { key: 'emailDigest', label: 'Email Digest', desc: 'Weekly summary emails', icon: <Zap size={14} /> },
                    { key: 'autoUpdate', label: 'Auto Update', desc: 'Install updates silently', icon: <Zap size={14} /> },
                    { key: 'betaFeatures', label: 'Beta Features', desc: 'Access preview features', icon: <Zap size={14} /> },
                    { key: 'analytics', label: 'Share Analytics', desc: 'Help us improve', icon: <Eye size={14} /> },
                ].map(({ key, label, desc }, i, arr) => (
                    <div
                        key={key}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px 20px',
                            borderBottom: i < arr.length - 1 ? '1px solid var(--borderColor)' : 'none',
                        }}
                    >
                        <Toggle
                            labelPosition="right"
                            checked={settings[key as keyof typeof settings]}
                            onChange={() => toggle(key as keyof typeof settings)}
                            label={label}
                            description={desc}
                            variant="solid"
                            size="sm"
                        />
                    </div>
                ))}
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Toggle checked={false} onChange={() => { }} disabled label="Disabled (off)" />
            <Toggle checked={true} onChange={() => { }} disabled label="Disabled (on)" />
        </div>
    ),
};
