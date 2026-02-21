import { ReactNode } from '../../../node_modules/react';
import { UploadedFile } from '../media-uploader/media-uploader.types';
export interface BaseUploaderProps {
    multiple?: boolean;
    maxSize?: number;
    onFilesAdded?: (files: UploadedFile[]) => void;
    onFileRemoved?: (id: string) => void;
    label?: ReactNode;
    disabled?: boolean;
    className?: string;
}
export interface ImageUploaderProps extends BaseUploaderProps {
    variant?: 'avatar' | 'grid' | 'button';
    aspectRatio?: '1/1' | '16/9' | '4/3' | 'auto';
}
export interface VideoUploaderProps extends BaseUploaderProps {
    variant?: 'list' | 'compact';
    showDuration?: boolean;
}
export interface DocumentUploaderProps extends BaseUploaderProps {
    allowFormats?: string[];
}
