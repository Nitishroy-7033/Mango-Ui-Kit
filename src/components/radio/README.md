# Radio

A highly polished radio button component for single-choice selections, featuring a smooth center-dot expansion animation.

## Features
- **Fluid Animation**: Center dot scales smoothly when selected.
- **Consistent Design**: Matches the Checkbox and Input library system.
- **Variants**: Solid, Outlined, and Soft variants.
- **Group Logic**: `RadioGroup` handles single-selection logic and keyboard navigation automatically.

## Usage

```tsx
import { Radio, RadioGroup } from 'mango-ui-kit';

<RadioGroup 
  label="Delivery Method"
  defaultValue="express"
  onChange={(value) => console.log(value)}
>
  <Radio value="standard" label="Standard" description="3-5 business days" />
  <Radio value="express" label="Express" description="1-2 business days" />
  <Radio value="priority" label="Priority" description="Overnight" />
</RadioGroup>
```

## Props

### Radio Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outlined' \| 'soft'` | `'solid'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size category |
| `label` | `ReactNode` | - | Primary text |
| `description` | `ReactNode` | - | Secondary helper text |
| `error` | `boolean \| string` | - | Error state indicator |

### RadioGroup Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Layout orientation |
| `value` | `string` | - | Controlled selected value |
| `gap` | `string \| number` | - | Space between radio items |
