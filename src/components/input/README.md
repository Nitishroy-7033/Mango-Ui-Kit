# Input

A powerful, multi-purpose text entry component with support for labels, helper text, icons, and advanced features like country selectors and word counts.

## Features
- **Modern Variants**: Outlined, Filled, Borderless, and Underlined.
- **Inner Labels**: Support for floating-style inner labels for compact forms.
- **Addons**: Join buttons or text seamlessly to the start or end of the input.
- **Advanced Metadata**: Built-in character and word counting with limits.
- **Country Selector**: Interactive dropdown with flags for phone number inputs.
- **Multline**: Built-in support for auto-resizing textareas.

## Usage

```tsx
import { Input } from 'mango-ui-kit';
import { Mail } from 'lucide-react';

<Input 
  label="Email" 
  placeholder="you@example.com" 
  prefixIcon={<Mail size={16} />} 
  variant="outlined"
/>

<Input 
  innerLabel="Search" 
  actionButton={{ 
    label: "Search", 
    variant: "primary" 
  }} 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `InputVariant` | `'outlined'` | Visual style |
| `label` | `string` | - | Label above the input |
| `innerLabel` | `string` | - | Compact label inside the input |
| `prefixIcon` | `ReactNode` | - | Icon at the start |
| `suffixIcon` | `ReactNode` | - | Icon at the end |
| `actionButton`| `ActionButton`| - | Joined button at the end |
| `showCount` | `boolean` | `false` | Shows char/word counter |
| `multiline` | `boolean` | `false` | Renders as a textarea |
| `error` | `string` | - | Error message below input |
| `loading` | `boolean` | `false` | Shows a loading spinner |
| `countrySelector`| `Selector` | - | Phone number country dropdown |
