import { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './rating';
declare const meta: Meta<typeof Rating>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Readonly: Story;
export declare const LargeStars: Story;
export declare const TenScale: Story;
