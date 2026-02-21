# Checkbox

A premium, interactive checkbox component with smooth "Mango" flavoured scale animations and support for indeterminate states.

## Features
- **Smooth Animations**: High-quality scale animation on check/uncheck.
- **State Support**: Indeterminate state for "Select All" patterns.
- **Variants**: Solid, Outlined, and Soft (glassmorphism style).
- **Groups**: `CheckboxGroup` for managing multiple selections easily.
- **Accessibility**: Built with semantic HTML and full keyboard support.

## Usage

```tsx
import { Checkbox, CheckboxGroup } from 'mango-ui-kit';

// Single Checkbox
<Checkbox label="Remember me" variant="solid" />

// Checkbox Group
<CheckboxGroup 
  label="Skills" 
  defaultValue={['react']}
  onChange={(values) => console.log(values)}
>
  <Checkbox value="react" label="React" />
  <Checkbox value="typescript" label="TypeScript" />
  <Checkbox value="mango" label="Mango UI" />
</CheckboxGroup>
```

## Props

### Checkbox Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outlined' \| 'soft'` | `'solid'` | Visual style of the checkbox |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the checkbox |
| `label` | `ReactNode` | - | Label displayed next to the box |
| `description` | `ReactNode` | - | Helper text below the label |
| `indeterminate` | `boolean` | `false` | Shows a minus icon instead of a check |
| `error` | `boolean \| string` | - | Shows error state or error message |

### CheckboxGroup Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Layout direction |
| `value` | `string[]` | - | Controlled value array |
| `onChange` | `(value: string[]) => void` | - | Change callback |
| `gap` | `string \| number` | - | Space between items |
