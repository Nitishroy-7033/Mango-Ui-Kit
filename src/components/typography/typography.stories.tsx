import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';
import { Box } from '../layout';

const meta: Meta<typeof Typography> = {
    title: 'Components/Typography',
    component: Typography,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
        </Box>
    )
};

export const BodyText: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="body-lg">Body Large: The quick brown fox jumps over the lazy dog.</Typography>
            <Typography variant="body-md">Body Medium: The quick brown fox jumps over the lazy dog.</Typography>
            <Typography variant="body-sm">Body Small: The quick brown fox jumps over the lazy dog.</Typography>
        </Box>
    )
};

export const Weights: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap="12px">
            <Typography weight="thin">Thin Weight (100)</Typography>
            <Typography weight="light">Light Weight (300)</Typography>
            <Typography weight="normal">Normal Weight (400)</Typography>
            <Typography weight="medium">Medium Weight (500)</Typography>
            <Typography weight="semibold">Semibold Weight (600)</Typography>
            <Typography weight="bold">Bold Weight (700)</Typography>
            <Typography weight="black">Black Weight (900)</Typography>
        </Box>
    )
};

export const Truncation: Story = {
    render: () => (
        <Box width="300px" p="20px" bg="#f8f9fa" radius="12px">
            <Typography variant="h5" truncate>
                This is a very long heading that will be truncated with an ellipsis.
            </Typography>
            <Typography variant="body-sm" lineClamp={3} style={{ marginTop: '12px' }}>
                This is a longer paragraph that uses the line-clamp utility. It will only show exactly three lines of text before adding an ellipsis at the end, which is very useful for card descriptions and previews in dashboard layouts.
            </Typography>
        </Box>
    )
};

export const ColorAndAlignment: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap="24px">
            <Typography align="center" variant="h3">Centered Heading</Typography>
            <Typography align="right" color="var(--primaryColor)">Right aligned primary color</Typography>
            <Typography variant="label">Form Label Style</Typography>
            <Typography variant="caption">Small caption text for metadata or hints.</Typography>
        </Box>
    )
};
