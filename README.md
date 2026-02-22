<div align="center">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0kXw2Eawdmhss5y_YbYr_a9uML2mbpn0gUCPEl9czK7J5t8WcOtOu5dAApCnjdekHTe_QMTa5hi_FWHuZacbLUaEWkpxc4hZ3agO6-7nMwmbH3YtODAD0ly3Gwcft_WREw_3ILY2hRAU8VBbUmMFJ1gs4CdLUC8RhB1pZEjpWzU61CyJcCt3OGaGfdy4-/s1024/logo.png" alt="Mango UI Kit Logo" width="500" />

  # Mango UI Kit 🥭

  **The Ultimate Premium, Vibrant, and High-Performance React Component Library**

  [![GitHub Stars](https://img.shields.io/github/stars/Nitishroy-7033/Mango-Ui-Kit?style=for-the-badge&color=fa8029)](https://github.com/Nitishroy-7033/Mango-Ui-Kit)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  [![NPM Version](https://img.shields.io/npm/v/mango-ui-kit?style=for-the-badge&color=blue)](https://www.npmjs.com/package/mango-ui-kit)
  [![NPM Downloads](https://img.shields.io/npm/dm/mango-ui-kit?style=for-the-badge&color=orange)](https://www.npmjs.com/package/mango-ui-kit)

  <br />

  <a href="https://mango-ui-kit.onrender.com/">
    <img src="https://img.shields.io/badge/Interactive_Documentation-FF4785?style=for-the-badge&logo=storybook&logoColor=white" alt="Storybook" />
  </a>
  <a href="https://mango-ui-kit.onrender.com/">
    <img src="https://img.shields.io/badge/Live_Demo-fa8029?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website" />
  </a>
  <a href="https://twitter.com/nitishroy">
    <img src="https://img.shields.io/badge/Contact_Author-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>

  <br />

  ---

  **Mango UI Kit** is a state-of-the-art design system crafted for modern web applications. 40+ production-ready components with a fully generic, zero-dependency theme engine built right in.

</div>

---

## 📖 Table of Contents

- [✨ Key Features](#-key-features)
- [🚀 Quick Start](#-quick-start)
- [🎨 Complete Theme Management](#-complete-theme-management)
  - [Step 1 — Wrap your App](#step-1--wrap-your-app)
  - [Step 2 — Define your brand theme](#step-2--define-your-brand-theme)
  - [Step 3 — Pass it into ThemeProvider](#step-3--pass-it-into-themeprovider)
  - [Step 4 — Use tokens in components](#step-4--use-tokens-in-components)
  - [Step 5 — Auto-injected CSS variables](#step-5--auto-injected-css-variables)
  - [Built-in Color Tokens Reference](#built-in-color-tokens-reference)
  - [Built-in Size Tokens Reference](#built-in-size-tokens-reference)
- [🍱 Essential Components](#-essential-components)
- [✨ Advanced Features](#-advanced-features)
- [🛶 Layout System](#-layout-system)
- [🛡️ TypeScript Support](#-typescript-support)
- [🤝 Contributing](#-contributing)

---

## ✨ Key Features

### 🌈 Design System
- **Varied Palettes**: Solid, Outlined, Soft (Glassmorphic), and Gradient styles out of the box.
- **Vibrant Gradients**: Built-in "Mango" flavored gradients that breathe life into buttons and loaders.
- **Micro-Animations**: Custom cubic-bezier transitions for every interaction.

### 🛠 Architecture
- **React 18 / 19 Ready**: Optimized for concurrent rendering.
- **Zero-Dependency Theme Engine**: No external theming library needed — colors, sizes, and custom tokens all managed in one place.
- **TypeScript First**: Every prop, every token, fully typed with IntelliSense.
- **Tailwind Friendly**: Drop into any existing Tailwind project without conflicts.

---

## 🚀 Quick Start

### 1. Install

```bash
# npm
npm install mango-ui-kit

# yarn
yarn add mango-ui-kit

# pnpm
pnpm add mango-ui-kit
```

### 2. Import base styles

Add this once in your entry file (`main.tsx`, `index.ts`, or `_app.tsx`):

```tsx
import 'mango-ui-kit/dist/mango-ui-kit.css';
```

### 3. Start using components

```tsx
import { Button, Box } from 'mango-ui-kit';

export default function App() {
  return (
    <Box p="20px">
      <Button variant="primary" onClick={() => alert('Hello Mango!')}>
        Get Started
      </Button>
    </Box>
  );
}
```

---

## 🎨 Complete Theme Management

Mango UI Kit ships a **fully generic, built-in theme engine** — no Styled Components, no Emotion, no external library needed.

It manages:
- 🌓 **Light & Dark modes** — two separate token sets, switch instantly
- 💾 **Persistence** — mode is saved to `localStorage` automatically
- 💉 **CSS variable injection** — every token becomes a global CSS variable on `<html>`
- 🎨 **Custom tokens** — define your own colors, sizes, spacing with any name you want
- 🪝 **`useTheme` hook** — access all tokens directly in TSX/JS

---

### Step 1 — Wrap your App

```tsx
// main.tsx
import { ThemeProvider } from 'mango-ui-kit';
import 'mango-ui-kit/dist/mango-ui-kit.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultThemeMode="light" storageKey="my-app-theme">
    <App />
  </ThemeProvider>
);
```

**ThemeProvider Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultThemeMode` | `'light' \| 'dark'` | `'light'` | The first mode applied on fresh load |
| `storageKey` | `string` | `'mango-ui-theme'` | `localStorage` key to persist user's preference |
| `theme` | `Partial<ThemeConfig>` | — | Your full brand theme config (colors, sizes, custom) |

---

### Step 2 — Define your brand theme

The `ThemeConfig` accepts three buckets per mode:

| Bucket | What goes here |
| :--- | :--- |
| `colors` | Override any of the 19 built-in color tokens |
| `sizes` | Override any of the 13 built-in size/spacing tokens |
| `custom` | **Your own token names** — any key, any value |

```tsx
import type { ThemeConfig } from 'mango-ui-kit';

const myTheme: Partial<ThemeConfig> = {
  light: {

    // ── Override built-in color tokens ─────────────────────
    colors: {
      primaryColor: '#7c3aed',          // Your brand purple
      lightPrimaryColor: '#f5f3ff',     // Soft tint of primary
      background: '#ffffff',
      primaryContainercolor: '#ffffff',
      secondaryContainercolor: '#faf5ff',
      textColor: '#1e1b4b',
      textSecondaryColor: '#4338ca',
      labelColor: '#3730a3',
      labelSecondaryColor: '#6d28d9',
      borderColor: '#ddd6fe',
      accent: '#7c3aed',
      accentForeground: '#ffffff',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#ef4444',
      infoColor: '#3b82f6',
      shadowColor: '124, 58, 237',     // ← R, G, B values only (no #)
      shadowColorOpacity: '0.3',
    },

    // ── Override built-in size/spacing tokens ──────────────
    sizes: {
      radiusMd: '10px',
      fontSizeMd: '15px',
      spacingMd: '18px',
    },

    // ── Your own custom tokens (any name you want!) ────────
    custom: {
      heroBackground: '#f5f3ff',
      heroText: '#4c1d95',
      cardAccent: '#7c3aed',
      sidebarWidth: '260px',
      sidebarBg: '#faf5ff',
      chartColor1: '#7c3aed',
      chartColor2: '#2563eb',
      chartColor3: '#059669',
      navbarHeight: '64px',
      bannerGradient: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    },
  },

  dark: {

    // ── Dark built-in color overrides ─────────────────────
    colors: {
      primaryColor: '#a78bfa',
      lightPrimaryColor: '#2e1065',
      background: '#0f0a1e',
      primaryContainercolor: '#1e1b4b',
      secondaryContainercolor: '#12104c',
      textColor: '#f5f3ff',
      textSecondaryColor: '#c4b5fd',
      labelColor: '#ede9fe',
      labelSecondaryColor: '#a78bfa',
      borderColor: '#4c1d95',
      accent: '#a78bfa',
      accentForeground: '#0f0a1e',
      shadowColor: '167, 139, 250',
      shadowColorOpacity: '0.4',
    },

    // ── Dark custom token overrides ─────────────────────────
    // Only override what changes — anything not listed here
    // falls back to the value defined in light.custom
    custom: {
      heroBackground: '#1e1b4b',
      heroText: '#e9d5ff',
      cardAccent: '#a78bfa',
      sidebarBg: '#12104c',
      chartColor1: '#a78bfa',
      bannerGradient: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
    },
  },
};
```

---

### Step 3 — Pass it into ThemeProvider

```tsx
<ThemeProvider theme={myTheme} defaultThemeMode="light">
  <App />
</ThemeProvider>
```

That's it. All your tokens are now available everywhere.

---

### Step 4 — Use tokens in components

Use the `useTheme` hook to read any token in your JSX:

```tsx
import { useTheme } from 'mango-ui-kit';

const HeroSection = () => {
  const {
    themeMode,          // 'light' | 'dark'
    toggleTheme,        // flips mode
    setThemeMode,       // sets specific mode
    colors,             // built-in color tokens
    sizes,              // built-in size tokens
    custom,             // your custom tokens
    tokens,             // ✅ all merged: colors + sizes + custom
  } = useTheme();

  return (
    <div style={{
      background: tokens.heroBackground,       // your custom token
      minHeight: tokens.navbarHeight,          // your custom token
      color: tokens.textColor,                 // built-in token
      borderRadius: tokens.radiusMd,           // built-in size token
      padding: tokens.spacingLg,              // built-in size token
    }}>
      <h1 style={{ color: tokens.heroText }}>
        Welcome!
      </h1>

      <div style={{
        background: tokens.bannerGradient,     // custom gradient string
        borderColor: tokens.accent,
      }}>
        Call to Action
      </div>

      {/* Toggle dark/light */}
      <button onClick={toggleTheme}>
        {themeMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};
```

**`useTheme` Return Values:**

| Property | Type | Description |
| :--- | :--- | :--- |
| `themeMode` | `'light' \| 'dark'` | The currently active mode |
| `toggleTheme` | `() => void` | Flips between light and dark |
| `setThemeMode` | `(mode) => void` | Force a specific mode |
| `colors` | `ThemeColors` | All resolved built-in color tokens |
| `sizes` | `ThemeSizes` | All resolved built-in size tokens |
| `custom` | `CustomTokens` | All your custom tokens |
| `tokens` | `ThemeColors & ThemeSizes & CustomTokens` | **Everything merged** — easiest to use |

---

### Step 5 — Auto-injected CSS variables

Every token is automatically injected as a CSS variable on `<html>` whenever the theme changes. You can use them anywhere in your CSS files.

#### Built-in color variables:
```css
.my-card {
  background: var(--primaryContainercolor);
  color: var(--textColor);
  border: 1px solid var(--borderColor);
  box-shadow: 0 4px 20px rgba(var(--shadowColorRGB), var(--shadowOpacity));
}
```

#### Built-in size variables:
```css
.my-card {
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  padding: var(--spacing-md);
}
```

#### Your custom tokens (auto-prefixed with `--custom-`):

Your `camelCase` key names are auto-converted to `kebab-case`:

| Your key | Injected CSS variable |
| :--- | :--- |
| `heroBackground` | `--custom-hero-background` |
| `cardAccent` | `--custom-card-accent` |
| `sidebarWidth` | `--custom-sidebar-width` |
| `chartColor1` | `--custom-chart-color1` |
| `navbarHeight` | `--custom-navbar-height` |
| `bannerGradient` | `--custom-banner-gradient` |

```css
/* These switch between light and dark values automatically! */
.hero {
  background: var(--custom-hero-background);
  color: var(--custom-hero-text);
}

.sidebar {
  width: var(--custom-sidebar-width);
  background: var(--custom-sidebar-bg);
}

.chart-bar-1 { fill: var(--custom-chart-color1); }
.chart-bar-2 { fill: var(--custom-chart-color2); }
```

---

### Built-in Color Tokens Reference

All 19 built-in color tokens with their CSS variable names and defaults:

| Key | CSS Variable | Light Default | Dark Default | Used for |
| :--- | :--- | :--- | :--- | :--- |
| `background` | `--background` | `#ffffff` | `#030712` | App background |
| `primaryColor` | `--primaryColor` | `#fa8029` | `#fa8029` | Buttons, active states |
| `lightPrimaryColor` | `--lightPrimaryColor` | `#fff1e7` | `#2d1a0e` | Soft tinted backgrounds |
| `secondaryColor` | `--secondaryColor` | `#f3f4f6` | `#1f2937` | Secondary surfaces |
| `primaryContainercolor` | `--primaryContainercolor` | `#ffffff` | `#111827` | Cards, modals, panels |
| `secondaryContainercolor` | `--secondaryContainercolor` | `#f9fafb` | `#0f172a` | Secondary containers |
| `textColor` | `--textColor` | `#111827` | `#f9fafb` | Main body text |
| `textSecondaryColor` | `--textSecondaryColor` | `#4b5563` | `#d1d5db` | Subtitles, descriptions |
| `labelColor` | `--labelColor` | `#374151` | `#e5e7eb` | Form labels |
| `labelSecondaryColor` | `--labelSecondaryColor` | `#6b7280` | `#9ca3af` | Hints, placeholders |
| `borderColor` | `--borderColor` | `#e5e7eb` | `#374151` | All borders and dividers |
| `accent` | `--accent` | `#fa8029` | `#fa8029` | Focused CTAs |
| `accentForeground` | `--accent-foreground` | `#ffffff` | `#ffffff` | Text on accent bg |
| `successColor` | `--successColor` | `#10b981` | `#10b981` | Success indicators |
| `warningColor` | `--warningColor` | `#f59e0b` | `#f59e0b` | Caution states |
| `errorColor` | `--errorColor` | `#ef4444` | `#ef4444` | Error / destructive |
| `infoColor` | `--infoColor` | `#3b82f6` | `#3b82f6` | Info badges |
| `shadowColor` | `--shadowColorRGB` | `250, 128, 41` | `250, 128, 41` | Shadow RGB channels |
| `shadowColorOpacity` | `--shadowOpacity` | `0.35` | `0.35` | Shadow opacity |

---

### Built-in Size Tokens Reference

All 13 built-in size/spacing tokens. These also switch per theme mode if you override them:

| Key | CSS Variable | Default | Used for |
| :--- | :--- | :--- | :--- |
| `radiusSm` | `--radius-sm` | `6px` | Small rounded corners |
| `radiusMd` | `--radius-md` | `12px` | Standard card/input radius |
| `radiusLg` | `--radius-lg` | `20px` | Large panels |
| `radiusFull` | `--radius-full` | `9999px` | Pill / avatar shapes |
| `fontSizeXs` | `--font-size-xs` | `12px` | Captions, badges |
| `fontSizeSm` | `--font-size-sm` | `14px` | Secondary text |
| `fontSizeMd` | `--font-size-md` | `16px` | Body text |
| `fontSizeLg` | `--font-size-lg` | `20px` | Subheadings |
| `fontSizeXl` | `--font-size-xl` | `24px` | Headings |
| `spacingSm` | `--spacing-sm` | `8px` | Tight padding |
| `spacingMd` | `--spacing-md` | `16px` | Standard padding |
| `spacingLg` | `--spacing-lg` | `24px` | Section padding |
| `spacingXl` | `--spacing-xl` | `40px` | Page-level padding |

---

## 🍱 Essential Components

### 🔘 Button

```tsx
import { Button } from 'mango-ui-kit';

<Button variant="primary" size="md">Solid Button</Button>
<Button variant="outline">Outline</Button>
<Button variant="soft" loading>Saving...</Button>
<Button variant="ghost">Ghost</Button>
```

### 🔽 Dropdown

```tsx
import { Dropdown } from 'mango-ui-kit';

<Dropdown
  trigger={<Button>Options</Button>}
  items={[
    { id: 'edit', label: 'Edit Profile', onClick: () => {} },
    { id: 'settings', label: 'Settings', divider: true },
    { id: 'logout', label: 'Logout', color: 'error' },
  ]}
/>
```

### 📝 Input & Checkbox

```tsx
import { Input, Checkbox } from 'mango-ui-kit';

<Input label="Email" placeholder="alex@example.com" required />
<Checkbox label="I agree to the terms" variant="soft" />
```

### 🖼️ Modal

```tsx
import { Modal, Button } from 'mango-ui-kit';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
  <p>Are you sure you want to continue?</p>
  <div style={{ display: 'flex', gap: '8px', marginTop: '16px', justifyContent: 'flex-end' }}>
    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </div>
</Modal>
```

### 📊 Stat Card

```tsx
import { StatCard } from 'mango-ui-kit';

<StatCard
  title="Total Revenue"
  value="$48,295"
  change={+12.4}
  icon={<DollarSign />}
/>
```

### 📄 Table

```tsx
import { Table } from 'mango-ui-kit';

<Table
  columns={[
    { key: 'name', title: 'Name' },
    { key: 'status', title: 'Status' },
    { key: 'amount', title: 'Amount' },
  ]}
  data={rows}
/>
```

### 🗂️ Tabs

```tsx
import { Tabs } from 'mango-ui-kit';

<Tabs
  tabs={[
    { id: 'overview', label: 'Overview', content: <OverviewPanel /> },
    { id: 'analytics', label: 'Analytics', content: <AnalyticsPanel /> },
    { id: 'settings', label: 'Settings', content: <SettingsPanel /> },
  ]}
/>
```

---

## ✨ Advanced Features

### 🍞 Toast Notifications

```tsx
import { toast, ToastContainer } from 'mango-ui-kit';

// 1. Add the container once at root level
<ToastContainer position="top-right" />

// 2. Fire toasts from anywhere
toast.success('Saved successfully!');
toast.error('Something went wrong', { duration: 5000 });
toast.warning('Please review your input');
toast.info('New update available');
```

### 🔍 Command Palette (⌘K)

```tsx
import { CommandPalette } from 'mango-ui-kit';

<CommandPalette
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  actions={[
    { id: 'search', label: 'Search Projects', section: 'Quick Links', shortcut: 'P' },
    { id: 'settings', label: 'Global Settings', section: 'System' },
    { id: 'logout', label: 'Sign Out', section: 'Account' },
  ]}
  onAction={(action) => router.push(`/${action.id}`)}
/>
```

### 📤 Media Uploader

```tsx
import { MediaUploader } from 'mango-ui-kit';

<MediaUploader
  multiple
  maxSize={5}        // MB
  accept="image/*"
  onFilesAdded={(files) => handleUpload(files)}
/>
```

### 📅 Calendar & Date Picker

```tsx
import { CalendarDatePicker } from 'mango-ui-kit';

<CalendarDatePicker
  value={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  placeholder="Pick a date"
/>
```

### 🔢 OTP Input

```tsx
import { OtpInput } from 'mango-ui-kit';

<OtpInput
  length={6}
  onComplete={(code) => verifyOtp(code)}
/>
```

---

## 🛶 Layout System

Build complex, responsive grid layouts using `Box`, `Row`, and `Col`.

```tsx
import { Row, Col, Box } from 'mango-ui-kit';

<Row justify="between" align="center" gap="20px">
  <Col span={8}>
    <Box bg="var(--primaryContainercolor)" shadow="lg" p="40px" radius="20px">
      Main Content
    </Box>
  </Col>
  <Col span={4}>
    <Box bg="var(--secondaryContainercolor)" p="20px" radius="12px">
      Sidebar
    </Box>
  </Col>
</Row>
```

**Box Props** (shorthand style system):

| Prop | Type | Description |
| :--- | :--- | :--- |
| `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` | `string \| number` | Padding |
| `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml` | `string \| number` | Margin |
| `bg` | `string` | Background color or CSS var |
| `color` | `string` | Text color |
| `radius` | `string \| number` | Border radius |
| `shadow` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | Shadow preset |
| `blur` | `string \| number` | `backdrop-filter: blur(...)` |
| `gradient` | `string` | `background-image` gradient |
| `justify` | `'start' \| 'end' \| 'center' \| 'between' \| 'around'` | Flex justify-content |
| `align` | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | Flex align-items |
| `gap` | `string \| number` | Flex/grid gap |
| `as` | `React.ElementType` | Change the underlying HTML element |

---

## 🛡️ TypeScript Support

Mango UI Kit is written in **TypeScript** from the ground up. Import any type you need:

```tsx
import type {
  ButtonProps,
  ThemeConfig,
  ThemeColors,
  ThemeSizes,
  CustomTokens,
  ThemeMode,
  BoxProps,
  RowProps,
  ColProps,
} from 'mango-ui-kit';
```

---

## 🤝 Contributing & Support

- **Found a bug?** → [Open an issue](https://github.com/Nitishroy-7033/Mango-Ui-Kit/issues)
- **Want to contribute?** → [Submit a Pull Request](https://github.com/Nitishroy-7033/Mango-Ui-Kit/pulls)
- **Need help?** → DM on [Twitter @nitishroy](https://twitter.com/nitishroy)

To run locally:

```bash
git clone https://github.com/Nitishroy-7033/Mango-Ui-Kit
cd Mango-Ui-Kit
npm install
npm run storybook
```

---

<div align="center">
  <p>Built with ❤️ by <b><a href="https://github.com/Nitishroy-7033">Nitish Roy</a></b> · Licensed under MIT</p>
  <p>⭐ If this library helps you, please star it on GitHub!</p>
</div>
