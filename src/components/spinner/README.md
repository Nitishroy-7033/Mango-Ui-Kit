# Spinner 🥭

A simple, animated loading indicator based on the Lucide Loader icon.

## Features
- 🔄 **Animated**: Smooth 360-degree rotation.
- 📐 **Customizable Size**: Set any pixel size.
- 🎨 **Color Support**: Inherits primary theme color or accepts custom overrides.

## Usage

```tsx
import { Spinner } from 'mango-ui-kit';

<Spinner size={32} color="var(--primaryColor)" />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number` | `24` | Pixel size of the spinner icon. |
| `color` | `string` | - | Custom CSS color for the icon. |
| `className` | `string` | - | Extra CSS classes for the container. |
