# Media Uploader

A comprehensive file upload component supporting images, videos, and documents with real-time progress tracking, previews, and multiple layout styles.

## Features
- **Visual Previews**: Automatic image thumbnail generation before actual upload.
- **Progress Tracking**: Real-time progress bars for each file (simulated or real).
- **Validation**: Built-in size limits and file type filtering.
- **Multiple Triggers**: 
    - `dropzone`: Large drag-and-drop area.
    - `avatar`: Specialized profile picture uploader.
    - `card`: Minimalist grid uploader.
    - `button`: Traditional button trigger.
- **Layouts**: Display uploaded files in a functional `list` or a visual `grid`.

## Usage

```tsx
import { MediaUploader } from 'mango-ui-kit';

<MediaUploader 
  trigger="dropzone"
  layout="grid"
  multiple
  maxSize={5} // 5MB
  accept="image/*"
  onFilesAdded={(files) => console.log(files)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `TriggerType` | `'button'` | Type of trigger (dropzone, avatar, card, etc) |
| `layout` | `'list' \| 'grid'` | `'list'` | How items are displayed |
| `maxSize` | `number` | `10` | Max file size in MB |
| `accept` | `string \| string[]`| `'*'` | Accepted MIME types |
| `multiple` | `boolean` | `true` | Allow multiple file selection |
| `showPreviews`| `boolean` | `true` | Generate thumbnails for images |
| `label` | `string` | - | Custom trigger text |
