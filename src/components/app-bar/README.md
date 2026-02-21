# AppBar 🥭

A full-featured application top navigation bar with search, theme toggling, notifications, and user profile management.

## Features
- 🔍 **Search Bar**: Integrated search input with callback.
- 🌓 **Theme Toggle**: built-in sun/moon toggle for light and dark modes.
- 👑 **Subscription Badge**: Displays current plan (e.g., Free, Pro, Enterprise).
- ⚡ **Upgrade Button**: Contextual "Upgrade" button for free users.
- 👤 **Profile Menu**: Animated dropdown menu for profile, settings, and logout.
- 🔔 **Notifications**: Bell icon with red indicator for new notifications.
- 📱 **Responsive**: Menu toggle button for triggering sidebar on small screens.

## Usage

```tsx
import { AppBar } from 'mango-ui-kit';

<AppBar
  user={{
    fullName: "Nitish Roy",
    email: "nitish@example.com",
    avatarUrl: "/avatars/nitish.jpg"
  }}
  subscriptionPlan="Free"
  onUpgrade={() => console.log('Upgrade clicked')}
  onSearch={(query) => console.log('Searching for:', query)}
  notificationCount={3}
  theme="dark"
  onToggleTheme={() => toggleMyTheme()}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `user` | `UserObject` | - | Contains `fullName`, `email`, and `avatarUrl`. |
| `theme` | `'light' \| 'dark'` | `'light'` | Current theme mode for the icons. |
| `onToggleTheme` | `() => void` | - | Callback triggered when the theme toggle is clicked. |
| `onToggleSidebar`| `() => void` | - | Callback for the mobile menu button. |
| `onUpgrade` | `() => void` | - | Callback for the "Upgrade" button. |
| `subscriptionPlan`| `string` | - | Plan name (e.g. "Free", "Pro"). Shows "Free" as a special badge. |
| `onSearch` | `(val: string) => void` | - | Callback for input changes in the search bar. |
| `notificationCount`| `number` | `0` | Number of notifications to show in the dot. |
| `onLogout` | `() => void` | - | Callback triggered from the profile dropdown logout button. |
| `searchPlaceholder`| `string` | `'Search...'` | Placeholder for the search input. |
