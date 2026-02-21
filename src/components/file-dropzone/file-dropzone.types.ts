export interface FileDropzoneProps {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  label?: string;
  className?: string;
}
