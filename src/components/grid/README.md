# Grid

A powerful and flexible grid system for creating responsive layouts. Perfect for product galleries, dashboards, and media feeds.

## ✨ Features

- **📱 Fully Responsive**: Define columns for different breakpoints (`base`, `sm`, `md`, `lg`, `xl`).
- **⚡ Smart Loading**: Integrated shimmer/skeleton loaders for great perceived performance.
- **♾️ Infinite Scroll**: Detects when user reaches the bottom to trigger data fetching.
- **🔢 Numeric Pagination**: Built-in pagination bar for paged datasets.
- **🎨 Flexible Gaps**: Control row and column spacing independently.
- **🌓 Theme Adaptive**: Designed to look great in both light and dark modes.

---

## 📦 Installation

```tsx
import { Grid } from 'mango-ui-kit';
```

---

## 🚀 Usage

### Basic Fixed Grid
```tsx
<Grid cols={3} gap="20px">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Responsive Product Gallery
```tsx
<Grid 
  cols={{ base: 1, sm: 2, md: 3, lg: 4 }} 
  gap="24px"
>
  {products.map(p => <ProductCard key={p.id} {...p} />)}
</Grid>
```

### Async Grid with Shimmer
```tsx
<Grid loading={true} loadingType="shimmer" skeletonCount={8} cols={4} />
```

---

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Items to display in the grid |
| `cols` | `number \| object` | `3` | Number of columns. Support responsive object |
| `gap` | `string \| number` | `'20px'` | Spacing between all items |
| `rowGap` | `string \| number` | — | Vertical spacing override |
| `colGap` | `string \| number` | — | Horizontal spacing override |
| `loading` | `boolean` | `false` | Enable loading state |
| `loadingType` | `string` | `'shimmer'`| `spinner`, `skeleton`, `shimmer` |
| `maxHeight` | `string \| number`| — | Enable scrolling within a fixed height |
| `pagination` | `object` | — | Pagination config (`current`, `total`, `pageSize`, `onChange`) |
| `onScrollBottom`| `function` | — | Triggered when scrolled to end (Infinite Scroll) |
| `emptyState`| `ReactNode` | — | Content to show when the grid is empty |

### Responsive Column Object
```ts
{
  base: number; // Mobile / Default
  sm: number;   // 640px+
  md: number;   // 768px+
  lg: number;   // 1024px+
  xl: number;   // 1280px+
}
```
