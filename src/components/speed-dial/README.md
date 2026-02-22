# SpeedDial

A Floating Action Button (FAB) that "explodes" or slides out multiple secondary actions when clicked. Perfect for mobile-first productivity apps and clean dashboard interfaces.

## ✨ Features

- **🧭 Multi-Directional**: Expand actions `up`, `down`, `left`, or `right`.
- **📍 Smart Positioning**: Built-in positions for all four corners (`bottom-right`, `bottom-left`, `top-right`, `top-left`).
- **✨ Premium Animations**: Smooth staggered entry animations for action items.
- **🪄 Glassmorphism**: High-end glass variant for modern, colorful backgrounds.
- **🏷️ Auto-Labels**: Tooltip-style labels that appear on hover for each action.
- **🌗 Theme Ready**: Adaptive styling that works with your global theme engine.

---

## 📦 Installation

```tsx
import { SpeedDial } from 'mango-ui-kit';
import { Plus, Printer, Share2, Mail } from 'lucide-react';
```

---

## 🚀 Usage

### Basic Bottom-Right Speed Dial
```tsx
<SpeedDial
  icon={<Plus />}
  activeIcon={<X />}
  actions={[
    { id: 'print', icon: <Printer />, label: 'Print', onClick: () => {} },
    { id: 'share', icon: <Share2 />, label: 'Share', onClick: () => {} },
  ]}
/>
```

### Premium Glass Variant
```tsx
<SpeedDial
  icon={<Plus />}
  variant="glass"
  direction="left"
  actions={myActions}
/>
```

---

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `ReactNode` | — | Main trigger button icon |
| `activeIcon` | `ReactNode` | — | Icon to show when open (e.g., a Close icon) |
| `actions` | `SpeedDialAction[]` | — | Array of secondary actions |
| `direction` | `string` | `'up'` | Expansion direction: `up`, `down`, `left`, `right` |
| `position` | `string` | `'bottom-right'`| `bottom-right`, `bottom-left`, `top-right`, `top-left`, `fixed` |
| `variant` | `string` | `'primary'` | `primary`, `secondary`, `danger`, `black`, `glass` |
| `showLabels` | `boolean` | `true` | Show tooltips on hover |
| `offset` | `string \| number` | `24px` | Custom distance from the screen edge |

### SpeedDialAction Object
| Key | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique ID for the action |
| `icon` | `ReactNode` | Action button icon |
| `label` | `string` | Optional tooltip text |
| `variant` | `string` | Action button color/style |
| `onClick` | `function` | Click handler function |
