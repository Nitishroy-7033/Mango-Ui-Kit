# Bottom Navigation Bar

A versatile navigation component designed primarily for mobile interfaces, with support for various positions (Bottom, Top, Left, Right) and visual styles.

## ✨ Features

- **📱 Mobile First**: Optimized for thumb-reach and mobile ergonomics.
- **🎨 Multiple Variants**: Classic, Floating, Bubble (dot), Active Pill (background), and Indicators (Top/Bottom).
- **🕹️ Position Switch**: Can be docked to `bottom`, `top`, `left`, or `right` of the screen.
- **✨ Center CTA Support**: Create a prominent center action button with a single prop.
- **🌑 Theme Ready**: Full support for light/dark modes and custom primary colors.
- **🫧 Glassmorphism**: Optional blur background for a premium modern look.

---

## 📦 Installation

```tsx
import { BottomNavigationBar } from 'mango-ui-kit';
```

---

## 🚀 Usage

### Simple Classic Bar
```tsx
import { Home, Search, Heart, User } from 'lucide-react';

const items = [
  { id: '1', label: 'Home', icon: <Home /> },
  { id: '2', label: 'Search', icon: <Search /> },
  { id: '3', label: 'Liked', icon: <Heart /> },
  { id: '4', label: 'Profile', icon: <User /> },
];

<BottomNavigationBar items={items} onChange={(id) => console.log(id)} />
```

### Floating Bar with CTA
```tsx
const items = [
  { id: 'home', label: 'Home', icon: <Home /> },
  { id: 'add', label: 'Create', icon: <Plus />, isCTA: true },
  { id: 'profile', label: 'Profile', icon: <User /> },
];

<BottomNavigationBar items={items} variant="floating" blur />
```

---

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `BottomNavItem[]` | — | Required array of navigation items |
| `variant` | `string` | `'classic'` | Visual style: `classic`, `floating`, `bubble`, `active-pill`, `indicator-top`, `indicator-bottom` |
| `position` | `string` | `'bottom'` | Screen dock position: `bottom`, `top`, `left`, `right` |
| `showLabels` | `boolean` | `true` | Whether to display labels below icons |
| `activeLabelOnly` | `boolean` | `false` | Only show the label for the currently active item |
| `value` | `string \| number` | — | Controlled active item ID |
| `defaultValue` | `string \| number` | — | Initial active item ID for uncontrolled mode |
| `onChange` | `(id) => void` | — | Callback when an item is clicked |
| `blur` | `boolean` | `false` | Apply glassmorphism blur effect |
| `color` | `string` | — | Custom brand primary color |

### BottomNavItem
| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | `string \| number` | Unique identifier |
| `label` | `string` | Text label |
| `icon` | `ReactNode` | Icon element |
| `isCTA` | `boolean` | If true, renders as a prominent centerpiece button |
| `onClick`| `function` | Item-specific click handler |
