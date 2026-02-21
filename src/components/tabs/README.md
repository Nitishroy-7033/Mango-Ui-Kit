# Tabs 🥭

A component for organizing content into multiple views that can be toggled through a top navigation list.

## Features
- ✨ **Animated**: Smooth border transition for active tabs.
- 🎨 **Icon support**: Optional icons next to tab labels.
- 🏁 **Initial state**: Set the default active tab.
- 🔄 **Managed state**: Handles active tab switching internally with change callback.

## Usage

```tsx
import { Tabs } from 'mango-ui-kit';
import { User, Settings, Bell } from 'lucide-react';

const myTabs = [
  { id: 'profile', label: 'Profile', content: <ProfilePanel />, icon: User },
  { id: 'settings', label: 'Settings', content: <SettingsPanel />, icon: Settings },
  { id: 'alerts', label: 'Alerts', content: <AlertsPanel />, icon: Bell },
];

<Tabs tabs={myTabs} defaultTab="profile" />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tabs` | `TabItem[]` | `[]` | List of tabs. Each tab needs `id`, `label`, and `content`. |
| `defaultTab` | `string` | First Tab ID | The ID of the tab to be active on initial render. |
| `onChange` | `(id: string) => void`| - | Callback triggered when the active tab changes. |
| `className` | `string` | - | Additional CSS classes for the tabs container. |

### TabItem (Type)
- `id` (string): Unique identifier for the tab.
- `label` (string): Text shown on the tab button.
- `content` (ReactNode): Panel content to show when active.
- `icon` (LucideIcon): Optional icon component.
