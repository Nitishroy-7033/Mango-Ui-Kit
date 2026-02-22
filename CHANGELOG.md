# Changelog

All notable changes to **Mango UI Kit** are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- **Stepper component** — Full implementation with:
  - 4 variants: `numbered`, `icon`, `dot`, `pill`
  - 2 orientations: `horizontal`, `vertical`
  - 3 sizes: `sm`, `md`, `lg`
  - Step statuses: `completed`, `active`, `error`, `upcoming`
  - Optional `onStepClick` handler for navigable steppers
  - Optional step labels via `optional` prop
- **ThemeProvider Storybook story** — Live token grid, dark/light toggle, custom token showcase, purple brand theme demo
- **Stepper Storybook stories** — Numbered, dot, pill, vertical, clickable, error state, and size comparison

### 🔧 Fixed
- `MangoBox` switch-case bug: `const` inside bare `case` blocks now wrapped in `{ }` to prevent lexical declaration errors
- `MangoBox` variants (`elevated`, `outline`, `flat`, `gradient`) now use CSS variables (`var(--primaryContainercolor)`, etc.) instead of hardcoded colors — automatically respects active theme
- Hover transitions removed from `Box` and `MangoBox` — components are now fully static by default

### 📦 Package
- Added `exports` field for proper ESM/CJS resolution in modern bundlers (Next.js App Router, Vite, etc.)
- Updated `description` to accurately describe the library
- Fixed `author` field to include name, email, and GitHub URL
- Updated `keywords` with searchable npm terms: `design-system`, `dark-mode`, `theme`, `css-variables`
- Version bumped from `2.1.0` → `2.2.0`

---

## [2.1.0] — 2026-02-21

### ✨ Added
- **Toggle component** with multiple design variants: `slider`, `ios`, `push`, `glow`, `minimal`, `square`
- **Box component system**:
  - Base `Box` with shorthand props: `p`, `px`, `py`, `bg`, `color`, `radius`, `shadow`, `blur`, `gradient`, `justify`, `align`, `gap`, `flexDirection`, etc.
  - `MangoBox` with pre-built variants: `elevated`, `dashed`, `outline`, `glass`, `neon`, `gradient`, `flat`
  - `Row` flexible container with `justify`, `align`, `gap`, `wrap`, `fullWidth`
  - `Col` 12-column grid component with `span` and `flex` props

### 🔧 Fixed
- CalendarDatePicker and DateRangePicker now fully respect theme CSS variables (no hardcoded colors)

---

## [2.0.0] — 2026-02-19

### ✨ Added
- **StatCard** — KPI metric card with value, title, change indicator, and icon
- **Rating** — Star rating component with half-star support and custom icons
- **Tabs** — Smooth animated tab switcher
- **Accordion** — Collapsible content panels
- **CommandPalette** — ⌘K search overlay with sections, keyboard shortcuts, and keyboard navigation
- **OtpInput** — 4–8 digit OTP field with auto-focus and paste support
- **SegmentedControl** — Pill-style option selector
- **Slider** — Range slider with single and dual-thumb support
- **ThemeProvider v1** — Basic light/dark mode with localStorage persistence and CSS variable injection

### 🔧 Fixed
- Toast z-index layering fixed for use inside modals
- Dropdown click-outside detection improved for nested dropdowns

---

## [1.2.0] — 2026-02-15

### ✨ Added
- **Toast / ToastContainer** — Global observer-based notification system with `toast.success()`, `toast.error()`, `toast.warning()`, `toast.info()`
- **MediaUploader** — Drag-and-drop file uploader with avatar and card trigger modes and real-time progress
- **Drawer** — Side-panel component with left, right, top, bottom positions
- **Dialog** — Lightweight alternative to Modal for inline confirmations

---

## [1.1.0] — 2026-02-12

### ✨ Added
- **Checkbox** — CSS-first with `solid`, `soft`, `outline` variants and animation
- **Radio / RadioGroup** — Styled radio inputs with custom variants
- **ProgressBar** — Linear and circular progress with color variants
- **Skeleton** — Content placeholder loader with shimmer animation
- **Spinner** — SVG-based loading indicator with size and color props
- **Pagination** — Page navigation with compact and full layouts

---

## [1.0.0] — 2026-02-08

### 🎉 Initial Release
- **Button** — Primary, Outline, Soft, Ghost variants with loading and icon states
- **Input** — Text, password, number with labels, validation, and char counter
- **Badge** — Status and count badge with color variants
- **Avatar / AvatarGroup** — Image and initials avatar with group overflow
- **Card** — Container card with optional header, body, footer
- **Modal** — Accessible overlay dialog with backdrop blur
- **Dropdown** — Menu with icon support and keyboard navigation
- **Alert** — Inline status messages with close action
- **Breadcrumbs** — Navigation trail component
- **Chip** — Filterable, dismissible tag chips
- **AppBar** — Top navigation bar
- **Sidebar** — Collapsible navigation sidebar
- **Tooltip** — Hover tooltip with 4 placement options
- **MultiSelect** — Searchable multi-option selector
- **TimePicker / CalendarDatePicker / DateRangePicker** — Date/time input suite
- **Table** — Sortable, responsive data table with empty states
