# CalendarDatePicker 🥭

A premium single-date selection component with an interactive calendar dropdown.

## Features
- 🗓️ **Interactive Calendar**: Easy month navigation with year support.
- ✨ **Animated**: Smooth scale-in transition for the calendar.
- 📍 **Highlighting**: Visually marks the selected date and the current day.
- 🎨 **Theme Aware**: Supports global color scheme.

## Usage

```tsx
import { CalendarDatePicker } from 'mango-ui-kit';
import { useState } from 'react';

function DateForm() {
  const [date, setDate] = useState('2024-05-20');

  return (
    <CalendarDatePicker 
      value={date} 
      onChange={setDate} 
      placeholder="Select your birthday"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | - | The selected date in ISO format (`YYYY-MM-DD`). |
| `onChange` | `(date: string) => void` | - | Callback triggered when a date is selected. |
| `placeholder`| `string` | `'Select date'` | Placeholder text when no date is selected. |
| `className` | `string` | - | Extra CSS classes for the container. |

---

# DateRangePicker

A powerful component for selecting a range between two dates (Start and End).

## Features
- 🔗 **Range Highlighting**: Automatically shades the area between start and end dates.
- 🧹 **Quick Clear**: Built-in footer action to reset the selection.
- 🧩 **2-Step Selection**: Automatically handles setting start then end date.

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
