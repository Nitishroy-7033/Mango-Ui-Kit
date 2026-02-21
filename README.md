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

## Usage

First, import the styles in your main entry file (e.g., `main.ts` or `App.tsx`):

```tsx
import 'mango-ui-kit/dist/style.css';
```

Then, you can start using components:

```tsx
import { Button, Card, AppBar } from 'mango-ui-kit';

function App() {
  return (
    <div>
      <AppBar 
        user={{ fullName: "John Doe" }}
        subscriptionPlan="Pro"
      />
      <Card hoverable className="m-4">
        <h1>Welcome to Mango UI</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  );
}
```

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
