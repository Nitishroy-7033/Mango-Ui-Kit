# TagsInput

A compound component for entering and managing multiple tags. Built with a context-based architecture for flexible layout control.

## Features
- **Controlled / Uncontrolled**: Use `value` for controlled mode or `defaultValue` for uncontrolled.
- **Compound Components**: `TagsInput`, `TagsInputLabel`, `TagsInputInput`, `TagsInputItem`, `TagsInputItemText`, `TagsInputItemDelete`, `TagsInputClear`.
- **Keyboard Navigation**: Arrow keys, Backspace/Delete, Home/End, and Enter for tag management.
- **Validation**: Custom `onValidate` function to accept or reject tags.
- **Editable Tags**: Click on a tag text to edit it inline.
- **Paste & Delimiter**: Paste comma-separated values to add multiple tags at once.
- **Max Limit**: Enforce a maximum number of tags.
- **Blur Behavior**: Choose to add the current input or clear it on blur.

## Usage

```tsx
import { TagsInput, TagsInputLabel, TagsInputInput, TagsInputItem, TagsInputItemText, TagsInputItemDelete, TagsInputClear } from 'mango-ui-kit';

<TagsInput defaultValue={['React', 'TypeScript']} max={5}>
  <TagsInputLabel>Skills</TagsInputLabel>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
    <TagsInputItem value="React">
      <TagsInputItemText>React</TagsInputItemText>
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputItem value="TypeScript">
      <TagsInputItemText>TypeScript</TagsInputItemText>
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput placeholder="Add skill..." />
  </div>
  <TagsInputClear />
</TagsInput>

{/* Controlled with validation */}
<TagsInput
  value={tags}
  onValueChange={setTags}
  onValidate={(v) => v.length >= 2}
  addOnPaste
  delimiter=","
>
  <TagsInputInput placeholder="Type and press Enter" />
</TagsInput>
```

## Props

### TagsInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string[]` | `[]` | Initial tags (uncontrolled) |
| `value` | `string[]` | — | Current tags (controlled) |
| `onValueChange` | `(value: string[]) => void` | — | Callback when tags change |
| `onValidate` | `(value: string) => boolean` | — | Validation function for new tags |
| `addOnPaste` | `boolean` | `true` | Add tags on paste |
| `addOnTab` | `boolean` | `false` | Add tags on Tab key |
| `disabled` | `boolean` | `false` | Disable the input |
| `editable` | `boolean` | `true` | Allow inline tag editing |
| `blurBehavior` | `'clear' \| 'add'` | `'add'` | Behavior on input blur |
| `delimiter` | `string` | `','` | String to split pasted content |
| `max` | `number` | — | Maximum number of tags |
| `readOnly` | `boolean` | `false` | Read-only mode |
| `className` | `string` | — | Additional CSS class |

### Sub-components

All sub-components support standard HTML attributes and an `asChild` prop for render delegation.