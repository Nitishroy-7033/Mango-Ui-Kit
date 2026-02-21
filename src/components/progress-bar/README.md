# ProgressBar 🥭

A stylish progress indicator component with support for labels, percentages, and animations.

## Features
- ⚡ **Animated**: Smooth progress filling transition.
- 🏷️ **Labels**: Optional descriptive labels and percentage display.
- 📏 **Sizes**: Multiple thickness options (sm, md, lg).
- 🎨 **Theme Aware**: customize the bar color using CSS variables or explicit color props.

## Usage

```tsx
import { ProgressBar } from 'mango-ui-kit';

<ProgressBar 
  progress={65} 
  label="Uploading Files" 
  size="lg" 
  color="#10b981"
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `progress` | `number` | `0` | Progress value between 0 and 100. |
| `label` | `string` | - | Text to display above the progress bar. |
| `showPercentage`| `boolean` | `true` | If true, shows the percentage text. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The thickness of the bar. |
| `color` | `string` | `--primaryColor` | The fill color of the progress bar. |
| `animated` | `boolean` | `true` | Enables the movement transition. |
| `className` | `string` | - | Extra CSS classes for container. |
