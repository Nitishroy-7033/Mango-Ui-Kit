# Contributing to Mango UI Kit

Thank you for your interest in contributing! Please read the guidelines below before getting started.

## Project Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/your-org/mango-ui-kit.git
   cd mango-ui-kit
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. If you need to build first:
   ```bash
   npm run build
   ```

## Running Storybook

Start the Storybook dev server to preview components:

```bash
npm run storybook
```

## Running Tests

Run all tests:

```bash
npm run test
```

Run tests in watch mode during development:

```bash
npm run test -- --watch
```

## Pull Request Process

1. Create a feature branch from `main`.
2. Make your changes, following the coding conventions below.
3. Run lint, type check, tests, and build locally before pushing.
4. Open a PR against `main` using the pull request template.
5. Ensure CI passes. A maintainer will review your PR.

## Coding Conventions

- **Language**: TypeScript strictly typed.
- **Components**: Use `forwardRef` to expose the underlying DOM ref.
- **Patterns**: Support both controlled and uncontrolled variants where applicable (use `useControllableState` or similar internal hooks).
- **Styling**: Use CSS Modules or the project's styling utility (check existing components for conventions).
- **File structure**: One component per folder with its styles, types, and stories co-located.
- **Naming**: PascalCase for components, camelCase for hooks and utilities.

## Component Generator

To scaffold a new component, run:

```bash
npm run generate:component <ComponentName>
```

This will create the folder, component file, styles, types, stories, and tests automatically.

## Code of Conduct

Be respectful and constructive. We welcome contributors of all experience levels.