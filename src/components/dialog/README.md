# Dialog

A modal confirmation dialog with customizable icon, title, description, and action buttons. Supports focus trapping and backdrop dismissal.

## Features
- **Variants**: Primary, Success, Warning, Danger, and Info — each with a matching default icon and button color.
- **Focus Trap**: Automatically traps keyboard focus within the dialog when open.
- **Esc & Overlay Close**: Closes on Escape key and optional backdrop click.
- **Custom Icons**: Override the default variant icon or provide custom colors.
- **Action Buttons**: Primary and secondary buttons with loading and disabled states.
- **Scroll Lock**: Prevents background scrolling when the dialog is open.

## Usage

```tsx
import { Dialog } from 'mango-ui-kit';
import { useState } from 'react';

const [open, setOpen] = useState(false);

<Dialog
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Delete Account"
  description="Are you sure you want to delete your account? This action cannot be undone."
  variant="danger"
  primaryButton={{ label: 'Delete', onClick: () => handleDelete() }}
  secondaryButton={{ label: 'Cancel', onClick: () => setOpen(false) }}
/>

<Dialog
  isOpen={open}
  onClose={() => setOpen(false)}
  variant="success"
  icon={<CustomIcon />}
  iconBgColor="#10b981"
  primaryButton={{ label: 'Continue', variant: 'primary' }}
  showClose={false}
>
  <CustomFormContent />
</Dialog>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | — | Whether the dialog is visible |
| `onClose` | `() => void` | — | Callback when the dialog wants to close |
| `title` | `ReactNode` | — | Main heading |
| `description` | `ReactNode` | — | Subtext or description |
| `icon` | `ReactNode` | — | Custom icon shown at the top |
| `variant` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | Color scheme preset |
| `iconBgColor` | `string` | — | Custom background color for the icon badge |
| `iconColor` | `string` | — | Custom color for the icon |
| `primaryButton` | `DialogButtonProps` | — | Primary action button config |
| `secondaryButton` | `DialogButtonProps` | — | Secondary action button config |
| `showClose` | `boolean` | `true` | Show close (X) icon in the top right |
| `showHeader` | `boolean` | `true` | Show the header section |
| `showFooter` | `boolean` | `true` | Show the footer section |
| `closeOnOverlayClick` | `boolean` | `true` | Allow closing by clicking the backdrop |
| `width` | `string \| number` | `440` | Dialog width |
| `borderRadius` | `string \| number` | — | Custom border radius |
| `className` | `string` | — | Additional CSS class |
| `children` | `ReactNode` | — | Custom content (replaces description) |

### DialogButtonProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Button text |
| `onClick` | `() => void` | — | Click handler |
| `variant` | `ButtonVariant \| 'success' \| 'warning' \| 'info'` | `'primary'` or `'secondary'` | Button variant |
| `loading` | `boolean` | — | Show loading state |
| `disabled` | `boolean` | — | Disabled state |
| `className` | `string` | — | Additional CSS class |