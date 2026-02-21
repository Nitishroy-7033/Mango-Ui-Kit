# AvatarGroup 🥭

Displays a collection of avatars in a stacked arrangement with an optional overflow count.

## Features
- 🥞 **Stacked Layout**: Avatars overlap for a compact, social-group look.
- ➕ **Overflow Handling**: Automatically shows a `+X` badge if the number of users exceeds the `max` prop.
- 📐 **Sizing**: Control the individual avatar size within the group.

## Usage

```tsx
import { AvatarGroup } from 'mango-ui-kit';

<AvatarGroup 
  users={[
    { name: 'John Doe', image: '/img1.jpg' },
    { name: 'Jane Smith' },
    { name: 'Bob Wilson', image: '/img3.jpg' },
    { name: 'Alice Brown' }
  ]} 
  max={3} 
  size={40}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `users` | `AvatarUser[]` | `[]` | List of user objects with `name` and optional `image`. |
| `max` | `number` | - | Maximum number of avatars to show before adding a "+X" overflow badge. |
| `size` | `number` | `40` | Pixel size of each avatar in the group. |
| `className` | `string` | - | Extra CSS classes for the container. |

### AvatarUser (Type)
- `name` (string): The user's name (used for fallback initials).
- `image` (string): Optional URL for the profile picture.
