import React, { useRef } from 'react';
import { Film, PlayCircle, Trash2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../button';
import { ProgressBar } from '../progress-bar';
import { useFileUpload } from '../../hooks/useFileUpload';
import type { VideoUploaderProps } from './specialized.types';

export const VideoUploader: React.FC<VideoUploaderProps> = ({
    multiple = true,
    maxSize = 100, // 100MB for video
    label = 'Upload Video',
    onFilesAdded,
    onFileRemoved,
    disabled = false,
    className = '',
}) => {
    const { files, processFiles, removeFile } = useFileUpload({ multiple, maxSize, onFilesAdded, onFileRemoved });
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={cn('mango-video-uploader', className)}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => e.target.files && processFiles(Array.from(e.target.files))}
                accept="video/*"
                multiple={multiple}
                hidden
            />

            <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={disabled}
                icon={<Film size={18} />}
            >
                {label}
            </Button>

            <div className="video-list">
                {files.map(file => (
                    <div key={file.id} className={cn('video-item', `is-${file.status}`)}>
                        <div className="video-icon"><PlayCircle size={24} /></div>
                        <div className="video-info">
                            <span className="name">{file.name}</span>
                            {file.status === 'uploading' && (
                                <ProgressBar progress={file.progress} size="xs" color="var(--primaryColor)" />
                            )}
                            {file.status === 'error' && <span className="error-text">{file.error}</span>}
                        </div>
                        <button className="remove-btn" onClick={() => removeFile(file.id)}>
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
