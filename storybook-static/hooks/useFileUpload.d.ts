import { UploadedFile } from '../components/media-uploader/media-uploader.types';
export interface UseFileUploadOptions {
    multiple?: boolean;
    maxSize?: number;
    onFilesAdded?: (files: UploadedFile[]) => void;
    onFileRemoved?: (id: string) => void;
    simulateProgress?: boolean;
}
export declare const useFileUpload: (options?: UseFileUploadOptions) => {
    files: UploadedFile[];
    processFiles: (newFiles: File[]) => void;
    removeFile: (id: string) => void;
    updateFileState: (id: string, updates: Partial<UploadedFile>) => void;
    clearFiles: () => void;
    setFiles: import('../../node_modules/react').Dispatch<import('../../node_modules/react').SetStateAction<UploadedFile[]>>;
};
