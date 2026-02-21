# Card 🥭

A versatile container component for grouping content with a premium glassmorphism finish.

## Features
- 💎 **Glassmorphism Style**: Subtle blur and transparent background effects.
- ✨ **Hoverable**: Optional hover state with border highlighting.
- 🧱 **Structured**: Includes sub-components for header, title, and content.

## Usage

```tsx
import { Card, CardHeader, CardTitle, CardContent } from 'mango-ui-kit';

<Card hoverable>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    This is some content inside the premium card.
  </CardContent>
</Card>
```

## Components & Props

### Card
The main container.
- `hoverable` (boolean): If true, scales slightly and highlights border on hover.
- Supports all standard `HTMLDivElement` attributes.

### CardHeader
A wrapper for the top portion of the card.

### CardTitle
The primary heading of the card.

### CardContent
The main body area for content.
