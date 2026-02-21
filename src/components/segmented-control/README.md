# Segmented Control

A modern, high-performance alternative to Tabs or Radio buttons, featuring a smooth sliding indicator that follows the user's selection.

## Features
- **Dynamic Indicator**: A sliding background that translates and resizes to match the active segment.
- **Glassmorphic Design**: Built-in support for translucent, blurry backgrounds.
- **Icon Support**: Easily add icons next to labels for a professional UI.
- **Full Width**: Optional full-width layout for toolbar-style designs.

## Usage

```tsx
import { SegmentedControl } from 'mango-ui-kit';
import { LayoutGrid, List } from 'lucide-react';

<SegmentedControl 
  variant="pill"
  options={[
    { label: 'Grid', value: 'grid', icon: <LayoutGrid size={16} /> },
    { label: 'List', value: 'list', icon: <List size={16} /> }
  ]}
  defaultValue="grid"
  onChange={(val) => setView(val)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Option[]` | - | Array of `{ label, value, icon, disabled }` |
| `variant` | `'pill' \| 'rectangle'` | `'rectangle'` | Visual shape of the control |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Height of the control |
| `fullWidth`| `boolean` | `false` | Whether to expand to fill container |
| `color` | `string` | - | Custom active text color |
| `disabled` | `boolean` | `false` | Disables the entire control |
