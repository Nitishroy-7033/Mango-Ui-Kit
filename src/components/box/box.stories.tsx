import type { Meta, StoryObj } from '@storybook/react';
import { MangoBox } from './box';
import { Row, Col } from '../layout';

const meta: Meta<typeof MangoBox> = {
    title: 'Components/Box',
    component: MangoBox,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangoBox>;

export const ShadowTypes: Story = {
    render: () => (
        <Row gap="24px" wrap="wrap">
            {[1, 2, 3, 4, 5].map(i => (
                <Col key={i} span={4}>
                    <MangoBox variant="elevated" intensity={i as 1 | 2 | 3 | 4 | 5} p="30px">
                        <h4 style={{ margin: 0 }}>Elevation {i}</h4>
                        <p style={{ fontSize: '13px', color: '#666' }}>Shadow intensity level {i}</p>
                    </MangoBox>
                </Col>
            ))}
        </Row>
    )
};

export const BorderTypes: Story = {
    render: () => (
        <Row gap="24px" wrap="wrap">
            <Col span={6}>
                <MangoBox variant="dashed" intensity={2} p="30px">
                    <h4>Dashed Border</h4>
                    <p>Perfect for placeholder content or drop zones.</p>
                </MangoBox>
            </Col>
            <Col span={6}>
                <MangoBox variant="outline" intensity={1} p="30px">
                    <h4>Solid Outline</h4>
                    <p>Clean, minimalist border for subtle organization.</p>
                </MangoBox>
            </Col>
        </Row>
    )
};

export const PremiumTypes: Story = {
    render: () => (
        <Row gap="24px">
            <Col span={4}>
                <MangoBox variant="glass" intensity={3} p="30px">
                    <h4 style={{ color: '#1a1a1a' }}>Glassmorphism</h4>
                    <p style={{ color: '#444' }}>Frosted glass effect with backdrop blur.</p>
                </MangoBox>
            </Col>
            <Col span={4}>
                <MangoBox variant="neon" intensity={2} p="30px">
                    <h4>Neon Glow</h4>
                    <p>Cyberpunk-inspired box with glow effect.</p>
                </MangoBox>
            </Col>
            <Col span={4}>
                <MangoBox variant="gradient" p="30px">
                    <h4>Mango Gradient</h4>
                    <p>Vibrant brand-colored gradient background.</p>
                </MangoBox>
            </Col>
        </Row>
    )
};

export const DashboardLayout: Story = {
    render: () => (
        <div style={{ background: '#f1f5f9', padding: '40px', borderRadius: '24px' }}>
            <Row gap="20px">
                <Col span={3}>
                    <MangoBox variant="elevated" intensity={1} p="20px" radius="12px">
                        <span style={{ fontSize: '12px', color: '#64748b' }}>TOTAL SALES</span>
                        <h2 style={{ margin: '4px 0 0' }}>$12,450</h2>
                    </MangoBox>
                </Col>
                <Col span={3}>
                    <MangoBox variant="elevated" intensity={1} p="20px" radius="12px">
                        <span style={{ fontSize: '12px', color: '#64748b' }}>ACTIVE USERS</span>
                        <h2 style={{ margin: '4px 0 0' }}>+1,200</h2>
                    </MangoBox>
                </Col>
                <Col span={6}>
                    <MangoBox variant="gradient" p="20px" radius="12px">
                        <h4 style={{ margin: 0 }}>Premium Plan active</h4>
                        <p style={{ margin: '4px 0 0', fontSize: '12px' }}>Upgrade to unlock advanced analytics</p>
                    </MangoBox>
                </Col>
            </Row>

            <Row gap="20px" mt="20px">
                <Col span={8}>
                    <MangoBox variant="outline" p="40px" height="200px" display="flex" align="center" justify="center">
                        Main Operational Chart Placeholder
                    </MangoBox>
                </Col>
                <Col span={4}>
                    <MangoBox variant="flat" p="20px" height="200px">
                        <h4>Recent Activities</h4>
                        <ul style={{ padding: 0, listStyle: 'none', fontSize: '13px' }}>
                            <li style={{ padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>User John joined</li>
                            <li style={{ padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>Payment received</li>
                            <li style={{ padding: '8px 0' }}>New server deployed</li>
                        </ul>
                    </MangoBox>
                </Col>
            </Row>
        </div>
    )
};
