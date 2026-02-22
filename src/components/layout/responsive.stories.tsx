import type { Meta, StoryObj } from '@storybook/react';
import { Row, Col, Box } from './index';

const meta: Meta = {
    title: 'Layout/Responsive',
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;

export const ResponsiveGrid: StoryObj = {
    render: () => (
        <Box>
            <h3 style={{ marginBottom: '24px' }}>Resize your browser to see the effect</h3>
            <Row gap="16px" wrap="wrap">
                <Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Box bg="#fa8029" p="20px" radius="12px" color="white" align="center">
                        xs: 12, sm: 6, md: 4, lg: 3
                    </Box>
                </Col>
                <Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Box bg="#fb923c" p="20px" radius="12px" color="white" align="center">
                        Item 2
                    </Box>
                </Col>
                <Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Box bg="#fdba74" p="20px" radius="12px" color="white" align="center">
                        Item 3
                    </Box>
                </Col>
                <Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Box bg="#fed7aa" p="20px" radius="12px" color="white" align="center">
                        Item 4
                    </Box>
                </Col>
            </Row>

            <Row mt="40px" gap="16px" wrap="wrap">
                <Col span={{ xs: 12, md: 8 }}>
                    <Box bg="#e2e8f0" p="30px" radius="12px" align="center" height="150px" display="flex" justify="center">
                        Main Content (xs: 12, md: 8)
                    </Box>
                </Col>
                <Col span={{ xs: 12, md: 4 }}>
                    <Box bg="#cbd5e1" p="30px" radius="12px" align="center" height="150px" display="flex" justify="center">
                        Sidebar (xs: 12, md: 4)
                    </Box>
                </Col>
            </Row>
        </Box>
    ),
};
