# Rating 🥭

A customizable star rating component used for gathering user feedback or displaying review scores.

## Features
- ⭐ **Interactive**: Support for clicking to set ratings.
- ✨ **Hover Effect**: Preview the score by hovering over stars.
- 🔏 **ReadOnly Mode**: Display scores without interaction.
- 📏 **Customizable**: Control the number of stars, their size, and labels.

## Usage

```tsx
import { Rating } from 'mango-ui-kit';
import { useState } from 'react';

function ReviewForm() {
  const [score, setScore] = useState(4);

  return (
    <Rating 
      value={score} 
      onChange={setScore} 
      max={5} 
      label="Your Review" 
      count={128} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `0` | The current selected rating value. |
| `max` | `number` | `5` | Total number of stars to display. |
| `onChange` | `(val: number) => void` | - | Callback triggered when a star is clicked. |
| `readOnly` | `boolean` | `false` | If true, disables interaction and hover effects. |
| `size` | `number` | `20` | Pixel size of each star. |
| `label` | `string` | - | Optional text description next to the stars. |
| `count` | `number` | - | Optional count of total reviews to display in parens (e.g. `(48)`). |
| `className` | `string` | - | Extra CSS classes for the container. |
