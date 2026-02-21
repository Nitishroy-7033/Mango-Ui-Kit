import type { Meta, StoryObj } from '@storybook/react-vite';
import { MediaUploader } from './media-uploader';

const meta: Meta<typeof MediaUploader> = {
    title: 'Components/MediaUploader',
    component: MediaUploader,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MediaUploader>;

export const Default: Story = {
    args: {
        label: 'Upload Files',
        maxSize: 5,
        multiple: true,
    },
};

export const AvatarMode: Story = {
    args: {
        trigger: 'avatar',
        accept: 'image/*',
        multiple: false,
        label: 'Change Photo',
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <MediaUploader {...args} />
            <p style={{ fontSize: '14px', color: 'var(--labelSecondaryColor)' }}>Click to update profile photo</p>
        </div>
    )
};

export const GridGalleryLayout: Story = {
    args: {
        label: 'Add Photos',
        trigger: 'card',
        layout: 'grid',
        multiple: true,
        files: [
            {
                id: '1',
                name: 'beach_vacation.jpg',
                status: 'success',
                thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop',
            },
            {
                id: '2',
                name: 'mountain_hike.jpg',
                status: 'success',
                thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=200&auto=format&fit=crop',
            }
        ]
    }
};

export const MiniTriggers: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>Link Style</p>
                <MediaUploader trigger="link" label="Attach document" accept=".pdf" />
            </div>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>Icon Only (Small Space)</p>
                <MediaUploader trigger="icon-only" />
            </div>
        </div>
    )
};

export const CustomUIReference: Story = {
    args: {
        label: 'Upload',
        trigger: 'button',
        files: [
            {
                id: '1',
                name: 'xxx.png',
                status: 'uploading',
                progress: 45,
            },
            {
                id: '2',
                name: 'yyy.png',
                status: 'success',
                thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
                progress: 100,
            },
            {
                id: '3',
                name: 'zzz.png',
                status: 'error',
                error: 'File format not supported',
                progress: 0,
            }
        ]
    }
};

export const Constraints: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '500px' }}>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>Strict Size (Max 1MB)</p>
                <MediaUploader maxSize={1} label="Upload Small File" />
            </div>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>Images Only</p>
                <MediaUploader accept="image/*" label="Choose Photos" trigger="dropzone" />
            </div>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>Single PDF Only</p>
                <MediaUploader accept=".pdf" multiple={false} label="Upload Agreement" />
            </div>
        </div>
    )
};
