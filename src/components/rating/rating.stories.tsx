import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './rating';

const meta: Meta<typeof Rating> = {
    title: 'Components/Rating',
    component: Rating,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: { type: 'range', min: 12, max: 48, step: 4 } },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

const RatingDemo = (args: React.ComponentProps<typeof Rating>) => {
    const [value, setValue] = useState(3);
    return <Rating {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
    render: (args) => <RatingDemo {...args} />,
    args: { max: 5, size: 24 },
};

export const Readonly: Story = {
    args: { value: 4, max: 5, readonly: true, size: 24 },
};

export const LargeStars: Story = {
    render: (args) => <RatingDemo {...args} />,
    args: { max: 5, size: 36 },
};

export const TenScale: Story = {
    render: (args) => <RatingDemo {...args} />,
    args: { max: 10, size: 20 },
};
