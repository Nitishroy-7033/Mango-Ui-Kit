# Accordion 🥭

A highly customizable, vertically collapsing component used to display toggleable content sections with multiple visual styles and granular layout control.

## Features
- 🎨 **5 Visual Variants**: `default`, `bordered`, `filled`, `separated`, `ghost`.
- 📏 **3 Sizes**: `sm`, `md`, `lg`.
- 💫 **Controlled Mode**: Manually manage open states with `activeItems`.
- 📍 **Layout Flexibility**: Change icon and arrow positions (left or right).
- 🔘 **Custom Icons**: Replace the default chevron with custom expand/collapse icons.
- 💊 **Rounded Corners**: Support for `none`, `sm`, `md`, `lg`, `xl`, and `full` radius.
- 🔏 **Disabled States**: Disable specific items from being toggled.

## Usage

```tsx
import { Accordion } from 'mango-ui-kit';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqItems = [
  { title: 'Payment Methods', content: 'We accept Visa, MC, and UPI.', icon: HelpCircle },
  { title: 'Refund Policy', content: '30-day money back guarantee.', id: 'refund' },
  { title: 'Archived (Disabled)', content: 'Locked content', disabled: true },
];

<Accordion 
  items={faqItems} 
  variant="separated" 
  size="lg"
  rounded="xl"
  expandIcon={<Plus />}
  collapseIcon={<Minus />}
  allowMultiple
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `AccordionItem[]` | `[]` | Array of content sections. |
| `variant` | `AccordionVariant` | `'default'` | Visual style (`default`, `bordered`, `filled`, `separated`, `ghost`). |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Padding and font-size scale. |
| `rounded` | `AccordionRounded` | `'lg'` | Border radius intensity. |
| `allowMultiple`| `boolean` | `false` | If true, multiple panels can be open simultaneously. |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the item's main `icon`. |
| `arrowPosition`| `'left' \| 'right'` | `'right'` | Position of the expansion chevron/icon. |
| `hideArrow` | `boolean` | `false` | Completely hides the expansion arrow. |
| `activeItems` | `number[]` | - | **Controlled Mode**: Array of currently open indices. |
| `onChange` | `(indices: number[]) => void` | - | Callback triggered when sections change. |
| `defaultOpen` | `number[]` | `[]` | Indices of items that should be open by default. |

### Color Customization Props

| Prop | Type | Description |
| --- | --- | --- |
| `accentColor` | `string` | Main accent color (e.g. for active borders). |
| `headerBg` | `string` | Background color of the header/trigger. |
| `contentBg` | `string` | Background color of the content area. |
| `titleColor` | `string` | Text color for the section title. |
| `contentColor`| `string` | Text color for the body content. |
| `iconColor` | `string` | Color of the section icon. |
| `arrowColor` | `string` | Color of the expansion arrow. |
| `borderColor` | `string` | Border color for the items. |

### AccordionItem (Type)
- `title` (string): Header text.
- `content` (ReactNode): Body content.
- `icon` (LucideIcon): Optional icon component.
- `disabled` (boolean): Prevents interaction if true.
- `id` (string | number): Optional unique identifier.
