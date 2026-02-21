# Breadcrumbs 🥭

A premium breadcrumb navigation component with support for icons, custom styling, variants, and smart collapsing.

## Features
- ✨ **Variants**: Choose between `default`, `filled`, `outline`, and `ghost`.
- 📐 **Sizing**: Support for `sm`, `md`, and `lg`.
- 🔍 **Smart Collapsing**: Use `maxItems` to automatically hide intermediate pages in long paths.
- 🖼️ **Icon Support**: Add icons to any item (supports Lucide components or custom React nodes).
- 🎨 **Deep Customization**: Control `activeColor`, `textColor`, `hoverColor`, and `bgColor`.
- 🎭 **Hover Effects**: Premium micro-animations for links (lift effect and icon scaling).
- 🧱 **Separators**: Use any React node as a custom separator.

## Usage

### Basic Usage
```tsx
import { Breadcrumbs } from 'mango-ui-kit';
import { Home } from 'lucide-react';

const items = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Products', href: '/products' },
  { label: 'Mango UI Kit' }
];

function Navbar() {
  return <Breadcrumbs items={items} variant="filled" />;
}
```

### Collapsed Architecture
```tsx
<Breadcrumbs 
  items={longPathItems} 
  maxItems={3} 
  variant="outline" 
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` | `[]` | Array of breadcrumb items. |
| `variant` | `'default' \| 'filled' \| 'outline' \| 'ghost'` | `'default'` | Visual structure of the breadcrumb. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size. |
| `maxItems` | `number` | `0` | Max items to show before collapsing (0 = disabled). |
| `activeColor` | `string` | - | Text color for the last (active) item. |
| `textColor` | `string` | - | Text color for idle items. |
| `hoverColor` | `string` | - | Text color on hover. |
| `bgColor` | `string` | - | Background color for container. |
| `separator` | `ReactNode` | `<ChevronRight />` | Custom separator between items. |
| `showLastSeparator` | `boolean` | `false` | Show separator after the last item. |

## BreadcrumbItem Object
- `label` (string): Text display.
- `href` (string, optional): Navigation link.
- `icon` (ReactNode, optional): Icon before text.
- `color` (string, optional): Overrides item text color.
