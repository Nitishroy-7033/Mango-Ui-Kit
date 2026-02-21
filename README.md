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

Mango UI Kit includes a powerful `ThemeProvider` that manages both theme modes (light/dark) and the entire color scheme.

### Programmatic Customization

Instead of manual CSS overrides, you can pass a `theme` object to the `ThemeProvider`. JavaScript users can pass a plain object, while TypeScript users can use the `ThemeConfig` type for autocompletion.

```tsx
import { ThemeProvider } from 'mango-ui-kit';

// For TypeScript users (optional):
// import type { ThemeConfig } from 'mango-ui-kit';

const myBrandTheme = {
  light: {
    primaryColor: '#7c3aed',         // Vibrant Purple
    lightPrimaryColor: '#f5f3ff',    // Pale Purple
    shadowColor: '124, 58, 237',     // RGB values of primary (for shadows)
  },
  dark: {
    primaryColor: '#a78bfa',
    background: '#0f172a',           // Deep Slate
  }
};

function Root() {
  return (
    <ThemeProvider theme={myBrandTheme} defaultThemeMode="dark">
      <App />
    </ThemeProvider>
  );
}
```

### Toggle Theme

Use the `useTheme` hook to access the current mode and toggle function:

```tsx
import { useTheme, Button } from 'mango-ui-kit';

function ThemeToggle() {
  const { themeMode, toggleTheme } = useTheme();
  
  return (
    <Button onClick={toggleTheme}>
      Current Mode: {themeMode}
    </Button>
  );
}
```

### CSS Token Mapping

If you prefer CSS overrides, Mango UI reactively updates these variables on `:root`.

| Token | Description |
| --- | --- |
| `--primaryColor` | Main brand color |
| `--background` | Background of the page |
| `--textColor` | Primary text color |
| `--borderColor` | Global border color |
| `--shadowColorRGB` | RGB triplets (e.g. `124, 58, 237`) used for dynamic shadows |

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
