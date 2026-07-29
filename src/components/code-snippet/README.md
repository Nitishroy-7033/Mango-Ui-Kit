# CodeSnippet

A read-only or editable code block with syntax highlighting, line numbers, and a copy button. Supports multiple languages and themes.

## Features
- **Syntax Highlighting**: JavaScript, TypeScript, JSX, TSX, HTML, CSS, JSON, Python, Bash, Markdown.
- **Line Numbers**: Toggleable line numbering.
- **Copy Button**: One-click copy with a brief confirmation state.
- **Editable Mode**: Switch to a textarea for live code editing.
- **Header/Footer**: Optional header and footer titles for context.
- **Line Spacing**: Compact, Normal, or Relaxed line heights.
- **Wrap Lines**: Toggle line wrapping for long lines.

## Usage

```tsx
import { CodeSnippet } from 'mango-ui-kit';

<CodeSnippet
  code="const greeting = 'Hello World';"
  language="javascript"
  showLineNumbers
  showCopyButton
/>

<CodeSnippet
  code={myCodeString}
  language="tsx"
  headerTitle="Example.tsx"
  footerTitle="10 lines"
  wrapLines
/>

<CodeSnippet
  code={code}
  language="python"
  readOnly={false}
  onCodeChange={(newCode) => console.log(newCode)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | — | The code string to display |
| `language` | `CodeLanguage` | `'javascript'` | Language for syntax highlighting |
| `showLineNumbers` | `boolean` | `true` | Show line numbers |
| `lineSpacing` | `'compact' \| 'normal' \| 'relaxed'` | `'normal'` | Vertical line spacing |
| `showCopyButton` | `boolean` | `true` | Show copy-to-clipboard button |
| `headerTitle` | `string` | — | Title shown in the header |
| `footerTitle` | `string` | — | Title shown in the footer |
| `wrapLines` | `boolean` | `false` | Wrap long lines |
| `theme` | `'light' \| 'dark' \| 'system'` | — | Custom theme colors |
| `readOnly` | `boolean` | `true` | Whether the code is read-only |
| `onCodeChange` | `(code: string) => void` | — | Callback when code changes (editable mode) |