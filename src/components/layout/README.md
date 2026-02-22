# Layout Components (Box, Row, Col)

A set of powerful layout primitives for building grid systems, containers, and flexbox-based designs with a performance-first mindset.

## ✨ Features

- **🚀 Performance**: Minimal DOM nodes and optimized styling logic.
- **🎨 Shorthand Syntax**: Rapidly apply padding, margin, background, and shadows via props.
- **📱 12-Column Grid**: Responsive `span` based grid system for consistent layouts.
- **📦 Polymorphic**: Use the `as` prop on `Box` to render as any HTML tag.
- **🛠 Flexible Alignment**: One-prop access to `justify-content` and `align-items`.

---

## 📦 Box

The most basic building block. A utility-first container.

```tsx
import { Box } from 'mango-ui-kit';

<Box 
  p="20px" 
  bg="#fff9e6" 
  radius="12px" 
  shadow="md"
  border="1px solid #ffc107"
>
  Your Content
</Box>
```

---

## 🛶 Row & Col

Build complex grids with the Flex-based `Row` and `Col` system.

```tsx
import { Row, Col, Box } from 'mango-ui-kit';

<Row justify="between" align="center" gap="16px">
  <Col span={8}>
    <Box bg="#eee" p="20px">Primary Content (Span 8)</Box>
  </Col>
  <Col span={4}>
    <Box bg="#ddd" p="20px">Sidebar (Span 4)</Box>
  </Col>
</Row>
```

---

## 🛠 Props Guide

### Common Props (Available on Box, Row, Col)
| Prop | Description |
| :--- | :--- |
| `p`, `px`, `py` | Padding / Padding Horizontal / Padding Vertical |
| `m`, `mx`, `my` | Margin / Margin Horizontal / Margin Vertical |
| `bg` | Background color |
| `radius` | Border radius |
| `shadow` | `sm`, `md`, `lg`, `xl` or custom string |
| `width / height`| Width and height values |

### Row Specific
| Prop | Description |
| :--- | :--- |
| `justify` | `start`, `end`, `center`, `between`, `around`, `evenly` |
| `align` | `start`, `end`, `center`, `baseline`, `stretch` |
| `gap` | Space between elements (horizontal and vertical) |
| `wrap` | `wrap`, `nowrap`, `wrap-reverse` |

### Col Specific
| Prop | Description |
| :--- | :--- |
| `span` | 1 to 12 (fraction of the 12-column grid) |
| `flex` | Custom flex string/number |
| `order` | Flex order |
