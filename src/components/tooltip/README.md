# Tooltip 🥭

A premium glassmorphism tooltip component that can wrap any element to show additional information on hover.

## Features
- 💎 **Glassmorphism Design**: Blur backdrop with subtle borders.
- 💫 **Smooth Animations**: Scale and fade transitions.
- 📍 **4 Positions**: top, bottom, left, right.
- ⏱️ **Configurable Delay**: Delay before showing the tooltip.
- 🎨 **Theme Aware**: Automatically adjusts colors based on light/dark mode.
- ⌨️ **Accessible**: Supports focus and blur events for keyboard users.

## Usage

```tsx
import { Tooltip } from 'mango-ui-kit';

function MyComponent() {
  return (
    <Tooltip content="This is helpful information!" position="right">
      <button>Hover me</button>
    </Tooltip>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | The element that triggers the tooltip on hover. |
| `content` | `ReactNode` | - | The content to display inside the tooltip (string or JSX). |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | The placement of the tooltip relative to the child. |
| `delay` | `number` | `0` | Delay in milliseconds before showing the tooltip. |
| `className` | `string` | - | Additional CSS classes for the tooltip bubble. |
