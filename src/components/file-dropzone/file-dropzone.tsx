import React, { useState, useRef } from 'react';
import { Upload, X, File, Image as ImageIcon, FileText } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { FileDropzoneProps } from './file-dropzone.types';
import './file-dropzone.css';

export const FileDropzone: React.FC<FileDropzoneProps> = ({
  onFilesSelected,
  accept = '*',
  multiple = true,
  label = 'Upload Files',
  className = '',
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);
    }
  };

  const addFiles = (newFiles: File[]) => {
    const filtered = newFiles.filter(file => {
      if (accept === '*') return true;
      return accept.split(',').some(ext => file.name.endsWith(ext.trim()));
    });

    const updatedFiles = multiple ? [...files, ...filtered] : [filtered[0]].filter(Boolean);
    setFiles(updatedFiles);
    onFilesSelected && onFilesSelected(updatedFiles);
  };

  const removeFile = (idx: number) => {
    const updatedFiles = files.filter((_, i) => i !== idx);
    setFiles(updatedFiles);
    onFilesSelected && onFilesSelected(updatedFiles);
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <ImageIcon size={20} />;
    if (type.includes('pdf')) return <FileText size={20} />;
    return <File size={20} />;
  };

  return (
    <div className={cn('dropzone-container', className)}>
      <div
        className={cn('dropzone-area', isDragging && 'dragging')}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          hidden
          ref={fileInputRef}
          onChange={handleFileInput}
          accept={accept}
          multiple={multiple}
        />
        <div className="dropzone-content">
          <div className="icon-circle">
            <Upload size={24} />
          </div>
          <h3>{label}</h3>
          <p>Drag and drop or click to browse</p>
          <span className="file-hint">Supports: {accept === '*' ? 'All files' : accept}</span>
        </div>
      </div>

      {files.length > 0 && (
        <div className="files-list animate-fade-in">
          {files.map((file, idx) => (
            <div key={idx} className="file-item">
              <div className="file-info">
                <div className="type-icon">{getFileIcon(file.type)}</div>
                <div className="text-info">
                  <span className="file-name">{file.name}</span>
                  <span className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                </div>
              </div>
              <button className="remove-btn" onClick={(e) => { e.stopPropagation(); removeFile(idx); }}>
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

FileDropzone.displayName = 'FileDropzone';
