import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar, CircularProgress } from './progress-bar';
import { useState, useEffect } from 'react';

const meta: Meta<typeof ProgressBar> = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/* ── Live animated counter ── */
const useAnimatedProgress = (target: number, delay = 0) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setVal(v => {
                    if (v >= target) { clearInterval(interval); return target; }
                    return Math.min(v + 1, target);
                });
            }, 18);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timer);
    }, [target]);
    return val;
};

/* ══════════════════════════════════════════════════════
   LINEAR VARIANTS
   ══════════════════════════════════════════════════════ */

export const AllLinearVariants: Story = {
    render: () => {
        const p = useAnimatedProgress(72);
        const buf = Math.min(p + 15, 100);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '600px' }}>
                <ProgressBar label="Linear (Default)" progress={p} showPercentage size="md" />
                <ProgressBar label="Striped (Animated)" progress={p} variant="striped" size="md" showPercentage />
                <ProgressBar label="Animated Shimmer" progress={p} animated size="md" showPercentage />
                <ProgressBar label="Indeterminate" variant="indeterminate" size="sm" />
                <ProgressBar label="Gradient (Orange → Pink)" progress={p} variant="gradient" gradient={['#fa8029', '#f43f5e']} size="md" showPercentage />
                <ProgressBar label="Gradient (Blue → Violet)" progress={p} variant="gradient" gradient={['#3b82f6', '#8b5cf6']} size="md" showPercentage />
                <ProgressBar label="Glass Effect" progress={p} variant="glass" size="lg" showPercentage />
                <ProgressBar label="Neon Glow" progress={p} variant="neon" size="md" customColor="#fa8029" showPercentage />
                <ProgressBar label={`Buffer (Loading… ${p}% of ${buf}%)`} progress={p} buffer={buf} variant="buffer" size="md" />
            </div>
        );
    },
};

export const SemanticColors: Story = {
    render: () => {
        const p = useAnimatedProgress(68);
        const colors = ['primary', 'success', 'warning', 'error', 'info'] as const;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
                {colors.map(c => (
                    <ProgressBar key={c} label={c.charAt(0).toUpperCase() + c.slice(1)} progress={p} color={c} showPercentage size="md" />
                ))}
            </div>
        );
    },
};

export const Sizes: Story = {
    render: () => {
        const p = useAnimatedProgress(60);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
                <ProgressBar label="XS (3px)" progress={p} size="xs" />
                <ProgressBar label="SM (6px)" progress={p} size="sm" />
                <ProgressBar label="MD (10px)" progress={p} size="md" />
                <ProgressBar label="LG (18px) — label inside" progress={p} size="lg" labelInside />
                <ProgressBar label="XL (30px) — label inside" progress={p} size="xl" labelInside variant="gradient" gradient={['#fa8029', '#f43f5e']} />
            </div>
        );
    },
};

export const Stepped: Story = {
    render: () => {
        const [p, setP] = useState(40);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
                <div>
                    <label style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: 8, display: 'block' }}>
                        Progress: {p}%
                    </label>
                    <input type="range" min={0} max={100} value={p} onChange={e => setP(+e.target.value)} style={{ width: '100%', marginBottom: '16px' }} />
                    <ProgressBar label="5 Steps" progress={p} variant="stepped" steps={5} size="md" showPercentage />
                </div>
                <ProgressBar label="8 Steps (Success)" progress={p} variant="stepped" steps={8} color="success" size="sm" />
                <ProgressBar label="10 Steps (Gradient customColor)" progress={p} variant="stepped" steps={10} customColor="#8b5cf6" size="lg" />
            </div>
        );
    },
};

export const Stacked: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '560px' }}>
            <ProgressBar
                label="Storage Usage"
                variant="stacked"
                size="lg"
                rounded="md"
                segments={[
                    { value: 35, color: '#fa8029', label: 'Documents' },
                    { value: 25, color: '#3b82f6', label: 'Media' },
                    { value: 20, color: '#22c55e', label: 'Apps' },
                    { value: 10, color: '#8b5cf6', label: 'Other' },
                ]}
            />
            <ProgressBar
                label="Team Contribution"
                variant="stacked"
                size="md"
                rounded="full"
                segments={[
                    { value: 45, color: '#f43f5e', label: 'Alice' },
                    { value: 30, color: '#0ea5e9', label: 'Bob' },
                    { value: 25, color: '#eab308', label: 'Carol' },
                ]}
            />
        </div>
    ),
};

/* ══════════════════════════════════════════════════════
   CIRCULAR
   ══════════════════════════════════════════════════════ */

export const Circular: StoryObj<typeof CircularProgress> = {
    render: () => {
        const p = useAnimatedProgress(76);
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress progress={p} showPercentage size={100} />
                    <p style={{ marginTop: 8, fontSize: '0.78rem', color: 'var(--labelSecondaryColor)' }}>Default</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress progress={p} color="success" showPercentage size={100} />
                    <p style={{ marginTop: 8, fontSize: '0.78rem', color: 'var(--labelSecondaryColor)' }}>Success</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress progress={p} color="error" showPercentage size={100} />
                    <p style={{ marginTop: 8, fontSize: '0.78rem', color: 'var(--labelSecondaryColor)' }}>Error</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress progress={p} gradient={['#fa8029', '#f43f5e']} showPercentage size={100} />
                    <p style={{ marginTop: 8, fontSize: '0.78rem', color: 'var(--labelSecondaryColor)' }}>Gradient</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress indeterminate size={80} />
                    <p style={{ marginTop: 8, fontSize: '0.78rem', color: 'var(--labelSecondaryColor)' }}>Indeterminate</p>
                </div>
            </div>
        );
    },
};

export const CircularSizes: StoryObj<typeof CircularProgress> = {
    render: () => {
        const p = useAnimatedProgress(65);
        return (
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                <CircularProgress progress={p} size={48} strokeWidth={5} showPercentage />
                <CircularProgress progress={p} size={72} strokeWidth={6} showPercentage />
                <CircularProgress progress={p} size={96} strokeWidth={8} showPercentage />
                <CircularProgress progress={p} size={130} strokeWidth={10} showPercentage label="Storage" />
                <CircularProgress progress={p} size={160} strokeWidth={12} showPercentage label="CPU Usage" gradient={['#3b82f6', '#8b5cf6']} />
            </div>
        );
    },
};

export const RealWorldDashboard: Story = {
    render: () => {
        const cpu = useAnimatedProgress(72, 0);
        const mem = useAnimatedProgress(55, 200);
        const disk = useAnimatedProgress(88, 400);
        const net = useAnimatedProgress(34, 600);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '580px' }}>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>📊 System Resources</h3>
                <ProgressBar label="CPU Usage" progress={cpu} showPercentage animated size="md"
                    color={cpu > 80 ? 'error' : cpu > 60 ? 'warning' : 'success'} />
                <ProgressBar label="Memory" progress={mem} showPercentage variant="striped" size="md" color="info" />
                <ProgressBar label="Disk" progress={disk} showPercentage labelInside size="lg"
                    gradient={['#ef4444', '#dc2626']} />
                <ProgressBar label="Network" progress={net} variant="neon" showPercentage size="sm" />
                <ProgressBar label="Loading resources…" variant="indeterminate" size="xs" />
                <ProgressBar
                    label="Storage Breakdown"
                    variant="stacked" size="md" rounded="md"
                    segments={[
                        { value: 40, color: '#fa8029', label: 'System' },
                        { value: 25, color: '#3b82f6', label: 'Media' },
                        { value: 23, color: '#22c55e', label: 'Docs' },
                    ]}
                />
            </div>
        );
    },
};
