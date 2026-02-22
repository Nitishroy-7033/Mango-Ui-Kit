# Number Input (Spinner)

A precision numeric entry component with increment/decrement controls, designed for quantity selection, settings, and other numeric data entry.

## ✨ Features

- **🕹️ Step Controls**: Built-in plus/minus buttons for quick adjustments.
- **🛡️ Value Guard**: Automatic clamping between `min` and `max` values.
- **📏 Multiple Sizes**: `sm`, `md`, and `lg` variants to fit any UI.
- **⚠️ Error Handling**: Integrated error states and validation text.
- **🌓 Theme Support**: Adaptive design for light and dark modes.
- **📱 Accessible**: ARIA labels and keyboard support.

---

## 📦 Installation

```tsx
import { NumberInput } from 'mango-ui-kit';
```

---

## 🚀 Usage

### Simple Spinner
```tsx
<NumberInput 
  label="Quantity" 
  min={1} 
  max={100} 
  defaultValue={1} 
  onChange={(val) => console.log(val)}
/>
```

### Different Sizes
```tsx
<NumberInput size="sm" defaultValue={2} />
<NumberInput size="md" defaultValue={10} />
<NumberInput size="lg" defaultValue={100} />
```

### Error State
```tsx
<NumberInput 
  error 
  errorText="Exceeds maximum stock" 
  defaultValue={999} 
/>
```

---

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `number` | — | Controlled value |
| `defaultValue` | `number` | — | Initial value for uncontrolled mode |
| `min` | `number` | `-Infinity` | Minimum allowed value |
| `max` | `number` | `Infinity` | Maximum allowed value |
| `step` | `number` | `1` | Increment/decrement amount |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `error` | `boolean` | `false` | Whether to show error state |
| `errorText` | `string` | — | Message to display on error |
| `label` | `string` | — | Label text above input |
| `disabled` | `boolean` | `false` | Disable interactions |
| `hideControls` | `boolean` | `false` | Hide the plus/minus buttons |
| `fullWidth` | `boolean` | `false` | Take full width of container |
| `onChange` | `(val) => void` | — | Callback when value changes |
| `iconPrefix` | `ReactNode` | — | Icon before the number |
| `iconSuffix` | `ReactNode` | — | Icon after the number |
