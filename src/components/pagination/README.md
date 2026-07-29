# Pagination

A versatile page navigation component with multiple visual variants, sibling page logic, and customizable navigation labels.

## Features
- **Variants**: Classic, Modern, Pills, Minimal, Simple, and Ghost.
- **Sibling Logic**: Configurable number of page buttons around the current page with ellipsis for large ranges.
- **Navigation Controls**: First/Last and Prev/Next buttons with optional text labels.
- **Custom Labels**: Override any navigation button with custom React nodes.
- **Sizes**: Small, Medium, and Large.
- **Alignment**: Left, Center, or Right.
- **Custom Accent Color**: Override the active page color.

## Usage

```tsx
import { Pagination } from 'mango-ui-kit';
import { useState } from 'react';

const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
  variant="modern"
  size="md"
/>

<Pagination
  currentPage={page}
  totalPages={50}
  onPageChange={setPage}
  variant="pills"
  showFirstLast={false}
  siblingCount={2}
  color="#10b981"
/>

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
  variant="simple"
  showLabels
  labels={{ prev: 'Previous', next: 'Next' }}
  align="left"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | — | Current active page (1-indexed) |
| `totalPages` | `number` | — | Total number of pages |
| `onPageChange` | `(page: number) => void` | — | Callback when page changes |
| `variant` | `'classic' \| 'modern' \| 'pills' \| 'minimal' \| 'simple' \| 'ghost'` | `'modern'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of pagination buttons |
| `siblingCount` | `number` | `1` | Pages to show around current page |
| `showFirstLast` | `boolean` | `true` | Show First and Last buttons |
| `showLabels` | `boolean` | `false` | Show Prev/Next text labels |
| `labels` | `{ first?, last?, prev?, next? }` | — | Custom label nodes |
| `disabled` | `boolean` | `false` | Disable all interaction |
| `align` | `'left' \| 'center' \| 'right'` | `'center'` | Horizontal alignment |
| `color` | `string` | — | Custom accent color for active page |
| `className` | `string` | — | Additional CSS class |