# FileDropzone 🥭

A specialized component for handling file uploads via dragging and dropping or clicking to browse.

## Features
- 🖱️ **Drag & Drop**: Native drag and drop support with visual feedback.
- 📂 **Multi-file Support**: Handles single or multiple file uploads.
- 📋 **File Listing**: Automatically displays selected files with their size and type-specific icons.
- 🔍 **Filtering**: define accepted file extensions.
- ✨ **Animated**: Smooth fade-in effects for the file list.

## Usage

```tsx
import { FileDropzone } from 'mango-ui-kit';

<FileDropzone 
  label="Upload Documents" 
  accept=".pdf,.doc,.docx" 
  multiple={true} 
  onFilesSelected={(files) => console.log('Selected:', files)}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onFilesSelected` | `(files: File[]) => void`| - | Callback triggered when files are added or removed. |
| `accept` | `string` | `'*'` | Comma separated list of file extensions (e.g. `.jpg,.png`). |
| `multiple` | `boolean` | `true` | Allows selecting multiple files simultaneously. |
| `label` | `string` | `'Upload Files'` | Title text displayed in the dropzone area. |
| `className` | `string` | - | Extra CSS classes for the container. |
