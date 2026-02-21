import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileDropzone } from './file-dropzone';

const meta: Meta<typeof FileDropzone> = {
    title: 'Components/FileDropzone',
    component: FileDropzone,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { label: 'Upload Files', multiple: true, accept: '*' },
};

export const ImagesOnly: Story = {
    args: { label: 'Upload Images', multiple: true, accept: '.jpg,.jpeg,.png,.webp' },
};

export const SingleFile: Story = {
    args: { label: 'Upload Document', multiple: false, accept: '.pdf,.doc,.docx' },
};
