import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './rating';
import type { RatingProps } from './rating.types';

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

const RatingDemo = (props: RatingProps) => {
    const [value, setValue] = useState(props.value ?? 3);
    return <Rating {...props} value={value} onChange={setValue} />;
};

export const Default: Story = {
    render: (args: RatingProps) => <RatingDemo {...args} />,
    args: { max: 5, size: 24 },
};

export const Readonly: Story = {
    args: { value: 4, max: 5, readOnly: true, size: 24 },
};

export const LargeStars: Story = {
    render: (args: RatingProps) => <RatingDemo {...args} />,
    args: { max: 5, size: 36 },
};

export const TenScale: Story = {
    render: (args: RatingProps) => <RatingDemo {...args} />,
    args: { max: 10, size: 20 },
};
