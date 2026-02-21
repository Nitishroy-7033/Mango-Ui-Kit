# Input 🥭

A standard text input component with labeling and error state support.

## Features
- 🏷️ **Labeled**: Built-in support for input labels.
- 🚨 **Error States**: Displays descriptive error messages with visual highlighting.
- 🎨 **Theme Consistent**: Matches the global design system (rounded corners, dark mode support).
- ⌨️ **Standard Props**: Accepts all standard HTML input attributes.

## Usage

```tsx
import { Input } from 'mango-ui-kit';

<Input 
  label="Email Address" 
  placeholder="Enter your email" 
  type="email" 
  error="Please enter a valid email"
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | The label text displayed above the input. |
| `error` | `string` | - | Error message to display below the input. Highlights border in red. |
| `...props`| `InputHTMLAttributes`| - | Supports all standard input attributes (placeholder, type, value, onChange, etc.). |
