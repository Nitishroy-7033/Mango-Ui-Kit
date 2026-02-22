# Changelog

All notable changes to **Mango UI Kit** are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.3.0] — 2026-02-22

### ✨ Added
- **List & ListItem** — Feature-rich list system with support for thumbnails, descriptions, actions, dividers, and various hover effects.
- **Speed Dial** — Floating Action Button (FAB) that "explodes" with secondary actions. Supports multiple directions, staggered animations, and glassmorphism.
- **Grid View** — Highly responsive grid system with customizable columns, gaps, and breakpoints.
- **Async Features** — Built-in support for **Shimmering Skeleton** loading and **Infinite Scroll** for both List and Grid views.
- **Numeric Pagination** — Out-of-the-box numeric pagination controls for both List and Grid components.

---

## [3.2.0] — 2026-02-22


### ✨ Added
- **Bottom Navigation Bar** — Premium, mobile-first navigation with 6 variants (Classic, Floating, Bubble, etc.), custom positioning, and center CTA support.
- **Number Input (Spinner)** — Precision numeric entry with increment/decrement controls, value clamping, and sizing support.

---

## [3.1.0] — 2026-02-22

### ✨ Added
- **Flutter-inspired Column** — New `Column` component for vertical flex layouts with intuitive alignment.
- **Improved Alignment Props** — `Row` and `Column` now support `mainAxisAlignment` and `crossAxisAlignment` props, matching Flutter's layout model.
- **Standardized Flex Utilities** — CSS utilities for `start`, `end`, `center`, `spaceBetween`, `around`, and `evenly` are now consistent across both components.

---

## [3.0.1] — 2026-02-22

### 🔧 Fixed
- **CSS Resolution** — Fixed missing specifier for `mango-ui-kit.css` in `package.json` exports. Users can now import styles using `mango-ui-kit/dist/mango-ui-kit.css` or the cleaner `mango-ui-kit/style.css`.

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
