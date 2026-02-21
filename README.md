# Mango UI Kit 🥭

A premium, modern React UI component library built with TypeScript, Lucide Icons, and Tailwind CSS.

## Features
- ✨ **Premium Aesthetics**: Carefully crafted components with a focus on modern design.
- 🎨 **Theme Support**: Built-in support for light and dark modes via CSS variables.
- 🛡️ **Type Safe**: Written in TypeScript for excellent developer experience.
- 🧩 **Modular**: Use only the components you need.

## Installation

```bash
npm install mango-ui-kit
```

```tsx
import { Button, Card, AppBar, ThemeProvider } from 'mango-ui-kit';
import 'mango-ui-kit/dist/mango-ui-kit.css'; // Don't forget the CSS!

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <AppBar 
        user={{ fullName: "John Doe" }}
        subscriptionPlan="Pro"
      />
      <Card hoverable className="m-4">
        <h1>Welcome to Mango UI</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Theming

Mango UI Kit comes with a built-in `ThemeProvider` that manages light and dark modes and persists the selection in `localStorage`.

### Theme Provider
Wrap your application with the `ThemeProvider` to enable dark mode support:

```tsx
import { ThemeProvider } from 'mango-ui-kit';

function Root() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="my-app-theme">
      <App />
    </ThemeProvider>
  );
}
```

### Toggle Theme
You can use the `useTheme` hook to access the current theme and toggle between light and dark modes:

```tsx
import { useTheme, Button } from 'mango-ui-kit';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button onClick={toggleTheme}>
      Current Theme: {theme}
    </Button>
  );
}
```

### CSS Customization
Mango UI uses CSS variables for all its colors. You can easily override the primary color and other tokens by defining them in your own CSS:

```css
:root {
  /* Override the default orange primary color to a custom purple */
  --primaryColor: #8b5cf6;
  --secondaryContainercolor: #8b5cf6;
  --lightPrimaryColor: rgba(139, 92, 246, 0.1);
  --font-family: 'Inter', sans-serif;
}

[data-theme='dark'] {
  --primaryColor: #a78bfa;
}
```

| Variable | Description |
| --- | --- |
| `--primaryColor` | The main accent color of the library. |
| `--background` | Main page background color. |
| `--textColor` | Main text color. |
| `--borderColor` | Border color for components like cards and inputs. |
| `--font-family` | Global font family (defaults to 'General Sans'). |

## Available Components

- **Navigation**: AppBar, Sidebar, Breadcrumbs
- **Inputs**: Button, Input, Dropdown, MultiSelect, FileDropzone, Toggle, TimePicker
- **Feedback**: Spinner, ProgressBar, Skeleton, ConfirmationModal, Rating
- **Data Display**: Table, Card, StatCard, Badge, Avatar, AvatarGroup, Accordion, Tabs
- **Date/Time**: CalendarDatePicker, DateRangePicker
- **Layout**: Drawer

## Peer Dependencies

Ensure you have the following installed:
- `react` >= 18.0.0
- `react-dom` >= 18.0.0

## License

MIT © Mango UI Team
