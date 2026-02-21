# Dropdown 🥭

A premium selection component with support for search, rich option metadata, and footer actions.

## Features
- 🔍 **Searchable**: Built-in filter mechanism for long lists.
- 🖼️ **Rich Options**: Each option can have an icon and secondary details text.
- 🧱 **Structured**: Support for internal labels and footers.
- ✨ **Animated**: Smooth dropdown opening with arrow rotation.
- 🔏 **Single Select**: Managed state for selecting one option.

## Usage

```tsx
import { Dropdown } from 'mango-ui-kit';
import { User, Shield } from 'lucide-react';
import { useState } from 'react';

function MyForm() {
  const [role, setRole] = useState('user');

  const options = [
    { id: 'user', name: 'Standard User', details: 'Basic access', icon: <User size={16} /> },
    { id: 'admin', name: 'Administrator', details: 'Full system access', icon: <Shield size={16} /> },
  ];

  return (
    <Dropdown 
      value={role} 
      onChange={setRole} 
      options={options} 
      label="Choose Role" 
      searchable 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `DropdownOption[]`| `[]` | List of options to display. |
| `value` | `string` | - | ID of the currently selected option. |
| `onChange` | `(id: string) => void`| - | Callback triggered when an option is selected. |
| `placeholder` | `string` | `'Select option'` | Text displayed when no option is selected. |
| `label` | `string` | `'Select'` | Internal label shown inside the menu. |
| `icon` | `ElementType` | - | Optional icon for the trigger button. |
| `searchable` | `boolean` | `false` | Enables a search bar inside the menu. |
| `footer` | `ReactNode` | - | Optional content at the bottom of the menu. |

### DropdownOption (Type)
- `id` (string): Unique identifier.
- `name` (string): Primary label.
- `details` (string): Secondary descriptive text.
- `icon` (ReactNode): Visual icon for the option.
