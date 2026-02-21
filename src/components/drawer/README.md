# Drawer 🥭

A high-performance side-panel component that slides in from the right, perfect for advanced filtering, settings, or multi-step forms.

## Features
- 🎬 **Animated**: Smooth 3D-accelerated sliding transition.
- 🌫️ **High Blur Backdrop**: Deep blur overlay that makes the panel "pop".
- 🏁 **Auto-Lock**: Disables background scrolling when open.
- 🧱 **Managed Layout**: Dedicated areas for header, scrolling body, and sticky footer.
- ⌨️ **Keyboard Friendly**: Automatically closes on "Escape" key press.

## Usage

```tsx
import { Drawer, Button } from 'mango-ui-kit';
import { useState } from 'react';

function MySettings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Details</Button>
      
      <Drawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Settings" 
        subtitle="Global application preferences"
        footer={<Button fullWidth>Save Changes</Button>}
      >
        <div>Content goes here...</div>
      </Drawer>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `isOpen` | `boolean` | `false` | Controls the panel visibility. |
| `onClose` | `() => void` | - | Callback triggered when the backdrop or close X is clicked. |
| `title` | `string` | - | Main heading text. |
| `subtitle` | `string` | - | Secondary light text below title. |
| `footer` | `ReactNode` | - | Content displayed in the sticky bottom area. |
| `width` | `string` | `'420px'` | Custom CSS width for the panel (e.g. `100%`, `50vw`). |
| `className` | `string` | - | Extra CSS classes for the drawer surface. |
| `children` | `ReactNode` | - | The main scrolling content. |
