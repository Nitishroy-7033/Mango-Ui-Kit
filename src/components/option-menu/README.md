# Option Menu

A powerful, accessible, and highly customizable menu system for contextual actions. Supports nested menus, smart positioning, and various trigger types.

## ✨ Features

- **🌲 Nested Menus**: Infinite recursion support for multi-level menus.
- **🧠 Smart Positioning**: Automatic collision detection (e.g., flips to top if no space at bottom).
- **🕹️ Trigger Control**: Open via `click` or `hover` on any element.
- **🎨 Rich Styling**: Support for icons (start/end), shortcuts, dividers, and destructive variants.
- **🌑 Theme Ready**: Built-in light/dark modes and optional glassmorphism (`blur`).
- **📱 Accessible**: Managed focus and outside-click handling.

---

## 📦 Installation

```tsx
import { OptionMenu } from 'mango-ui-kit';
```

---

## 🚀 Usage

### Basic Menu
```tsx
import { Edit, Trash, Settings } from 'lucide-react';

const options = [
  { id: 'edit', label: 'Edit', icon: <Edit /> },
  { id: 'settings', label: 'Settings', icon: <Settings /> },
  { id: 'div', isDivider: true },
  { id: 'delete', label: 'Delete', variant: 'danger' },
];

<OptionMenu 
  trigger={<button>Actions</button>} 
  options={options} 
/>
```

### Nested Menus
```tsx
const options = [
  { 
    id: 'view', 
    label: 'View', 
    children: [
      { id: 'lg', label: 'Large Icons' },
      { id: 'sm', label: 'Small Icons' },
    ]
  },
  { id: 'refresh', label: 'Refresh' },
];

<OptionMenu trigger={<Button>Context</Button>} options={options} />
```

---

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `trigger` | `ReactElement` | — | The element that opens the menu |
| `options` | `MenuOption[]` | — | Array of menu items |
| `placement` | `string` | `'bottom-start'` | Preferred opening side |
| `triggerType` | `'click' \| 'hover'` | `'click'` | Interaction type |
| `blur` | `boolean` | `false` | Enable glassmorphism |
| `theme` | `'light' \| 'dark'` | — | Force a specific theme |
| `closeOnItemClick`| `boolean` | `true` | Close after clicking an option |
| `width` | `string \| number` | — | Custom fixed width |

### MenuOption
| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | `string \| number` | Unique ID |
| `label` | `string` | Display text |
| `icon` | `ReactNode` | Leading icon |
| `rightSection`| `ReactNode` | Trailing content (e.g., shortcut) |
| `variant` | `'default' \| 'danger'` | Visual style |
| `isDivider` | `boolean` | If true, renders a separator |
| `children` | `MenuOption[]` | Nested items (submenu) |
| `onClick` | `function` | Item click handler |
