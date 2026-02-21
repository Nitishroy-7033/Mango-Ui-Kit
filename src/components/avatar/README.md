# Avatar 🥭

A component for displaying user profile pictures with fallback support for names or initials.

## Features
- 🖼️ **Image Support**: Displays high-quality user images.
- 🔡 **Initials Fallback**: Automatically shows initials if image fails or is missing.
- 📐 **Sizes**: standard sizes (sm, md, lg, xl).
- 🎨 **Variants**: Different background colors for fallbacks.

## Usage

```tsx
import { Avatar } from 'mango-ui-kit';

<Avatar 
  src="https://example.com/user.jpg" 
  alt="John Doe" 
  fallback="JD" 
  size="lg"
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | - | URL of the image. |
| `alt` | `string` | - | Alt text for the image. |
| `fallback`| `string` | - | Text/initials to show if image is missing. |
| `size` | `string` | `'md'` | Size of the avatar (`sm`, `md`, `lg`, `xl`). |
| `variant` | `string` | `'primary'` | Background variant for the fallback. |

---

# AvatarGroup

Displays a collection of avatars in a stacked arrangement.

## Usage

```tsx
import { AvatarGroup } from 'mango-ui-kit';

<AvatarGroup 
  users={[
    { name: 'John Doe', image: '/img1.jpg' },
    { name: 'Jane Smith' },
    { name: 'Bob Wilson', image: '/img3.jpg' }
  ]} 
  max={5} 
  size={40}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `users` | `AvatarUser[]` | `[]` | List of user objects with `name` and optional `image`. |
| `max` | `number` | - | Maximum number of avatars to show before adding a "+X" badge. |
| `size` | `number` | `40` | Pixel size of each avatar in the group. |
