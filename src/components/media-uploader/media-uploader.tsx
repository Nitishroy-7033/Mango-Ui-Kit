import React, { useRef, useState } from 'react';
import {
    Upload, Trash2, File as FileIcon,
    CheckCircle2, XCircle, CloudUpload, FileCode
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../button';
import { ProgressBar } from '../progress-bar';
import type { MediaUploaderProps, UploadedFile } from './media-uploader.types';
import './media-uploader.css';

const PremiumFileIcon: React.FC<{ file: UploadedFile; size?: 'sm' | 'md' }> = ({ file, size = 'md' }) => {
    const ext = file.name.split('.').pop()?.toUpperCase() || 'FILE';

    const getBadgeColor = () => {
        if (file.type?.includes('pdf') || ext === 'PDF') return 'var(--errorColor, #ef4444)';
        if (file.type?.startsWith('image/') || ['JPG', 'PNG', 'JPEG', 'GIF'].includes(ext)) return 'var(--primaryColor, #7c3aed)';
        if (file.type?.startsWith('video/') || ext === 'MP4') return '#3b82f6';
        if (ext === 'TS' || ext === 'JS' || ext === 'PY') return '#3b82f6';
        return 'var(--labelSecondaryColor, #9ca3af)';
    };

    return (
        <div className={cn('premium-file-icon', `is-${size}`)}>
            <div className="file-sheet">
                <FileIcon size={size === 'sm' ? 24 : 32} strokeWidth={1} color="var(--borderColor, #d1d5db)" />
            </div>
            <div className="file-badge" style={{ backgroundColor: getBadgeColor() }}>
                {ext === 'TS' ? <FileCode size={size === 'sm' ? 8 : 10} /> : ext}
            </div>
        </div>
    );
};

export const MediaUploader: React.FC<MediaUploaderProps> = ({
    multiple = true,
    maxSize = 10,
    accept = '*',
    onFilesAdded,
    onFileRemoved,
    onRetry,
    files: externalFiles,
    trigger = 'button',
    layout = 'list',
    showFileGrid = true,
    title,
    description,
    label = 'Upload',
    disabled = false,
    className = '',
    showPreviews = true,
    style,
}) => {
    const [internalFiles, setInternalFiles] = useState<UploadedFile[]>([]);
    const [isDragging, setIsDragging] = useState(false);
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

    const handleRetry = (id: string) => {
        const file = currentFiles.find(f => f.id === id);
        if (file) {
            updateFileState(id, { status: 'uploading', progress: 0, error: undefined });
            simulateUpload(id);
            onRetry?.(id);
        }
    };

    const formatSize = (bytes?: number) => {
        if (!bytes) return '0 KB';
        const kb = bytes / 1024;
        if (kb < 1024) return `${kb.toFixed(0)} KB`;
        return `${(kb / 1024).toFixed(1)} MB`;
    };

    const renderTrigger = () => {
        const handleClick = () => !disabled && fileInputRef.current?.click();

        switch (trigger) {
            case 'dropzone':
                return (
                    <div
                        className={cn(
                            'mango-uploader-dropzone',
                            disabled && 'is-disabled',
                            isDragging && 'is-dragging',
                            layout === 'compact' && 'is-compact-dropzone'
                        )}
                        onClick={handleClick}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            if (e.dataTransfer.files.length > 0) {
                                processFiles(Array.from(e.dataTransfer.files));
                            }
                        }}
                    >
                        <div className="dropzone-inner">
                            <div className="dropzone-icon-box">
                                <CloudUpload size={24} className="upload-icon" />
                            </div>
                            <p className="dropzone-text">
                                <span className="highlight">Click to upload</span> or drag and drop
                            </p>
                            <span className="limit-hint">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                        </div>
                    </div>
                );
            // ... (other cases simplified for now as user only showed dropzone/list)
            default:
                return (
                    <Button variant="primary" onClick={handleClick} disabled={disabled} icon={<Upload size={18} />}>
                        {label}
                    </Button>
                );
        }
    };

    return (
        <div className={cn('mango-media-uploader', className)} style={style}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple={multiple}
                accept={Array.isArray(accept) ? accept.join(',') : accept}
                disabled={disabled}
                className="mango-uploader-input"
                style={{ display: 'none' }}
            />

            {title && <div className="mango-uploader-title">{title}</div>}

            {showFileGrid && currentFiles.length > 0 && layout !== 'compact' && (
                <div className="mango-uploader-file-grid">
                    {currentFiles.map(file => (
                        <div key={file.id} className="grid-file-item">
                            <PremiumFileIcon file={file} size="md" />
                            <span className="grid-file-name">{file.name}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="mango-uploader-trigger-wrapper">
                {renderTrigger()}
            </div>

            {currentFiles.length > 0 && (trigger === 'dropzone' || layout === 'compact') && (
                <div className={cn('mango-uploader-display', `layout-${layout}`)}>
                    {currentFiles.map((file) => (
                        layout === 'compact' ? (
                            <div key={file.id} className="mango-uploader-compact-card">
                                <div className="compact-preview">
                                    {file.thumbnail ? (
                                        <img src={file.thumbnail} alt="" />
                                    ) : (
                                        <PremiumFileIcon file={file} size="sm" />
                                    )}
                                </div>
                                <div className="compact-info">
                                    <div className="compact-name" title={file.name}>{file.name}</div>
                                    <div className="compact-size">{formatSize(file.size)}</div>
                                </div>
                                <button
                                    className="compact-remove"
                                    onClick={(e) => { e.stopPropagation(); removeFile(file.id); }}
                                >
                                    <XCircle size={16} />
                                </button>
                            </div>
                        ) : (
                            <div
                                key={file.id}
                                className={cn(
                                    'mango-uploader-item-premium',
                                    `is-${file.status}`
                                )}
                            >
                                <div className="item-left">
                                    <PremiumFileIcon file={file} size="sm" />
                                </div>

                                <div className="item-center">
                                    <div className="item-header-row">
                                        <span className="item-name">{file.name}</span>
                                        <button
                                            className="item-remove-mini"
                                            onClick={() => removeFile(file.id)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <div className="item-status-row">
                                        <span className="item-size">{formatSize(file.size)}</span>
                                        <span className="status-separator">|</span>
                                        <div className={cn('status-indicator', `is-${file.status}`)}>
                                            {file.status === 'uploading' && (
                                                <><CloudUpload size={14} className="spin-slow" /> Uploading...</>
                                            )}
                                            {file.status === 'success' && (
                                                <><CheckCircle2 size={14} /> Complete</>
                                            )}
                                            {file.status === 'error' && (
                                                <><XCircle size={14} /> Failed</>
                                            )}
                                        </div>
                                    </div>

                                    {(file.status === 'uploading' || file.status === 'success') && (
                                        <div className="item-progress-container">
                                            <ProgressBar
                                                progress={file.progress}
                                                size="xs"
                                                customColor="var(--primaryColor)"
                                                className="premium-progress"
                                            />
                                            <span className="progress-percent">{file.status === 'success' ? '100%' : `${file.progress}%`}</span>
                                        </div>
                                    )}

                                    {file.status === 'error' && (
                                        <button className="retry-action" onClick={() => handleRetry(file.id)}>
                                            Try again
                                        </button>
                                    )}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )}

            {description && <div className="mango-uploader-description">{description}</div>}
        </div>
    );
};

MediaUploader.displayName = 'MediaUploader';
