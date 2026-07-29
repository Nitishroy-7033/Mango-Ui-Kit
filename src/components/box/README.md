# MangoBox

An enhanced Box component with pre-designed visual presets. Wraps the base layout Box with convenient variants for dashboards, cards, and decorative containers.

## Features
- **Variants**: Default, Dashed, Dotted, Glass, Neon, Elevated, Flat, Outline, and Gradient.
- **Intensity Control**: Adjust shadow/blur/border thickness on a scale of 1-5.
- **Base Box Props**: Full access to padding, margin, flex, background, border, shadow, and more.
- **Use Cases**: Elevated cards, glass panels, neon accents, gradient banners, and flat sections.

## Usage

```tsx
import { MangoBox } from 'mango-ui-kit';

<MangoBox variant="elevated" intensity={3} p={24}>
  This card has a medium shadow and white background.
</MangoBox>

<MangoBox variant="glass" intensity={2} p={32} radius="24px">
  A frosted glass panel with blur effect.
</MangoBox>

<MangoBox
  variant="neon"
  intensity={4}
  p={20}
  display="flex"
  justify="center"
  align="center"
>
  <span>Neon glow box</span>
</MangoBox>

<MangoBox variant="gradient" intensity={2} p={24}>
  <h2 style={{ color: 'white' }}>Gradient Banner</h2>
</MangoBox>

<MangoBox variant="dashed" intensity={2} p={16}>
  Drag and drop content here
</MangoBox>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'dashed' \| 'dotted' \| 'glass' \| 'neon' \| 'elevated' \| 'flat' \| 'outline' \| 'gradient'` | `'default'` | Preset variant |
| `intensity` | `1 \| 2 \| 3 \| 4 \| 5` | `2` | Intensity of the effect |

All base `BoxProps` are also supported:

| Prop | Type | Description |
|------|------|-------------|
| `as` | `ElementType` | Change the underlying element |
| `p, px, py, pt, pr, pb, pl` | `SpacingValue` | Padding shorthand |
| `m, mx, my, mt, mr, mb, ml` | `SpacingValue` | Margin shorthand |
| `width, height` | `string \| number` | Dimensions |
| `bg` | `string` | Background color |
| `color` | `string` | Text color |
| `radius` | `string \| number` | Border radius |
| `border` | `string` | Border shorthand |
| `shadow` | `string` | Shadow preset |
| `display` | `CSSProperties['display']` | Display mode |
| `position` | `CSSProperties['position']` | Position |
| `blur` | `string \| number` | Backdrop blur |
| `gradient` | `string` | Background gradient |
| `flex` | `string \| number` | Flex property |
| `justify` | `JustifyContent` | Flex justify |
| `align` | `AlignItems` | Flex align |
| `gap` | `SpacingValue` | Gap between children |