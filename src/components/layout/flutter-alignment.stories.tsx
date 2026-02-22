import type { Meta, StoryObj } from '@storybook/react';

import { Row, Column, Box } from './index';

const meta: Meta<typeof Row> = {
    title: 'Layout/Flex (Flutter Style)',
    component: Row,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Item = ({ color, label }: { color: string; label: string }) => (
    <Box
        width={60}
        height={60}
        bg={color}
        radius="8px"
        display="flex"
        align="center"
        justify="center"
        color="white"
        style={{ fontWeight: 'bold' }}
    >
        {label}
    </Box>
);

export const FlutterRow: StoryObj<typeof Row> = {
    render: () => (
        <Column p="40px" gap="40px" bg="#f5f5f5">
            <Box>
                <h3>MainAxisAlignment.spaceBetween</h3>
                <Row mainAxisAlignment="spaceBetween" bg="white" p="20px" radius="12px" border="1px solid #ddd">
                    <Item color="#fa8029" label="1" />
                    <Item color="#3b82f6" label="2" />
                    <Item color="#10b981" label="3" />
                </Row>
            </Box>

            <Box>
                <h3>MainAxisAlignment.center, CrossAxisAlignment.end</h3>
                <Row
                    mainAxisAlignment="center"
                    crossAxisAlignment="end"
                    height="120px"
                    bg="white"
                    p="20px"
                    radius="12px"
                    border="1px solid #ddd"
                    gap="10px"
                >
                    <Item color="#fa8029" label="1" />
                    <Item color="#3b82f6" label="2" />
                    <Item color="#10b981" label="3" />
                </Row>
            </Box>
        </Column>
    ),
};

export const FlutterColumn: StoryObj<typeof Column> = {
    render: () => (
        <Row p="40px" gap="40px" bg="#f5f5f5" height="600px" align="stretch">
            <Box flex={1}>
                <h3>MainAxisAlignment.evenly</h3>
                <Column
                    mainAxisAlignment="evenly"
                    bg="white"
                    p="20px"
                    radius="12px"
                    border="1px solid #ddd"
                    height="400px"
                    crossAxisAlignment="center"
                >
                    <Item color="#fa8029" label="1" />
                    <Item color="#3b82f6" label="2" />
                    <Item color="#10b981" label="3" />
                </Column>
            </Box>

            <Box flex={1}>
                <h3>CrossAxisAlignment.stretch</h3>
                <Column
                    crossAxisAlignment="stretch"
                    bg="white"
                    p="20px"
                    radius="12px"
                    border="1px solid #ddd"
                    gap="10px"
                >
                    <Box bg="#fa8029" height="40px" radius="4px" />
                    <Box bg="#3b82f6" height="40px" radius="4px" />
                    <Box bg="#10b981" height="40px" radius="4px" />
                </Column>
            </Box>
        </Row>
    ),
};
