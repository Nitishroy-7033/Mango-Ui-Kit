# Sidebar 🥭

A specialized vertical navigation component for dashboards and applications.

## Features
- 📂 **Sectioned Navigation**: Organize links into logical groups with headers.
- ✨ **Interactive**: Support for clicks, active states, and custom badges on links.
- 📱 **Mobile Ready**: Built-in overlay and collapse mechanism for small screens.
- 🧱 **Template Slots**: Custom logo and footer areas.

## Usage

```tsx
import { Sidebar } from 'mango-ui-kit';
import { Home, User, Mail, Settings } from 'lucide-react';

const mySections = [
  {
    title: 'Main',
    links: [
      { label: 'Dashboard', icon: <Home />, path: '/', active: true },
      { label: 'Messages', icon: <Mail />, path: '/mail', badge: '12' },
    ]
  },
  {
    title: 'Account',
    links: [
      { label: 'Profile', icon: <User />, path: '/profile' },
      { label: 'Settings', icon: <Settings />, path: '/settings' },
    ]
  }
];

<Sidebar 
  sections={mySections} 
  logo={<span>Logo 🥭</span>}
  isOpen={true} 
  onClose={() => setSidebarOpen(false)}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `sections` | `SidebarSection[]` | `[]` | List of navigation sections. |
| `isOpen` | `boolean` | `false` | Controls sidebar visibility on mobile. |
| `onClose` | `() => void` | - | Callback for closing the sidebar or clicking the overlay. |
| `logo` | `ReactNode` | - | Content for the top-left area. |
| `footer` | `ReactNode` | - | Content for the bottom area. |
| `className` | `string` | - | Additional CSS classes for the sidebar container. |

### SidebarSection (Type)
- `title` (string): Optional header for the section.
- `links` (SidebarLink[]): Array of navigation items.

### SidebarLink (Type)
- `label` (string): Link text.
- `icon` (ReactNode): Icon next to the text.
- `path` (string): URL path (optional if using `onClick`).
- `active` (boolean): If true, highlights the link.
- `badge` (string/number): Optional badge next to the label.
- `onClick` (function): Custom click handler.
