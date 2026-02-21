# DateRangePicker 🥭

A powerful component for selecting a date range (Start and End) with an interactive calendar.

## Features
- 🔗 **Range Highlighting**: Automatically shades the area between start and end dates.
- 🧹 **Quick Clear**: Built-in footer action to reset the selection.
- 🧩 **2-Step Selection**: Automatically handles setting start then end date.
- ✨ **Animated**: Smooth scale-in transition for the calendar.

## Usage

```tsx
import { DateRangePicker } from 'mango-ui-kit';
import { useState } from 'react';

function Booking() {
  const [range, setRange] = useState({ startDate: '2024-06-01', endDate: '2024-06-10' });

  return (
    <DateRangePicker 
      value={range} 
      onChange={setRange} 
      placeholder="Check-in - Check-out"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `DateRange` | - | Object with `startDate` and `endDate` (ISO strings or null). |
| `onChange` | `(range: DateRange) => void`| - | Callback triggered when either date is selected. |
| `placeholder`| `string` | `'Select date range'`| Placeholder for the input. |
| `className` | `string` | - | Extra CSS classes for the container. |

### DateRange (Type)
- `startDate` (string | null): The beginning of the range.
- `endDate` (string | null): The end of the range.
