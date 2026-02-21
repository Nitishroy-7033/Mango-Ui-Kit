import { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from './stat-card';
declare const meta: Meta<typeof StatCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Negative: Story;
export declare const WithDescription: Story;
export declare const Grid: Story;
