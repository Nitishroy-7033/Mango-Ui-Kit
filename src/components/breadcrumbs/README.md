# Breadcrumbs 🥭

A navigation utility used to show the user's current location within a hierarchy.

## Features
- 🏷️ **Clear Hierarchy**: Easily indicate where the user is in the app.
- ✨ **Custom Separators**: Use default chevron or pass your own separator.
- 🎨 **Icon support**: Optional icons next to each breadcrumb link.
- 🔗 **Smart Links**: Automatically turns all but the last item into clickable links.

## Usage

```tsx
import { Breadcrumbs } from 'mango-ui-kit';
import { Home, Folder, FileText } from 'lucide-react';

const myPath = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Documents', href: '/docs', icon: Folder },
  { label: 'Requirements.pdf', icon: FileText },
];

<Breadcrumbs items={myPath} />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` | `[]` | List of items to display. |
| `separator` | `ReactNode` | `<ChevronRight />` | Element to display between items. |
| `className` | `string` | - | Extra CSS classes for the nav container. |

### BreadcrumbItem (Type)
- `label` (string): Text to display.
- `href` (string): Target URL for the link.
- `icon` (LucideIcon): Optional icon component.
