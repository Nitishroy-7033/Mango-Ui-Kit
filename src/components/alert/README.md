# Alert

A clean, informative feedback component for displaying status messages, warnings, and success confirmations.

## Features
- **Semantic Variants**: Success, Error, Warning, Info, and Neutral.
- **Visual Styles**: 
    - `soft`: (Default) Light background with matching border.
    - `solid`: Vibrant background with white text.
    - `outlined`: Transparent background with colored border.
- **Interactive**: Support for dismiss buttons and secondary action buttons.
- **Custom Icons**: Override default semantic icons with your own Lucide symbols.

## Usage

```tsx
import { Alert } from 'mango-ui-kit';

<Alert 
  variant="success" 
  title="Profile Updated"
  dismissible
>
  Your personal information has been saved successfully.
</Alert>

<Alert 
  variant="error" 
  alertStyle="solid"
  actionLabel="Retry"
  onAction={() => handleRetry()}
>
  Could not establish a server connection.
</Alert>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `AlertVariant` | `'info'` | Semantic category |
| `alertStyle` | `AlertStyle` | `'soft'` | Visual design variant |
| `title` | `string` | - | Header text |
| `icon` | `ReactNode` | - | Custom leading icon |
| `dismissible` | `boolean` | `false` | Shows close button |
| `actionLabel` | `string` | - | Text for action button |
| `onAction` | `() => void` | - | Action button click handler |
