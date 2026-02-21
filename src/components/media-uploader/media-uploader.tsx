import React, { useRef, useState } from 'react';
import { Upload, Trash2, FileText, Film, Music, File as FileIcon, Image as ImageIcon, AlertCircle, Camera, Plus, PlusCircle, Link as LinkIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../button';
import { Spinner } from '../spinner';
import { ProgressBar } from '../progress-bar';
import type { MediaUploaderProps, UploadedFile } from './media-uploader.types';
import './media-uploader.css';

export const MediaUploader: React.FC<MediaUploaderProps> = ({
    multiple = true,
    maxSize = 10,
    accept = '*',
    onFilesAdded,
    onFileRemoved,
    files: externalFiles,
    trigger = 'button',
    layout = 'list',
    label = 'Upload',
    disabled = false,
    className = '',
    showPreviews = true,
    style,
}) => {
    const [internalFiles, setInternalFiles] = useState<UploadedFile[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const currentFiles = externalFiles || internalFiles;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            processFiles(Array.from(e.target.files));
            e.target.value = '';
        }
    };

    const processFiles = (newFiles: File[]) => {
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

            if (showPreviews && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    updateFileState(id, { thumbnail: e.target?.result as string });
                };
                reader.readAsDataURL(file);
            }

            return uploadedFile;
        });

        const updated = multiple ? [...currentFiles, ...processed] : [processed[0]];

        if (!externalFiles) {
            setInternalFiles(updated);
        }
        onFilesAdded?.(processed);

        processed.forEach(file => {
            if (file.status === 'uploading') {
                simulateUpload(file.id);
            }
        });
    };

    const simulateUpload = (id: string) => {
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
        }, 500);
    };

    const updateFileState = (id: string, updates: Partial<UploadedFile>) => {
        if (externalFiles) return;
        setInternalFiles(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f));
    };

    const removeFile = (id: string) => {
        if (!externalFiles) {
            setInternalFiles(prev => prev.filter(f => f.id !== id));
        }
        onFileRemoved?.(id);
    };

    const getFileIcon = (file: UploadedFile) => {
        if (file.status === 'error') return <AlertCircle className="mango-uploader-icon error" />;
        if (file.type?.startsWith('image/')) return <ImageIcon className="mango-uploader-icon image" />;
        if (file.type?.startsWith('video/')) return <Film className="mango-uploader-icon video" />;
        if (file.type?.startsWith('audio/')) return <Music className="mango-uploader-icon audio" />;
        if (file.type?.includes('pdf')) return <FileText className="mango-uploader-icon pdf" />;
        return <FileIcon className="mango-uploader-icon generic" />;
    };

    const renderTrigger = () => {
        const handleClick = () => !disabled && fileInputRef.current?.click();

        switch (trigger) {
            case 'avatar':
                const firstImage = currentFiles.find(f => f.thumbnail)?.thumbnail;
                return (
                    <div className={cn('mango-uploader-avatar', disabled && 'is-disabled')} onClick={handleClick}>
                        {firstImage ? (
                            <img src={firstImage} alt="Avatar" className="avatar-img" />
                        ) : (
                            <div className="avatar-placeholder">
                                <Camera size={24} />
                            </div>
                        )}
                        <div className="avatar-overlay">
                            <Plus size={16} />
                        </div>
                    </div>
                );
            case 'card':
                return (
                    <div className={cn('mango-uploader-card-trigger', disabled && 'is-disabled')} onClick={handleClick}>
                        <PlusCircle size={32} strokeWidth={1.5} />
                        <span>{label}</span>
                    </div>
                );
            case 'link':
                return (
                    <button className="mango-uploader-link-trigger" onClick={handleClick} disabled={disabled}>
                        <LinkIcon size={16} />
                        <span>{label}</span>
                    </button>
                );
            case 'icon-only':
                return (
                    <Button variant="ghost" size="sm" iconOnly icon={<Upload size={18} />} onClick={handleClick} disabled={disabled} />
                );
            case 'dropzone':
                return (
                    <div className={cn('mango-uploader-dropzone', disabled && 'is-disabled')} onClick={handleClick}>
                        <div className="dropzone-inner">
                            <Upload size={32} className="upload-icon" />
                            <p>{label || 'Drag & Drop files or click to browse'}</p>
                            <span className="limit-hint">Max {maxSize}MB per file</span>
                        </div>
                    </div>
                );
            default:
                return (
                    <Button variant="primary" onClick={handleClick} disabled={disabled} icon={<Upload size={18} />}>
                        {label}
                    </Button>
                );
        }
    };

    const acceptString = Array.isArray(accept) ? accept.join(',') : accept;

    return (
        <div className={cn('mango-media-uploader', className)} style={style}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple={multiple}
                accept={acceptString}
                disabled={disabled}
                className="mango-uploader-input"
                style={{ display: 'none' }}
            />

            <div className="mango-uploader-trigger-wrapper">
                {renderTrigger()}
            </div>

            {currentFiles.length > 0 && trigger !== 'avatar' && (
                <div className={cn('mango-uploader-display', `layout-${layout}`)}>
                    {currentFiles.map((file) => (
                        <div
                            key={file.id}
                            className={cn(
                                'mango-uploader-item',
                                `is-${file.status}`,
                                file.status === 'uploading' && 'is-dashed',
                                layout === 'grid' && 'is-grid-item'
                            )}
                        >
                            <div className="item-main">
                                <div className="item-preview">
                                    {file.status === 'uploading' ? (
                                        <Spinner size={layout === 'grid' ? 24 : 32} variant="circular" style={{ color: 'var(--primaryColor)' }} />
                                    ) : (
                                        file.thumbnail ? (
                                            <img src={file.thumbnail} alt={file.name} className="thumbnail" />
                                        ) : (
                                            getFileIcon(file)
                                        )
                                    )}
                                </div>

                                <div className="item-content">
                                    <div className="item-info">
                                        <span className={cn('item-name', `status-${file.status}`)}>{file.name}</span>
                                        {file.status === 'error' && <span className="item-error">{file.error}</span>}
                                    </div>

                                    {file.status === 'uploading' && (
                                        <div className="item-progress">
                                            <ProgressBar
                                                progress={file.progress}
                                                size="xs"
                                                customColor="var(--primaryColor)"
                                                rounded="full"
                                            />
                                        </div>
                                    )}
                                </div>

                                <button
                                    className="item-remove"
                                    onClick={(e) => { e.stopPropagation(); removeFile(file.id); }}
                                    disabled={disabled}
                                    title="Remove file"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

MediaUploader.displayName = 'MediaUploader';
