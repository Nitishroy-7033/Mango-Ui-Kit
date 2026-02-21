<div align="center">
  <img src="./public/mango-logo.png" alt="Mango UI Kit Logo" width="500" />

  # Mango UI Kit 🥭

  **Premium, Vibrant, and High-Performance React Component Library**

  [![GitHub Stars](https://img.shields.io/github/stars/Nitishroy-7033/Mango-Ui-Kit?style=for-the-badge&color=fa8029)](https://github.com/Nitishroy-7033/Mango-Ui-Kit)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  [![Version](https://img.shields.io/npm/v/mango-ui-kit?style=for-the-badge&color=blue)](https://www.npmjs.com/package/mango-ui-kit)

  <br />

  <a href="https://nitishroy.com/mango-ui-kit/storybook">
    <img src="https://img.shields.io/badge/View_Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" alt="Storybook" />
  </a>
  <a href="https://nitishroy.com/mango-ui-kit">
    <img src="https://img.shields.io/badge/Live_Demo-fa8029?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website" />
  </a>
  <a href="https://twitter.com/nitishroy">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>
  <a href="https://linkedin.com/in/nitishroy">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>

  <br />

  ---

  **Mango UI Kit** is not just another component library. It’s a design system built for developers who care about aesthetics as much as they care about performance. Every interaction is tuned, every pixel is intentional, and every component feels alive.

</div>

## 📖 Table of Contents

- [🥭 Why Mango UI?](#-why-mango-ui)
- [✨ Key Features](#-key-features)
- [🍱 Component Catalog](#-component-catalog)
- [🚀 Getting Started](#-getting-started)
- [🎨 Professional Theming](#-professional-theming)
- [🧩 Design Philosophy](#-design-philosophy)
- [🛡️ Quality Standards](#️-quality-standards)
- [📂 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🥭 Why Mango UI?

Most UI kits today are either too generic or too rigid. **Mango UI Kit** bridges that gap by offering:
- **Visual Personality**: High-contrast vibrant themes that make your app stand out in a sea of grey and blue.
- **Premium Default States**: Unlike basic kits, we include complex states (Glassmorphism, Neon glows, "Pop" animations) by default.
- **Developer Happiness**: Intuitive props, full TypeScript safety, and zero-config setup with standard CSS.

---

## ✨ Key Features

### 🌈 Design System
- **Varied Palettes**: Pre-built support for Solid, Outlined, and Soft (Glassmorphic) styles.
- **Vibrant Gradients**: Built-in "Mango" flavored gradients that breathe life into your buttons and loaders.
- **Micro-Animations**: Custom cubic-bezier transitions for every interaction (checkbox pops, slider snaps, button pulses).

### 🛠 Architecture
- **React 19 Ready**: Optimized for the latest React features and concurrent rendering.
- **Lightweight**: Zero external dependencies for core components (meaning smaller bundle sizes).
- **TypeScript First**: Meaningful type definitions that act as documentation in your IDE.
- **Tailwind Friendly**: Fully compatible with your existing Tailwind projects.

---

## 🍱 Component Catalog

### 🧠 Productive Core
- **Command Palette (⌘K)**: A pro-level search overlay with categories, icons, and keyboard shortuct hints.
- **Toast Manager**: A global observer-based system with animated progress-peel countdowns.
- **Tabs & Navigation**: Smooth sliding underlines and hybrid background indicators.

### 📝 Form & Selection
- **Advanced Inputs**: Word/Char counters, joined action items, and country selectors.
- **Mango Form Kit**: Pure CSS checkboxes and radios with specialized "checked" animations.
- **Range Sliders**: Single and dual-thumb selection with real-time tooltips and snap marks.

### 📤 Data & Assets
- **Media Uploader**: High-end file handling with Dropzone, Avatar, and Card triggers + real-time progress.
- **Data Table**: Responsive, sortable tables with integrated empty states and loaders.
- **Progress & Progress Circular**: Neon, glass, and gradient varieties for every loading scenario.

---

## 🚀 Getting Started

### 1. Installation

```bash
# Using npm
npm install mango-ui-kit lucide-react clsx tailwind-merge

# Using yarn
yarn add mango-ui-kit lucide-react clsx tailwind-merge
```

### 2. Import Base Styles
Import the library's CSS once in your entry file (e.g., `main.tsx` or `_app.tsx`):

```tsx
import 'mango-ui-kit/dist/style.css';
```

### 3. Usage

```tsx
import { Button, toast, Checkbox } from 'mango-ui-kit';

const App = () => {
  const handleSave = () => {
    toast.success("Mango saved successfully!");
  };

  return (
    <div className="p-10">
      <Button variant="primary" onClick={handleSave}>
        Feed the Mango
      </Button>
      <Checkbox label="Opt-in to micro-animations" variant="soft" />
    </div>
  );
};
```

---

## 🎨 Professional Theming

Mango UI Kit leverages CSS Variables to give you complete control without recompiling.

### Define Your Brand
In your global CSS file:

```css
:root {
  /* Brand Colors */
  --primaryColor: #ffc107;      /* Main Action Color */
  --secondaryColor: #fa8029;    /* Accent & Gradients */
  --primaryContainercolor: #ffffff;
  
  /* Text & Surface */
  --textColor: #1f2937;
  --labelColor: #4b5563;
  --labelSecondaryColor: #9ca3af;
  
  /* Borders & Shadows */
  --borderColor: #e5e7eb;
  --radius-md: 12px;
}

/* Dark Mode Support */
[data-theme='dark'] {
  --primaryContainercolor: #111827;
  --textColor: #f9fafb;
  --borderColor: #374151;
}
```

---

## 🛡️ Quality Standards

| Feature | Standard |
| :--- | :--- |
| **Accessibility** | Meets WCAG 2.1 AA standards for contrast and keyboard nav. |
| **Documentation** | 100% Storybook coverage for every component variant. |
| **Styling** | Clean CSS modules / Vanilla CSS for maximum interoperability. |
| **Bundle Size** | Tree-shakable architecture to reduce final build weight. |

---

## 📂 Project Roadmap

- [x] **v1.0**: Core library release (Button, Input, Alerts).
- [x] **v1.1**: Form systems (Checkbox, Radio, Sliders).
- [x] **v1.2**: Advanced Systems (Toast, Command Palette, Media Uploader).
- [ ] **v1.3**: Next-Gen Components (Bento Grid, Timeline, Skeleton Text).
- [ ] **v1.4**: Drag-and-Drop library integration.

---

## 🤝 Contributing

We are looking for contributors! If you have a component idea or a bug fix:

1.  **Fork** the repo.
2.  **Clone** your fork.
3.  Execute `npm install` and `npm run storybook`.
4.  Develop your component in `src/components/[name]`.
5.  Create a **Pull Request** detailing your changes.

---

<div align="center">

  ### 🥭 Built with Passion for the Modern Web

  Developed by [Nitish Roy](https://github.com/Nitishroy-7033). If you find this useful, please consider giving us a ⭐ on GitHub!

  [Privacy Policy](https://nitishroy.com/privacy) • [Terms of Service](https://nitishroy.com/terms) • [Discord Community](https://discord.gg/mango)

</div>
