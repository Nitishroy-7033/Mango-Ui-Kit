# Toggle 🥭

A stylish, animated switch component used for binary choice (on/off).

## Features
- ✨ **Animated**: Smooth sliding thumb transition.
- 📏 **Sizes**: Support for different sizes (sm, md, lg).
- 🏷️ **Labels**: Optional inline label support.
- 🎨 **States**: Supports checked, unchecked, and disabled states with visual feedback.

## Usage

```tsx
import { Toggle } from 'mango-ui-kit';
import { useState } from 'react';

function MyForm() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Toggle 
      label="Enable Notifications" 
      checked={enabled} 
      onChange={setEnabled} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | Whether the toggle is currently in the "on" state. |
| `onChange` | `(checked: boolean) => void` | - | Callback triggered when the state changes. |
| `label` | `string` | - | Optional text label to display next to the toggle. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The scale of the toggle. |
| `disabled` | `boolean` | `false` | Prevents interaction and grays out the UI. |
