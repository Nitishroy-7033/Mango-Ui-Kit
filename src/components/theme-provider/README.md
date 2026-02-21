# ThemeProvider 🥭

The root component that manages the theme mode (light/dark) and the global color scheme of the Mango UI Kit.

## Features
- 🌗 **Light/Dark Mode**: Seamlessly switch between themes.
- 💾 **Persistence**: Automatically saves preference to `localStorage`.
- 🎨 **Global Color Scheme**: Centralized control over all UI colors via CSS variables.
- 🛠️ **Customizable**: Override default colors with your own brand palette.
- ⚓ **useTheme Hook**: Easily access and control theme from any sub-component.

## Usage

### Root Setup
```tsx
import { ThemeProvider } from 'mango-ui-kit';

const myBrandTheme = {
  light: {
    primaryColor: '#7c3aed',
    shadowColor: '124, 58, 237',
  }
};

function Root() {
  return (
    <ThemeProvider theme={myBrandTheme} defaultThemeMode="light">
      <App />
    </ThemeProvider>
  );
}
```

### Using in Components
```tsx
import { useTheme, Button } from 'mango-ui-kit';

function ThemeToggler() {
  const { themeMode, toggleTheme } = useTheme();
  
  return (
    <Button onClick={toggleTheme}>
      Switch to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | Your application content. |
| `defaultThemeMode`| `'light' \| 'dark'` | `'light'` | Initial theme mode if no preference is stored. |
| `storageKey` | `string` | `'mango-ui-theme'` | The key used to store the theme in localStorage. |
| `theme` | `Partial<ThemeConfig>` | - | Custom color configuration for light and dark modes. |

## Theme Configuration Object
You can override the following colors for both `light` and `dark` modes:

| Color Key | Description |
| --- | --- |
| `primaryColor` | The main accent color. |
| `background` | Page background color. |
| `textColor` | Primary text color. |
| `borderColor` | Border color for components. |
| `successColor` | Color for success states. |
| `errorColor` | Color for error/danger states. |
| `shadowColor` | RGB triplets (e.g. `250, 128, 41`) for dynamic shadows. |
