# ConfirmationModal 🥭

A specialized modal used for critical user decisions like "Delete" or "Save Changes".

## Features
- 🚨 **Visual Categories**: presets for danger, warning, and primary actions.
- ✨ **Dynamic Icons**: Automatically switches icons (trash, warning, info) based on type.
- 🎬 **Pop-in Animation**: Eye-catching entry animation.
- 🧱 **Managed Layout**: Fixed header, body, and action footer for consistency.

## Usage

```tsx
import { ConfirmationModal } from 'mango-ui-kit';
import { useState } from 'react';

function DeleteUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete User</button>
      
      <ConfirmationModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onConfirm={() => console.log('Deleted!')} 
        title="Delete User Permanently" 
        message="This action cannot be undone. Are you absolutely sure?" 
        type="danger" 
        confirmLabel="Yes, Delete"
      />
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `isOpen` | `boolean` | `false` | Controls the visibility of the modal. |
| `onClose` | `() => void` | - | Callback triggered when the cancel button or close X is clicked. |
| `onConfirm` | `() => void` | - | Callback triggered when the confirm button is clicked. |
| `title` | `string` | `'Confirm Action'`| The main heading. |
| `message` | `string` | - | The descriptive warning or question. |
| `confirmLabel`| `string` | `'Confirm'` | Text on the main action button. |
| `cancelLabel` | `string` | `'Cancel'` | Text on the secondary button. |
| `type` | `'danger' \| 'warning' \| 'primary'` | `'danger'` | Determines the color scheme and icon. |
