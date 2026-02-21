# Dropdown 🥭

A massive, premium selection component designed for high-end SaaS dashboards. Supports multi-selection, search, lazy loading, and advanced trigger interactions.

## Features
- ✅ **Multi-select**: Support for selecting multiple items with modern tag visualization.
- 🔍 **Integrated Search**: Real-time filtering for long option lists.
- ♻️ **Lazy Loading**: Infinite scroll support (hits API/callback at configurable scroll thresholds).
- 🖱️ **Triggers**: Open via `click`, `hover`, or `contextMenu` (Right-click).
- 🏗️ **Placement**: Smart positioning for `top` and `bottom` opening directions.
- 🎨 **Premium Styling**: Multiple variants (`solid`, `outline`, `ghost`, `plain`) and sizes.
- 🖼️ **Rich Metadata**: Options support icons, descriptions, and custom rendering.
- 🪄 **Bridge Interaction**: Integrated hover bridge keeps the menu open even on visual gaps.

## Usage

### Simple Searchable Dropdown
```tsx
import { Dropdown } from 'mango-ui-kit';
import { useState } from 'react';

const options = [
  { id: '1', name: 'Room 101', details: 'AC • Available' },
  { id: '2', name: 'Room 405', details: 'Non-AC • Occupied' },
];

function Basic() {
  const [val, setVal] = useState('');
  return <Dropdown value={val} onChange={setVal} options={options} searchable label="Rooms" />;
}
```

### Multi-select with Custom Trigger
```tsx
import { Dropdown } from 'mango-ui-kit';
import { Shield } from 'lucide-react';

<Dropdown 
  multiple 
  placeholder="Select Permissions" 
  variant="outline" 
  icon={Shield}
  options={permissionOptions} 
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `DropdownOption[]` | `[]` | Array of options to display. |
| `value` | `string \| string[]` | - | Current selection (array if `multiple` is true). |
| `onChange` | `(value: any) => void` | - | Callback when selection changes. |
| `placeholder` | `string` | `'Select option'` | Text shown when no selection is made. |
| `multiple` | `boolean` | `false` | Enable multi-selection. |
| `searchable` | `boolean` | `false` | Enable search bar inside menu. |
| `trigger` | `'click' \| 'hover' \| 'contextMenu'` | `'click'` | How the menu is opened. |
| `placement` | `'bottom' \| 'top'` | `'bottom'` | Direction the menu opens. |
| `variant` | `'default' \| 'outline' \| 'ghost' \| 'plain'` | `'default'` | Visual style of the trigger. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the trigger button. |
| `loading` | `boolean` | `false` | Shows spinner and disabled state. |
| `hasMore` | `boolean` | `false` | Used for infinite scroll. |
| `onLoadMore` | `() => void` | - | Triggered when scrolled to threshold. |
| `showLabel` | `boolean` | `true` | Show/hide the internal menu header label. |
| `footer` | `ReactNode` | - | Content at the bottom of the menu. |
| `maxHeight` | `number \| string` | `300` | Max height of the options list. |

## DropdownOption Object
- `id` (string | number): Unique identifier.
- `name` (string): Display text.
- `details` (string, optional): Secondary text.
- `icon` (ReactNode, optional): Icon displayed next to name.
- `disabled` (boolean, optional): Disable specific option.
- `group` (string, optional): (Future use) for categorized options.

## Custom Rendering
You can use the `renderOption` prop to take full control of the item UI:
```tsx
<Dropdown 
  renderOption={(option, isSelected) => (
    <div className="custom-cell">
      <strong>{option.name}</strong>
      <span>{option.customData}</span>
    </div>
  )} 
/>
```
