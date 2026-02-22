# Badge

A highly versatile component for status labeling, counting, and anchored indicators.

## ✨ Features

- **🏷️ Tag Mode**: Standalone label for categorization.
- **🛶 Overlap Mode**: Automatically anchors to children (top-right, etc.).
- **🔢 Count Formatting**: Handles overflow (e.g., `99+`) and zero-value visibility control.
- **🔴 Dot Indicators**: Small minimalist status dots.
- **✨ Pulse Effect**: Optional attention-grabbing pulsing animation.
- **📱 Responsive Sizes**: From tiny `xs` for dots to prominent `lg` tags.

---

## 🚀 Usage

### Standalone Tag
```tsx
<Badge badgeContent="Beta" variant="primary" />
```

### Indicator Overlap
```tsx
import { Mail } from 'lucide-react';

<Badge badgeContent={5} variant="danger">
  <Mail size={24} />
</Badge>
```

### Dot Indicator
```tsx
<Badge dot variant="success" position="bottom-right">
  <Avatar src="..." />
</Badge>
```

### Max Count Formatting
```tsx
<Badge badgeContent={120} maxCount={99} variant="danger" /> // Renders 99+
```

---

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `badgeContent` | `ReactNode` | — | The content inside the badge |
| `variant` | `BadgeVariant` | `'primary'` | Visual style |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Size of the badge |
| `children` | `ReactNode` | — | If provided, the badge will overlay this content |
| `dot` | `boolean` | `false` | Show as a small dot without content |
| `position` | `BadgePosition` | `'top-right'` | Overlay position relative to children |
| `maxCount` | `number` | `99` | Max value before appending `+` |
| `showZero` | `boolean` | `false` | Whether to display if value is 0 |
| `pulse` | `boolean` | `false` | Add a pulsing shadow animation |
| `icon` | `ElementType` | — | Icon to show inside the badge |
| `offset` | `[number, number]` | — | Pixels to shift the anchored badge |
