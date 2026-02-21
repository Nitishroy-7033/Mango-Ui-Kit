import type { ReactNode } from 'react';

export interface UploadedFile {
    id: string;
    file?: File;
    name: string;
    size?: number;
    type?: string;
    url?: string;
    status: 'uploading' | 'success' | 'error';
    progress?: number;
    error?: string;
    thumbnail?: string;
}

export interface MediaUploaderProps {
    /** Whether to allow multiple file uploads */
    multiple?: boolean;
    /** Maximum file size in MB */
    maxSize?: number;
    /** Allowed file formats (e.g. ['image/*', '.pdf', 'video/*']) */
    accept?: string | string[];
    /** Callback when files are added */
    onFilesAdded?: (files: UploadedFile[]) => void;
    /** Callback when a file is removed */
    onFileRemoved?: (id: string) => void;
    /** Initial list of files */
    files?: UploadedFile[];
    /** Customize the trigger button/area */
    trigger?: 'button' | 'dropzone' | 'avatar' | 'card' | 'link' | 'icon-only' | 'compact';
    /** How to display the uploaded files */
    layout?: 'list' | 'grid' | 'compact';
    /** Custom label for the button/area */
    label?: ReactNode;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Show actual image previews for images */
    showPreviews?: boolean;
    /** Inline styles */
    style?: React.CSSProperties;
}
