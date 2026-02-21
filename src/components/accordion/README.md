# Accordion 🥭

A vertically collapsing divider component used to display toggleable content sections.

## Features
- 💫 **Smooth transitions**: CSS-animated opening and closing.
- 🔗 **Multiple modes**: Support for "single-open" or "allow multiple-open" behaviors.
- 🎨 **Icon support**: Optional icons next to titles.
- 🏁 **Initial state**: Configure which items are open by default.

## Usage

```tsx
import { Accordion } from 'mango-ui-kit';
import { HelpCircle, Shield, Settings } from 'lucide-react';

const faqItems = [
  { title: 'General Info', content: 'Details here...', icon: HelpCircle },
  { title: 'Privacy Policy', content: 'Our policy...', icon: Shield },
  { title: 'Preferences', content: 'Update your settings.', icon: Settings },
];

<Accordion 
  items={faqItems} 
  allowMultiple={false} 
  defaultOpen={[0]}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `AccordionItem[]` | `[]` | List of items to display. Each item needs `title` and `content`. |
| `allowMultiple`| `boolean` | `false` | If true, multiple panels can be open simultaneously. |
| `defaultOpen` | `number[]` | `[0]` | Indices of items that should be open by default. |
| `className` | `string` | - | Extra CSS classes for container. |

### AccordionItem (Type)
- `title` (string): Header text.
- `content` (ReactNode): Body content.
- `icon` (LucideIcon): Optional icon component.
