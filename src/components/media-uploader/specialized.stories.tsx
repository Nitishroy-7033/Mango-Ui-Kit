import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageUploader } from './image-uploader';
import { VideoUploader } from './video-uploader';
import { DocumentUploader } from './document-uploader';

const meta: Meta = {
    title: 'Components/SpecializedUploaders',
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;

export const ImageVariations: StoryObj<typeof ImageUploader> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '600px' }}>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '12px' }}>Profile Avatar Mode</p>
                <ImageUploader variant="avatar" multiple={false} />
            </div>

            <div>
                <p style={{ fontWeight: 700, marginBottom: '12px' }}>Photo Gallery (Grid)</p>
                <ImageUploader label="Add Photos" variant="button" />
            </div>
        </div>
    )
};

export const VideoUploaderStory: StoryObj<typeof VideoUploader> = {
    render: () => (
        <div style={{ maxWidth: '500px' }}>
            <p style={{ fontWeight: 700, marginBottom: '12px' }}>Course Video Upload</p>
            <VideoUploader label="Upload MP4" maxSize={500} />
        </div>
    )
};

export const DocumentUploaderStory: StoryObj<typeof DocumentUploader> = {
    render: () => (
        <div style={{ maxWidth: '500px' }}>
            <p style={{ fontWeight: 700, marginBottom: '12px' }}>Legal Documents (PDF/Zip)</p>
            <DocumentUploader label="Drop Agreements Here" />
        </div>
    )
};
