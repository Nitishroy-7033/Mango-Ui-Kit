import { useState, useCallback } from 'react';
import type { UploadedFile } from '../components/media-uploader/media-uploader.types';

export interface UseFileUploadOptions {
    multiple?: boolean;
    maxSize?: number; // In MB
    onFilesAdded?: (files: UploadedFile[]) => void;
    onFileRemoved?: (id: string) => void;
    simulateProgress?: boolean;
}

export const useFileUpload = (options: UseFileUploadOptions = {}) => {
    const {
        multiple = true,
        maxSize = 10,
        onFilesAdded,
        onFileRemoved,
        simulateProgress = true
    } = options;

    const [files, setFiles] = useState<UploadedFile[]>([]);

    const updateFileState = useCallback((id: string, updates: Partial<UploadedFile>) => {
        setFiles(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f));
    }, []);

    const simulateUpload = useCallback((id: string) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 30) + 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                updateFileState(id, { status: 'success', progress: 100 });
            } else {
                updateFileState(id, { progress });
            }
        }, 400);
    }, [updateFileState]);

    const processFiles = useCallback((newFiles: File[]) => {
        const processed: UploadedFile[] = newFiles.map(file => {
            const id = Math.random().toString(36).substr(2, 9);
            const isTooLarge = file.size > maxSize * 1024 * 1024;

            const uploadedFile: UploadedFile = {
                id,
                file,
                name: file.name,
                size: file.size,
                type: file.type,
                status: isTooLarge ? 'error' : 'uploading',
                progress: 0,
                error: isTooLarge ? `File exceeds ${maxSize}MB limit` : undefined,
            };

            // Image Preview Generation
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    updateFileState(id, { thumbnail: e.target?.result as string });
                };
                reader.readAsDataURL(file);
            }

            return uploadedFile;
        });

        const updated = multiple ? [...files, ...processed] : [processed[0]];
        setFiles(updated);
        onFilesAdded?.(processed);

        if (simulateProgress) {
            processed.forEach(file => {
                if (file.status === 'uploading') {
                    simulateUpload(file.id);
                }
            });
        }
    }, [files, maxSize, multiple, onFilesAdded, simulateProgress, simulateUpload, updateFileState]);

    const removeFile = useCallback((id: string) => {
        setFiles(prev => prev.filter(f => f.id !== id));
        onFileRemoved?.(id);
    }, [onFileRemoved]);

    const clearFiles = useCallback(() => {
        setFiles([]);
    }, []);

    return {
        files,
        processFiles,
        removeFile,
        updateFileState,
        clearFiles,
        setFiles
    };
};
