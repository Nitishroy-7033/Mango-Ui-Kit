# Slider / Range Slider

A premium, feature-rich range selection component supporting single-thumb and dual-thumb (range) modes with floating tooltips and visual variants.

## Features
- **Range Mode**: Pass `rangeValue` to enable dual thumbs for price ranges or intervals.
- **Floating Tooltips**: Real-time value display that follows the thumb during interaction.
- **Marks & Snap Points**: Visual dots on the track for specific values with optional labels.
- **Premium Variants**: 
    - `neon`: Adds a glowing effect to the track and thumb.
    - `gradient`: A vibrant mango-inspired color transition.
    - `glass`: Transparent, blurred track for sophisticated UIs.

## Usage

```tsx
import { Slider } from 'mango-ui-kit';

// Basic Slider
<Slider value={50} onChange={setVal} showMinMax />

// Range Slider
<Slider 
  rangeValue={[20, 80]} 
  onRangeChange={setRange} 
  min={0} 
  max={100}
  formatValue={(v) => `$${v}`}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | - | Current value for single mode |
| `rangeValue`| `[number, number]`| - | Current range for range mode |
| `min / max` | `number` | `0 / 100` | Range boundaries |
| `step` | `number` | `1` | Increment value |
| `variant` | `SliderVariant` | `'default'` | `default`, `gradient`, `neon`, `glass` |
| `marks` | `Mark[] \| boolean`| - | Snap points or labels |
| `showTooltip`| `boolean` | `true` | Shows value above thumb |
| `formatValue`| `(v) => string` | - | Custom formatter for tooltip/labels |
