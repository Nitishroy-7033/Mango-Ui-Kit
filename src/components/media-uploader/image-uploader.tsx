import React, { useRef } from 'react';
import { Camera, Plus, Trash2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../button';
import { Spinner } from '../spinner';
import { useFileUpload } from '../../hooks/useFileUpload';
import type { ImageUploaderProps } from './specialized.types';
import './specialized.css';

export const ImageUploader: React.FC<ImageUploaderProps> = ({
    multiple = true,
    maxSize = 5,
    variant = 'button',
    label = 'Upload Image',
    aspectRatio = 'auto',
    onFilesAdded,
    onFileRemoved,
    disabled = false,
    className = '',
}) => {
    const { files, processFiles, removeFile } = useFileUpload({ multiple, maxSize, onFilesAdded, onFileRemoved });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) processFiles(Array.from(e.target.files));
        e.target.value = '';
    };

    const triggerClick = () => !disabled && fileInputRef.current?.click();

    return (
        <div className={cn('mango-image-uploader', `is-${variant}`, className)}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple={multiple}
                hidden
            />

            {variant === 'avatar' ? (
                <div className={cn('avatar-trigger', disabled && 'is-disabled')} onClick={triggerClick}>
                    {files.length > 0 && files[files.length - 1].thumbnail ? (
                        <img src={files[files.length - 1].thumbnail} alt="avatar" />
                    ) : (
                        <Camera size={24} />
                    )}
                    <div className="overlay"><Plus size={16} /></div>
                </div>
            ) : (
                <div className="uploader-controls">
                    <Button
                        variant="primary"
                        onClick={triggerClick}
                        disabled={disabled}
                        icon={<Plus size={18} />}
                    >
                        {label}
                    </Button>
                </div>
            )}

            {files.length > 0 && variant !== 'avatar' && (
                <div className={cn('image-preview-grid', `ratio-${aspectRatio.replace('/', '-')}`)}>
                    {files.map((file) => (
                        <div key={file.id} className={cn('image-preview-item', `status-${file.status}`)}>
                            {file.status === 'uploading' ? (
                                <div className="loading-state">
                                    <Spinner size={24} />
                                    <span>{file.progress}%</span>
                                </div>
                            ) : (
                                <>
                                    <img src={file.thumbnail || ''} alt={file.name} />
                                    <button className="remove-btn" onClick={() => removeFile(file.id)}>
                                        <Trash2 size={16} />
                                    </button>
                                    {file.status === 'error' && (
                                        <div className="error-overlay" title={file.error}>!</div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
