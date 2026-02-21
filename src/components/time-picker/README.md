# TimePicker 🥭

A stylish analog-inspired time selection component with increment/decrement controls.

## Features
- 🕒 **Clock Interface**: Easy selection of hours and minutes.
- 🔼 **Step Controls**: Use chevron buttons to quickly adjust time.
- ✨ **Animated**: Smooth scale-in transition for the picker.
- 🎨 **Theme Aware**: Supports global color scheme.

## Usage

```tsx
import { TimePicker } from 'mango-ui-kit';
import { useState } from 'react';

function Schedule() {
  const [time, setTime] = useState('09:30');

  return (
    <TimePicker 
      value={time} 
      onChange={setTime} 
      placeholder="Select meeting time"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | - | The selected time in `HH:mm` format. |
| `onChange` | `(time: string) => void` | - | Callback triggered when time is adjusted. |
| `placeholder`| `string` | `'Select time'` | Placeholder text when no time is selected. |
| `className` | `string` | - | Extra CSS classes for the container. |
| `footer` | `ReactNode` | - | Optional content at the bottom of the picker. |
