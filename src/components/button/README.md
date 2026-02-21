# Button

The foundational interactive element for the Mango UI Kit. Highly customisable with support for icons, various visual states, and loading indicators.

## Features
- **Semantic Variants**: Primary, Secondary, Outline, Ghost, and Link.
- **Icon Support**: Easily add prefix or suffix icons.
- **Glass Mode**: A specialized `glass` variant for high-end blurred UI designs.
- **Loading State**: Built-in spinner that maintains the button's layout.
- **Interactive**: Hover and active animations with slight scaling.

## Usage

```tsx
import { Button } from 'mango-ui-kit';
import { Send } from 'lucide-react';

<Button variant="primary" icon={<Send size={18} />}>
  Send Message
</Button>

<Button variant="glass" loading>
  Saving...
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ButtonVariant` | `'primary'`| Visual style of the button |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size category |
| `icon` | `ReactNode` | - | Primary icon |
| `iconPosition`| `'left' \| 'right'` | `'left'` | Icon placement |
| `loading` | `boolean` | `false` | Shows a spinner |
| `disabled` | `boolean` | `false` | Disables interaction |
| `fullWidth` | `boolean` | `false` | Takes full width of container |
