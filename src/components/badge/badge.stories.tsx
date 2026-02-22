import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Mail, Bell } from 'lucide-react';
import { Box } from '../layout';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Badge> = {
    args: {
        badgeContent: 'New',
        pill: false,
    },
};

export const IndicatorDots: StoryObj<typeof Badge> = {
    render: () => (
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {/* Square with dot */}
            <Badge dot size="md" variant="danger">
                <Box width={40} height={40} bg="#93c5fd" radius="4px" />
            </Badge>

            <Badge dot size="sm" variant="danger" position="top-right" offset={[2, 2]}>
                <Box width={40} height={40} bg="#93c5fd" radius="4px" />
            </Badge>

            {/* Circle with dot */}
            <Badge dot size="md" variant="danger">
                <Box width={40} height={40} bg="#93c5fd" radius="50%" />
            </Badge>

            <Badge dot size="sm" variant="danger">
                <Box width={40} height={40} bg="#93c5fd" radius="50%" />
            </Badge>
        </div>
    ),
};

export const IndicatorCounts: StoryObj<typeof Badge> = {
    render: () => (
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
            <Badge badgeContent={99} variant="danger">
                <Mail size={32} />
            </Badge>

            <Badge badgeContent={100} maxCount={99} variant="danger">
                <Mail size={32} />
            </Badge>

            <Badge badgeContent={1000} maxCount={999} variant="danger">
                <Mail size={32} />
            </Badge>
        </div>
    ),
};

export const ZeroBadge: StoryObj<typeof Badge> = {
    render: () => (
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {/* Default hides zero */}
            <Badge badgeContent={0}>
                <Mail size={32} />
            </Badge>

            {/* showZero={true} */}
            <Badge badgeContent={0} showZero variant="danger">
                <Mail size={32} />
            </Badge>
        </div>
    ),
};

export const Variants: StoryObj<typeof Badge> = {
    render: () => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Badge badgeContent="Primary" variant="primary" />
            <Badge badgeContent="Secondary" variant="secondary" />
            <Badge badgeContent="Success" variant="success" />
            <Badge badgeContent="Danger" variant="danger" />
            <Badge badgeContent="Warning" variant="warning" />
            <Badge badgeContent="Info" variant="info" />
            <Badge badgeContent="Outline" variant="outline" />
        </div>
    ),
};

export const Pulsing: StoryObj<typeof Badge> = {
    render: () => (
        <div style={{ display: 'flex', gap: '40px' }}>
            <Badge dot pulse variant="danger">
                <Bell size={24} />
            </Badge>

            <Badge badgeContent="Live" pulse variant="danger">
                <Box p="10px" border="1px solid #ddd" radius="8px">Live Stream</Box>
            </Badge>
        </div>
    ),
};
