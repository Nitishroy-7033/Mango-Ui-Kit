# Toast System

A global, asynchronous notification manager for the Mango UI Kit. Featuring stacked notifications, progress-bar countdowns, and a powerful hook-based API.

## Features
- **Global Manager**: Trigger toasts from anywhere (inside or outside React).
- **Progress Peel**: "Mango" progress bar at the bottom acts as a visual countdown.
- **Multiple Positions**: Support for 6 screen locations.
- **Actions**: Add custom buttons inside toasts for undoing actions or viewing details.
- **Persistence**: Set `duration: 0` for mission-critical messages that shouldn't auto-close.

## Usage

### 1. Set up the Container
Add the `ToastContainer` once at the root of your application.

```tsx
import { ToastContainer } from 'mango-ui-kit';

function App() {
  return (
    <>
      <Router />
      <ToastContainer position="top-right" />
    </>
  );
}
```

### 2. Trigger Toasts
Import the `toast` utility to show notifications.

```tsx
import { toast } from 'mango-ui-kit';

// Simple message
toast("Hello World!");

// Semantic variants
toast.success({ title: "Saved!", description: "Changes recorded." });
toast.error("Cloud Error: Connection lost.");
toast.warning("Low battery warning.");

// With actions
toast.info({
  title: "New Update",
  description: "Version 2.0 is live.",
  action: {
    label: "Update Now",
    onClick: () => handleUpdate()
  }
});
```

## API

### `toast` method options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title`| `string` | - | Bolded header text |
| `description`| `ReactNode` | - | Main message body |
| `variant`| `string` | `'message'`| `success`, `error`, `warning`, `info` |
| `duration`| `number` | `5000` | MS before closing (0 to disable) |
| `closable`| `boolean`| `true` | Shows the "X" button |
| `action` | `Action` | - | `{ label, onClick }` object |
