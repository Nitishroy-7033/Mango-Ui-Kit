# Chip

A compact, interactive element for displaying tags, categories, or selection options. Supports icons, removal, and clickable toggle states.

## Features
- **Variants**: Filled, Soft, Outline, and Ghost.
- **Color Palette**: Primary, Success, Warning, Error, Info, and Neutral.
- **Interactive**: Clickable chips with a selected state, or removable chips with a close button.
- **Leading Icon**: Pass any React node as an icon prefix.
- **Disabled State**: Fully disabled styling with no interaction.

## Usage

```tsx
import { Chip } from 'mango-ui-kit';

<Chip variant="filled" color="primary" icon={<Star size={14} />}>
  Featured
</Chip>

<Chip variant="outline" color="error" removable onRemove={() => console.log('removed')}>
  Remove me
</Chip>

<Chip variant="soft" color="success" onClick={() => console.log('clicked')} selected>
  Selected
</Chip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Text or content of the chip |
| `variant` | `'filled' \| 'soft' \| 'outline' \| 'ghost'` | `'soft'` | Visual variant |
| `color` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'primary'` | Color palette |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the chip |
| `icon` | `ReactNode` | — | Leading icon element |
| `removable` | `boolean` | `false` | Show a close/remove button |
| `onRemove` | `() => void` | — | Callback when removed |
| `onClick` | `() => void` | — | Makes the chip clickable |
| `selected` | `boolean` | `false` | Selected state for clickable chips |
| `disabled` | `boolean` | `false` | Disables interaction |
| `className` | `string` | — | Additional CSS class |