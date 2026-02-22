import type { Meta, StoryObj } from '@storybook/react-vite';
import { MediaUploader } from './media-uploader';
import { Button } from '../button';

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
export const Premium: Story = {
    args: {
        trigger: 'dropzone',
        showFileGrid: true,
        files: [
            { id: '1', name: 'chatgpt-clone.ts', status: 'success', size: 1200, type: 'text/typescript' },
            { id: '2', name: 'commercial.mp4', status: 'success', size: 4500000, type: 'video/mp4' },
            { id: '3', name: 'invoice.pdf', status: 'success', size: 250000, type: 'application/pdf' },
            { id: '4', name: 'Example dashboard screenshot.jpg', status: 'uploading', progress: 50, size: 720000, type: 'image/jpeg' },
            { id: '5', name: 'Tech design requirements_2.pdf', status: 'success', progress: 100, size: 720000, type: 'application/pdf' },
            { id: '6', name: 'Tech design requirements.pdf', status: 'error', size: 1000000, type: 'application/pdf', error: 'Upload failed' },
        ]
    },
    render: (args) => (
        <div style={{ padding: '24px', background: '#f9f9f9', minHeight: '600px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <MediaUploader {...args} />
            </div>
        </div>
    )
};

export const AttachmentSection: Story = {
    args: {
        title: 'Attachments',
        trigger: 'dropzone',
        layout: 'compact',
        description: 'Upload up to 2 images up to 5MB each.',
        files: [
            {
                id: '1',
                name: 'ChatGPT Image Feb 21, 2026, 11_06_42 PM.png',
                status: 'success',
                size: 203800,
                thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=100&auto=format&fit=crop',
            }
        ]
    },
    render: (args) => (
        <div data-theme="dark" style={{ padding: '40px', background: '#000', minHeight: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ maxWidth: '500px' }}>
                <MediaUploader {...args} />
                <Button style={{ marginTop: '20px', background: '#e5e7eb', color: '#000' }}>Submit</Button>
            </div>
        </div>
    )
};

export const ChatCompact: Story = {
    args: {
        trigger: 'icon-only',
        layout: 'compact',
        files: [
            {
                id: '1',
                name: 'WhatsApp Image 2026-...',
                status: 'success',
                size: 297500,
                thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
            }
        ]
    },
    render: (args) => (
        <div data-theme="dark" style={{ padding: '40px', background: '#00b7f805', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
                width: '100%',
                maxWidth: '600px',
                background: '#010101',
                border: '1px solid #1f2937',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px'
            }}>
                <MediaUploader {...args} />
                <div style={{ color: '#6b7280', fontSize: '16px' }}>Type your message here...</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', alignItems: 'center' }}>
                    <Button variant="ghost" style={{ color: '#9ca3af' }}>📎</Button>
                    <Button style={{ background: 'var(--primaryColor)', color: '#fff', borderRadius: '8px', width: '40px', height: '40px', padding: '0' }}>↑</Button>
                </div>
            </div>
        </div>
    )
};
