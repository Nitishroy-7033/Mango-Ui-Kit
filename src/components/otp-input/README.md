# OTPInput

A one-time password input component with individual character boxes. Supports auto-focus progression, paste, keyboard navigation, and validation states.

## Features
- **Auto Advance**: Focus moves to the next box automatically on input.
- **Backspace Navigation**: Pressing Backspace on an empty box goes to the previous one.
- **Paste Support**: Paste a full OTP code — digits distribute across boxes.
- **Keyboard Navigation**: Arrow keys to move left and right between boxes.
- **Variants**: Outlined, Filled, and Underlined box styles.
- **Status Messages**: Supports label, error, and helper text.

## Usage

```tsx
import { OTPInput } from 'mango-ui-kit';
import { useState } from 'react';

const [otp, setOtp] = useState('');

<OTPInput
  length={6}
  value={otp}
  onChange={setOtp}
  onComplete={(value) => console.log('OTP entered:', value)}
  label="Enter verification code"
  variant="outlined"
  size="md"
/>

<OTPInput
  length={4}
  value={pin}
  onChange={setPin}
  variant="filled"
  error="Invalid code. Please try again."
/>

<OTPInput
  length={6}
  value={code}
  onChange={setCode}
  variant="underlined"
  disabled
  helperText="Code has been sent to your email"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `length` | `number` | `6` | Number of input boxes |
| `value` | `string` | — | Current OTP value |
| `onChange` | `(value: string) => void` | — | Callback when value changes |
| `onComplete` | `(value: string) => void` | — | Callback when all boxes are filled |
| `disabled` | `boolean` | `false` | Disable all inputs |
| `variant` | `'outlined' \| 'filled' \| 'underlined'` | `'outlined'` | Visual style of boxes |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the boxes |
| `label` | `string` | — | Label above the OTP group |
| `error` | `string` | — | Error message below the boxes |
| `helperText` | `string` | — | Helper text below the boxes |
| `className` | `string` | — | Additional CSS class |