import React, { useRef } from 'react';
import { FileText, Trash2, File as FileIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../button';
import { useFileUpload } from '../../hooks/useFileUpload';
import type { DocumentUploaderProps } from './specialized.types';

export const DocumentUploader: React.FC<DocumentUploaderProps> = ({
    multiple = true,
    maxSize = 20,
    label = 'Upload Documents',
    allowFormats,
    onFilesAdded,
    onFileRemoved,
    disabled = false,
    className = '',
}) => {
    const accept = allowFormats ? allowFormats.join(',') : '.pdf,.doc,.docx,.txt,.xls,.xlsx,.zip';
    const { files, processFiles, removeFile } = useFileUpload({ multiple, maxSize, onFilesAdded, onFileRemoved });
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={cn('mango-document-uploader', className)}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => e.target.files && processFiles(Array.from(e.target.files))}
                accept={accept}
                multiple={multiple}
                hidden
            />

            <Button
                variant="dashed"
                onClick={() => fileInputRef.current?.click()}
                disabled={disabled}
                icon={<FileText size={18} />}
                fullWidth
            >
                {label}
            </Button>

            <div className="document-list">
                {files.map(file => (
                    <div key={file.id} className={cn('doc-item', `is-${file.status}`)}>
                        <FileIcon size={20} className="doc-icon" />
                        <div className="doc-info">
                            <span className="name">{file.name}</span>
                            <span className="size">{(file.size! / 1024).toFixed(1)} KB</span>
                        </div>
                        <div className="actions">
                            <button className="remove-btn" onClick={() => removeFile(file.id)}>
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
