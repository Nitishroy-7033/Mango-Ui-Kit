# AppBar 🥭

An extremely flexible, high-performance navigation bar. It supports multiple layout patterns including standard App Bars, Marketing NavBars, and Landing Page headers.

## Features
- 🎨 **5 Visual Styles**: `glass`, `flat`, `bordered`, `sticky`, and `floating`.
- 📍 **Layout Inserts**: Add any custom component into `leftContent`, `centerContent`, or `rightContent`.
- 📂 **Multi-level Nav**: Support for navigation items with nested dropdown menus.
- 👤 **Integrated Profile**: Built-in user menu with avatar fallbacks and logout handling.
- 📱 **Mobile Ready**: Intelligent responsiveness that hides complex elements and shows a menu toggle on small screens.
- 🌈 **Full Color Control**: Override background, text, and border colors via props.

## Usage

### 🚀 Standard Dashboard
```tsx
import { AppBar } from 'mango-ui-kit';
import { Layout } from 'lucide-react';

<AppBar
  brandName="MangoDash"
  logo={<Layout />}
  navItems={[
    { label: 'Market', active: true },
    { label: 'Inventory', children: [{ label: 'Stock' }, { label: 'Orders' }] }
  ]}
  user={{ fullName: 'John Doe', avatarUrl: '/avatar.png' }}
  notificationCount={5}
/>
```

### 💎 Marketing NavBar
```tsx
import { AppBar, Button } from 'mango-ui-kit';

<AppBar
  variant="glass"
  brandName="BrandName"
  showSearch={false}
  rightContent={
    <div className="flex gap-2">
      <Button variant="ghost">Login</Button>
      <Button variant="primary" rounded="full">Sign Up</Button>
    </div>
  }
/>
```

## Props

### 📐 Layout & Style
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `AppBarVariant` | `'glass'` | Visual style (`glass`, `flat`, `bordered`, `sticky`, `floating`).|
| `sticky` | `boolean` | `true` | Pins the bar to the top of the viewport. |
| `fixed` | `boolean` | `false` | Sets `position: fixed` for overlaying content. |
| `logo` | `ReactNode` | - | Image or Icon for the brand. |
| `brandName` | `string` | - | Text displayed next to the logo. |

### 🧩 Content Injection
| Prop | Type | Description |
| --- | --- | --- |
| `leftContent` | `ReactNode` | Extra items to add to the left section (after brand). |
| `centerContent`| `ReactNode` | Custom content for the middle area. |
| `rightContent` | `ReactNode` | Custom buttons/icons for the right section. |
| `navItems` | `NavItem[]` | List of navigation links (supports icons and sub-menus). |

### 👤 Dashboard Logic
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `user` | `UserObject` | - | Contains `fullName`, `email`, and `avatarUrl`. |
| `subscriptionPlan`| `string` | - | Displays a status badge (e.g. "Business"). |
| `notificationCount`| `number` | `0` | Count shown on the notification bell. |
| `showSearch` | `boolean` | `true` | Toggles the central search bar. |
| `showThemeToggle` | `boolean` | `true` | Toggles the light/dark mode switch. |

### 🎨 Color Branding
| Prop | Type | Description |
| --- | --- | --- |
| `bgColor` | `string` | Custom background color. |
| `textColor` | `string` | Custom text color. |
| `borderColor` | `string` | Custom bottom border color. |
| `accentColor` | `string` | Custom color for active links and badges. |

### NavItem (Type)
- `label` (string): Text to display.
- `icon` (Component): Optional Lucide icon.
- `active` (boolean): Highlights the link.
- `children` (NavItem[]): Nested items for a dropdown menu.
- `onClick` (function): Navigation callback.
