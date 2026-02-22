# Changelog

All notable changes to **Mango UI Kit** are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] — 2026-02-22

### ✨ Added
- **Responsive Grid System** — `Col` component now supports responsive spans via an object (e.g., `span={{ xs: 12, md: 6 }}`).
- **Typography System** — New `Typography` component for consistent headings, body text, and labels across the app.
- **Vanilla CSS Modal** — Refactored Modal from Tailwind to Vanilla CSS with ARIA support and focus management.

### 🔧 Improved
- **Tabs Accessibility** — Added full keyboard navigation (Arrow keys) and correct ARIA association between tabs and panels.
- **Layout Consistency** — Standardized breakpoints across the grid system (xs, sm, md, lg, xl).
- **Core CSS** — Refined global CSS variables for better design system alignment.

---

## [2.3.0] — 2026-02-22

### ✨ Added
- **Zero-Dependency Installation** — Users now only need to install `mango-ui-kit`. All internal dependencies (`lucide-react`, `clsx`, `tailwind-merge`, `class-variance-authority`) are now bundled directly into the library, significantly simplifying the onboarding process.

### 🔧 Improved
- **Bundle Optimization** — Cleaned up `vite.config.ts` and `package.json` to ensure clean tree-shaking and zero-config experience.
- **README Refinement** — Simplified installation instructions.

---

## [2.2.0] — 2026-02-22

### ✨ Added
- **Generic ThemeProvider** — Completely rewritten theme engine with three token buckets:
  - `colors` — Override any of the 19 built-in color tokens per mode
  - `sizes` — Override 13 built-in size/spacing/radius/font tokens per mode
  - `custom` — Define **any** token with any name (e.g. `heroBackground`, `sidebarWidth`, `chartColor1`)
- **`ThemeSizes` interface** — New built-in size/spacing token type with CSS variables (`--radius-md`, `--font-size-md`, `--spacing-lg`, etc.)
- **`CustomTokens` type** — `Record<string, string>` for user-defined tokens; auto-injected as `--custom-[kebab-name]` CSS variables
- **`tokens` on `useTheme`** — Merged flat object (`colors + sizes + custom`) for convenient access in JSX
- **Stepper component** — Full implementation with variants (numbered, icon, dot, pill), orientations, and sizes.
- **ThemeProvider Storybook story** — Live token grid, dark/light toggle, custom token showcase, purple brand theme demo
- **Stepper Storybook stories** — Numbered, dot, pill, vertical, clickable, error state, and size comparison

### 🔧 Fixed
- `MangoBox` switch-case bug: `const` inside bare `case` blocks now wrapped in `{ }` to prevent lexical declaration errors
- `MangoBox` variants (`elevated`, `outline`, `flat`, `gradient`) now use CSS variables.
- Hover transitions removed from `Box` and `MangoBox`.

### 📦 Package
- Added `exports` field for proper ESM/CJS resolution.
- Updated `description` and `author`.
- Version bumped from `2.1.0` → `2.2.0`.
