# Command Palette (⌘K)

A professional, glassmorphic search and action overlay for high-productivity applications. Inspired by tools like Linear and Raycast.

## Features
- **Glassmorphism**: High-end translucent background with blur and saturation effects.
- **Keyboard Native**: Full control via `Arrow Keys`, `Enter`, and `Escape`.
- **Global Shortcut**: Recommended setup with `⌘/Ctrl + K`.
- **Smart Grouping**: Automatically sections your actions into categories (e.g., Navigation, Actions).
- **Shortcut Hints**: Displays visual keyboard hints for each command.

## Usage

```tsx
import { CommandPalette } from 'mango-ui-kit';

const actions = [
  { 
    id: 'settings', 
    label: 'Settings', 
    shortcut: ['⌘', ','], 
    icon: <Settings size={18} />, 
    group: 'Preferences',
    onSelect: () => navigate('/settings') 
  },
  // ... more actions
];

<CommandPalette 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  actions={actions} 
  placeholder="Search for something..."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controls visibility |
| `onClose`| `() => void` | - | Close event handler |
| `actions`| `Action[]` | `[]` | List of command objects |
| `placeholder`| `string` | - | Search input placeholder |
| `maxHeight`| `string` | - | Max scrollable height for list |

### Action Object
| Key | Type | Description |
|-----|------|-------------|
| `id` | `string` | Unique identifier |
| `label` | `string` | Display name |
| `description`| `string` | Subtitle text |
| `shortcut` | `string[]`| Keyboard keys to display |
| `icon` | `ReactNode`| Leading visual |
| `group` | `string` | Category name |
| `onSelect` | `() => void`| Logic to execute on click/enter |
| `disabled` | `boolean` | Grey out the option |
