# Badge 🥭

Small status indicators used to highlight items or display count/status information.

## Features
- ✨ **8 Variants**: primary, secondary, outline, ghost, danger, success, warning, info.
- 📏 **3 Sizes**: sm, md, lg.
- 💊 **Pill Style**: Optional fully rounded corners.
- 🔘 **Icon Support**: Inline icon support within the badge.

## Usage

```tsx
import { Badge } from 'mango-ui-kit';
import { Star } from 'lucide-react';

<Badge variant="success" pill icon={Star}>
  Verified
</Badge>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `string` | `'primary'` | Visual style of the badge. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the badge. |
| `pill` | `boolean` | `false` | If true, badge will have fully rounded corners. |
| `icon` | `ElementType` | - | Optional icon to display inside the badge. |
| `children` | `ReactNode` | - | The label/content of the badge. |
