# Skeleton 🥭

A placeholder component used to display a preview of content while it is loading.

## Features
- 🧱 **3 Variants**: circular, rectangular, rounded.
- ✨ **Animated**: Smooth pulse animation.
- 🌊 **Shimmer Effect**: Optional sliding light effect.
- 📐 **Flexible**: Set custom width and height via props.

## Usage

```tsx
import { Skeleton } from 'mango-ui-kit';

function LoadingProfile() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Skeleton variant="circular" width={48} height={48} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton variant="text" width="60%" height={16} />
        <Skeleton variant="text" width="40%" height={12} />
      </div>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'circular' \| 'rectangular' \| 'rounded' \| 'text'`| `'rectangular'`| Shape of the skeleton. |
| `width` | `string \| number` | - | Width of the skeleton. |
| `height` | `string \| number` | - | Height of the skeleton. |
| `animate` | `boolean` | `true` | Enables the pulsing animation. |
| `shimmer` | `boolean` | `true` | Enables the sliding shimmer effect. |
| `className` | `string` | - | Extra CSS classes for the skeleton div. |
