import type { Meta, StoryObj } from '@storybook/react';
import { Row, Col, Box } from './index';

const meta: Meta = {
    title: 'Layout/Grid',
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;

export const PremiumGrid: StoryObj = {
    render: () => (
        <Row gap="24px">
            <Col span={4}>
                <Box
                    bg="linear-gradient(135deg, #fa8029 0%, #ffb347 100%)"
                    p="24px"
                    radius="20px"
                    color="white"
                    shadow="xl"
                    hoverBg="linear-gradient(135deg, #e67320 0%, #fa8029 100%)"
                    cursor="pointer"
                    transition="transform 0.3s ease, box-shadow 0.3s ease"
                    style={{ transform: 'translateY(0px)' }}
                    // @ts-ignore
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                    // @ts-ignore
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                >
                    <h3 style={{ margin: 0 }}>Premium Card</h3>
                    <p style={{ opacity: 0.9, fontSize: '14px' }}>Hover to see the elevation effect and gradient shift.</p>
                </Box>
            </Col>
            <Col span={4}>
                <Box
                    bg="rgba(255, 255, 255, 0.7)"
                    blur="12px"
                    p="24px"
                    radius="20px"
                    border="1px solid rgba(255, 255, 255, 0.3)"
                    shadow="lg"
                    hoverBg="rgba(255, 255, 255, 0.9)"
                >
                    <h3 style={{ margin: 0, color: '#333' }}>Glassmorphism</h3>
                    <p style={{ color: '#666', fontSize: '14px' }}>Frosted glass effect with backdrop blur and subtle borders.</p>
                </Box>
            </Col>
            <Col span={4}>
                <Box
                    bg="#1a1a1a"
                    p="24px"
                    radius="20px"
                    color="#ffc107"
                    shadow="2xl"
                    border="1px solid #333"
                >
                    <h3 style={{ margin: 0 }}>Dark Mode</h3>
                    <p style={{ color: '#999', fontSize: '14px' }}>Sleek dark container with high-contrast accent colors.</p>
                </Box>
            </Col>
        </Row>
    ),
};

export const JustificationAndAlignment: StoryObj = {
    render: () => (
        <Box display="flex" flexDirection="column" gap="40px">
            <Box>
                <h4 style={{ marginBottom: '16px', color: '#64748b' }}>Space Between & Centered Items</h4>
                <Row justify="between" align="center" bg="#f1f5f9" p="16px" radius="16px">
                    <Box bg="#fa8029" px="20px" py="10px" radius="10px" color="white" shadow="sm">Logo</Box>
                    <Row gap="12px" width="auto">
                        <Box cursor="pointer" hoverBg="#e2e8f0" px="12px" py="8px" radius="8px">Home</Box>
                        <Box cursor="pointer" hoverBg="#e2e8f0" px="12px" py="8px" radius="8px">Services</Box>
                        <Box cursor="pointer" hoverBg="#fa8029" px="16px" py="8px" radius="8px" bg="#ffc107" color="black" shadow="sm">Contact</Box>
                    </Row>
                </Row>
            </Box>

            <Box>
                <h4 style={{ marginBottom: '16px', color: '#64748b' }}>Grid Wrap (Responsive)</h4>
                <Row wrap="wrap" gap="16px">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <Col key={i} span={4}>
                            <Box bg="white" border="1px solid #e2e8f0" p="20px" radius="12px" shadow="xs">
                                Item {i}
                            </Box>
                        </Col>
                    ))}
                </Row>
            </Box>
        </Box>
    ),
};

export const AdvancedBoxShorthand: StoryObj = {
    render: () => (
        <Row justify="center" p="60px" bg="#fafafa">
            <Box
                width="400px"
                p="40px"
                bg="white"
                radius="30px"
                shadow="2xl"
                position="relative"
                overflow="hidden"
            >
                {/* Decorative blob */}
                <Box
                    position="absolute"
                    width="150px"
                    height="150px"
                    bg="#ffc107"
                    opacity={0.1}
                    radius="full"
                    style={{ top: '-50px', right: '-50px', borderRadius: '50%' }}
                />

                <h2 style={{ margin: 0, color: '#1f2937', position: 'relative' }}>Interactive Box</h2>
                <p style={{ color: '#6b7280', lineHeight: 1.6, position: 'relative' }}>
                    Box now supports <b>shadow levels</b> (xs to 2xl), <b>blur</b>, <b>gradients</b>,
                    and <b>shorthand hover</b> effects for rapid UI development.
                </p>

                <Box
                    mt="24px"
                    p="16px"
                    bg="#fa8029"
                    color="white"
                    radius="12px"
                    cursor="pointer"
                    hoverBg="#e67320"
                    shadow="lg"
                    display="inline-block"
                >
                    Learn More
                </Box>
            </Box>
        </Row>
    ),
};
