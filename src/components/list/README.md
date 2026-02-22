# List & ListItem

A high-performance, feature-rich list system designed for displaying collections of data with support for various layouts, loading states, and pagination strategies.

## ✨ Features

- **📱 Versatile Layout**: Support for thumbnails (start), text content (center), and actions (end).
- **🌲 Nested Components**: Seamlessly integrate `Badge`, `Button`, `Avatar`, or any custom UI.
- **✨ Animated Shimmers**: Built-in skeleton/shimmer loading for modern perceived performance.
- **♾️ Smart Scrolling**: Support for both fixed-height scrollable areas and infinite scroll detection.
- **🔢 Numeric Pagination**: Integrated pagination bar with customizable behavior.
- **🕹️ Interactive States**: Hover effects, active/selected states, and disabled items.
- **🌓 Theme Engine**: Perfectly adaptive for light and dark environments.

---

## 📦 Installation

```tsx
import { List, ListItem } from 'mango-ui-kit';
```

---

## 🚀 Usage

### Basic Vertical List
```tsx
<List withDividers={true}>
  <ListItem title="User Profile" description="Change your settings" iconStart={<User />} />
  <ListItem title="Notifications" description="Manage alerts" iconStart={<Bell />} />
</List>
```

### Video Style (With Large Thumbnails)
```tsx
<List>
  <ListItem 
    title="Morning Jazz Relaxing Music" 
    description="2.4M views • 1 month ago" 
    iconStart={<img src="/thumb.jpg" style={{ width: 120, height: 68, borderRadius: 4 }} />}
    iconEnd={<MoreVertical />}
  />
</List>
```

### Async Loading with Shimmer
```tsx
<List loading={true} loadingType="shimmer" skeletonCount={5} />
```

---

## 🛠 Props

### List Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Usually a collection of `ListItem` components |
| `withDividers`| `boolean` | `true` | Show separators between items |
| `loading` | `boolean` | `false` | Enable loading state |
| `loadingType` | `string` | `'spinner'` | `spinner`, `skeleton`, `shimmer` |
| `maxHeight` | `string \| number`| — | Enable scrolling within a fixed height |
| `pagination` | `object` | — | Numeric pagination config (`current`, `total`, `pageSize`, `onChange`) |
| `onScrollBottom`| `function` | — | Triggered when scrolled to the end (Infinite Scroll) |

### ListItem Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `ReactNode` | — | Main primary text |
| `description` | `ReactNode` | — | Supporting secondary text |
| `iconStart` | `ReactNode` | — | Element at the beginning (Avatar, Icon, Thumbnail) |
| `iconEnd` | `ReactNode` | — | Element at the end (Button, Arrow, Badge) |
| `active` | `boolean` | `false` | Mark item as selected |
| `disabled` | `boolean` | `false` | Gray out and disable interaction |
| `hoverEffect` | `string` | `'background'` | `none`, `background`, `scale`, `glow` |
| `onClick` | `function` | — | Item click handler |
