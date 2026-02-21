# Button 🥭

A highly customizable, premium button component with support for various variants, sizes, icons, loading states, and hover effects.

## Features
- ✨ **7 Variants**: primary, secondary, outline, ghost, danger, dashed, link.
- 📏 **3 Sizes**: sm, md, lg.
- 🎨 **Theme Aware**: Supports global color scheme and custom overrides.
- 💫 **Hover Effects**: rotate, slide, scale, glow.
- 💬 **Auto-Tooltip**: Built-in tooltip support.
- 🔄 **Loading State**: Built-in spinner and disabled state.
- 🔘 **Icon Support**: Left/right icons or icon-only mode.

## Usage

```tsx
import { Button } from 'mango-ui-kit';
import { Send } from 'lucide-react';

function MyComponent() {
  return (
    <Button 
      variant="primary" 
      icon={<Send size={18} />} 
      hoverEffect="slide"
      onClick={() => console.log('Sent!')}
    >
      Send Message
    </Button>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ButtonVariant` | `'primary'` | The visual style of the button. |
| `size` | `ButtonSize` | `'md'` | The size of the button. |
| `isLoading` | `boolean` | `false` | Shows a loading spinner and disables the button. |
| `icon` | `ReactNode` | - | Icon to display (used with `iconPosition`). |
| `iconPosition` | `'start' \| 'end'` | `'start'` | Where to place the `icon`. |
| `hoverEffect` | `ButtonHoverEffect` | `'none'` | Animation to play on hover (`rotate`, `slide`, `scale`, `glow`). |
| `leftIcon` | `ReactNode` | - | Explicitly set an icon on the left. |
| `rightIcon` | `ReactNode` | - | Explicitly set an icon on the right. |
| `iconOnly` | `boolean` | `false` | Makes the button square/circular for icons. |
| `fullWidth` | `boolean` | `false` | Button stretches to fill available width. |
| `rounded` | `ButtonRounded` | `'md'` | Border radius (`none`, `sm`, `md`, `lg`, `xl`, `full`). |
| `tooltip` | `string` | - | Text to show in a tooltip on hover. |
| `tooltipPosition`| `TooltipPosition` | `'top'` | Tooltip direction (`top`, `bottom`, `left`, `right`). |
| `bgColor` | `string` | - | Override background color. |
| `textColor` | `string` | - | Override text color. |
| `iconColor` | `string` | - | Override icon color. |
| `borderColor` | `string` | - | Override border color. |

---

# SplitButton

A button group consisting of a main action and a dropdown menu for additional actions.

## Usage

```tsx
import { SplitButton } from 'mango-ui-kit';
import { Mail, Edit, Trash2 } from 'lucide-react';

<SplitButton
  onClick={handleMainAction}
  actions={[
    { label: 'Edit', icon: <Edit />, onClick: handleEdit },
    { label: 'Delete', icon: <Trash2 />, onClick: handleDelete, danger: true },
  ]}
>
  Main Action
</SplitButton>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `actions` | `SplitButtonAction[]` | `[]` | Array of actions for the dropdown. |
| `children` | `ReactNode` | - | Text/content for the main button. |
| `variant` | `ButtonVariant` | `'primary'` | Visual style for both buttons. |
| `size` | `ButtonSize` | `'md'` | Size for both buttons. |
| `isLoading` | `boolean` | `false` | Shows loading spinner on main button. |
| `disabled` | `boolean` | `false` | Disables both buttons. |
