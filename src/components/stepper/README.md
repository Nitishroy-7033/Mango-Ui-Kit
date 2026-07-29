# Stepper

A multi-step progress indicator for wizards and onboarding flows. Supports numbered, icon, dot, and pill display variants in horizontal or vertical orientation.

## Features
- **Variants**: Numbered, Icon, Dot, and Pill.
- **Orientation**: Horizontal (default) and Vertical layouts.
- **Step Status**: Completed, Active, Error, and Upcoming — auto-derived from `activeStep` or manually set per step.
- **Clickable Steps**: Optional `onStepClick` callback for navigation.
- **Connectors**: Animated lines between steps that match the completed color.
- **Optional Steps**: Mark steps as optional with an "(optional)" badge.
- **Custom Colors**: Override the active/completed accent color.

## Usage

```tsx
import { Stepper } from 'mango-ui-kit';
import { useState } from 'react';

const steps = [
  { title: 'Account', description: 'Create your account' },
  { title: 'Profile', description: 'Set up your profile' },
  { title: 'Payment', description: 'Add payment method' },
  { title: 'Done', description: 'Complete setup' },
];

const [active, setActive] = useState(0);

<Stepper steps={steps} activeStep={active} variant="numbered" />

<Stepper
  steps={steps}
  activeStep={active}
  variant="dot"
  orientation="vertical"
  onStepClick={setActive}
  color="#10b981"
/>

<Stepper
  steps={[
    { title: 'Cart', icon: <ShoppingCart size={16} /> },
    { title: 'Checkout', icon: <CreditCard size={16} /> },
    { title: 'Confirmation', icon: <CheckCircle size={16} /> },
  ]}
  activeStep={1}
  variant="icon"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `StepItem[]` | — | Array of step definitions |
| `activeStep` | `number` | `0` | Zero-indexed current active step |
| `variant` | `'numbered' \| 'icon' \| 'dot' \| 'pill'` | `'numbered'` | Visual variant |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of indicators and text |
| `onStepClick` | `(index: number) => void` | — | Makes steps clickable |
| `color` | `string` | — | Custom active/completed accent color |
| `className` | `string` | — | Additional CSS class |

### StepItem

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Step title |
| `description` | `string` | Optional description |
| `icon` | `ReactNode` | Custom icon (overrides number/dot) |
| `status` | `StepStatus` | Override status for this step |
| `optional` | `boolean` | Mark the step as optional |