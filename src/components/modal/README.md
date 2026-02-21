# Modal 🥭

A high-performance modal dialog component with smooth animations and a deep blur background.

## Features
- 🎬 **Animations**: Built-in fade and zoom-in transitions.
- 🌫️ **Overlays**: Dark, high-blur backdrop that focuses user attention.
- 🏁 **Auto-Lock**: Automatically disables background scrolling when open.
- 🛠️ **Configurable**: supports custom titles and widths.

## Usage

```tsx
import { Modal, Button } from 'mango-ui-kit';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Settings"
      >
        <p>Edit your profile information here.</p>
      </Modal>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `isOpen` | `boolean` | `false` | Controls the visibility of the modal. |
| `onClose` | `() => void` | - | Callback triggered when the close button or backdrop is clicked. |
| `title` | `string` | - | Header title. |
| `children` | `ReactNode` | - | The content to display inside the modal. |
| `className` | `string` | - | Additional CSS classes for the modal container. |
