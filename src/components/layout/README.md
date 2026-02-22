# Layout Components (Box, Row, Column, Col)

A set of powerful layout primitives inspired by modern UI frameworks like **Flutter** and **React Native**, designed for building flexible, responsive, and performance-first designs.

## ✨ Features

- **🛶 Flutter-like API**: Familiar `mainAxisAlignment` and `crossAxisAlignment` for intuitive flexbox control.
- **🚀 Performance**: Minimal DOM nodes and optimized styling logic.
- **🎨 Shorthand Syntax**: Rapidly apply padding, margin, background, and shadows via props.
- **📱 Responsive Grid**: A 12-column grid system (`Col`) with breakpoint support.
- **📦 Polymorphic**: Use the `as` prop on `Box` to render as any HTML tag.

---

## 📦 Box

The most basic building block. A utility-first container that supports layout, spacing, and styling shorthand.

```tsx
import { Box } from 'mango-ui-kit';

<Box 
  p="20px" 
  bg="var(--primaryContainercolor)" 
  radius="12px" 
  shadow="md"
  flex={1} // Supports proportional resizing
>
  Your Content
</Box>
```

---

## 🛶 Row & Column

Flex-based containers for horizontal and vertical layouts. They use a Flutter-inspired alignment system.

### Row (Horizontal)
```tsx
import { Row, Box } from 'mango-ui-kit';

<Row 
  mainAxisAlignment="spaceBetween" 
  crossAxisAlignment="center" 
  gap="16px"
>
  <Box>Left</Box>
  <Box>Middle</Box>
  <Box>Right</Box>
</Row>
```

### Column (Vertical)
```tsx
import { Column, Box } from 'mango-ui-kit';

<Column 
  mainAxisAlignment="center" 
  crossAxisAlignment="stretch" 
  height="400px"
  gap="12px"
>
  <Box bg="red" height="50px" />
  <Box bg="blue" height="50px" />
  <Box bg="green" height="50px" />
</Column>
```

---

## 📱 12-Column Grid (Col)

Use `Col` within a `Row` to build traditional grid-based layouts.

```tsx
import { Row, Col, Box } from 'mango-ui-kit';

<Row gap="20px">
  <Col span={{ xs: 12, md: 8 }}>
    <Box bg="#eee" p="20px">Main Content (8 cols on Tablet+)</Box>
  </Col>
  <Col span={{ xs: 12, md: 4 }}>
    <Box bg="#ddd" p="20px">Sidebar (4 cols on Tablet+)</Box>
  </Col>
</Row>
```

---

## 🛠 Props Guide

### Common Props (Box, Row, Column, Col)
| Prop | Type | Description |
| :--- | :--- | :--- |
| `p`, `px`, `py` | `string \| number` | Padding (all, horizontal, vertical) |
| `m`, `mx`, `my` | `string \| number` | Margin (all, horizontal, vertical) |
| `bg` | `string` | Background color |
| `radius` | `string \| number` | Border radius |
| `shadow` | `xs` to `2xl` | Shadow preset |
| `flex` | `string \| number` | Proportional resizing (flex-grow/shrink) |
| `width`, `height`| `string \| number`| Fixed dimensions |

### Row / Column Specific
| Prop | Type | Description |
| :--- | :--- | :--- |
| `mainAxisAlignment`| `MainAxisAlignment` | Primary axis alignment: `start`, `end`, `center`, `spaceBetween`, `around`, `evenly` |
| `crossAxisAlignment`| `CrossAxisAlignment` | Secondary axis alignment: `start`, `end`, `center`, `baseline`, `stretch` |
| `gap` | `string \| number` | Space between items |
| `wrap` | `string` | Flex wrap: `wrap`, `nowrap`, `wrap-reverse` |
| `fullWidth` | `boolean` | Whether to take 100% width (default: true) |

### Col Specific
| Prop | Type | Description |
| :--- | :--- | :--- |
| `span` | `number \| object` | 1-12 span or `{ xs, sm, md, lg, xl }` object |
| `order` | `number` | Flex order |
