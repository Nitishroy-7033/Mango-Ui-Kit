# MultiSelect 🥭

A specialized selector that allows users to pick multiple items from a list, displaying selections as removable chips.

## Features
- 🍟 **Chips Display**: Selected items are shown as tags/chips inside the trigger.
- 🔍 **Searchable**: Includes an inline search/filter box for the options list.
- ✅ **Checkbox Style**: Options list uses checks for visual clarity.
- ✨ **Animated**: Smooth scale-in transition for the dropdown.

## Usage

```tsx
import { MultiSelect } from 'mango-ui-kit';
import { useState } from 'react';

function TeamSettings() {
  const [selected, setSelected] = useState(['react', 'vue']);

  const techs = [
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue' },
    { id: 'angular', name: 'Angular' },
    { id: 'svelte', name: 'Svelte' },
  ];

  return (
    <MultiSelect 
      label="Technologies" 
      options={techs} 
      value={selected} 
      onChange={setSelected} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `Option[]` | `[]` | List of options to choose from. |
| `value` | `Array<string \| number>`| `[]` | Array of selected option IDs. |
| `onChange` | `(ids: any[]) => void` | - | Callback triggered when the selection changes. |
| `label` | `string` | - | Label text displayed above the component. |
| `placeholder` | `string` | `'Select options...'`| Text shown when no items are selected. |
| `className` | `string` | - | Extra CSS classes for the root container. |
