#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, sep } from 'node:path';
import { readFileSync } from 'node:fs';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('../', import.meta.url)));

function toKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function toPascal(name) {
  return name
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^[a-z]/, (c) => c.toUpperCase())
    .replace(/[-_ ]+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase());
}

function ask(query) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(query, (a) => { rl.close(); resolve(a); }));
}

function componentName(name) {
  const raw = name.trim();

  if (/^[A-Z][a-zA-Z0-9]*$/.test(raw)) return raw;

  return raw
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_ ]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

function kebabClassName(name) {
  return `mango-${toKebab(name)}`;
}

function propsTypeName(pascal) {
  return `${pascal}Props`;
}

function refType(pascal) {
  return `HTMLDivElement`;
}

function generateTypes(pascal) {
  const props = propsTypeName(pascal);
  return `import type { HTMLAttributes, ReactNode } from 'react';

export interface ${props} extends HTMLAttributes<HTMLDivElement> {
  /** Content of the component */
  children?: ReactNode;
  /** Additional class names */
  className?: string;
}
`;
}

function generateComponent(pascal, kebab, cssClass) {
  const props = propsTypeName(pascal);
  return `import React from 'react';
import { cn } from '../../utils/cn';
import type { ${props} } from './${kebab}.types';
import './${kebab}.css';

export const ${pascal} = React.forwardRef<${refType(pascal)}, ${props}>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('${cssClass}', className)} {...props}>
        {children}
      </div>
    );
  },
);

${pascal}.displayName = '${pascal}';
`;
}

function generateCSS(cssClass) {
  const readable = cssClass
    .replace('mango-', '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return `/* ═══════════════════════════════════════════════════════════
   MANGO UI – ${readable} Styles
   ═══════════════════════════════════════════════════════════ */

.${cssClass} {
    display: block;
    font-family: var(--font-family, 'General Sans', sans-serif);
}
`;
}

function generateTest(pascal, kebab) {
  return `import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ${pascal} } from './${kebab}';

describe('${pascal}', () => {
    it('renders children correctly', () => {
        render(<${pascal}>Hello World</${pascal}>);
        expect(screen.getByText('Hello World')).toBeDefined();
    });

    it('renders with custom className', () => {
        render(<${pascal} className="custom-class">Test</${pascal}>);
        const el = screen.getByText('Test');
        expect(el.className).toContain('custom-class');
    });
});
`;
}

function generateStories(pascal, kebab) {
  const props = propsTypeName(pascal);
  return `import type { Meta, StoryObj } from '@storybook/react-vite';
import { ${pascal} } from './${kebab}';

const meta: Meta<typeof ${pascal}> = {
    title: 'Components/${pascal}',
    component: ${pascal},
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '${pascal} Component',
    },
};

export const CustomClass: Story = {
    args: {
        children: 'With custom class',
        className: 'custom-class',
    },
};
`;
}

function generateIndex(pascal, kebab, props) {
  return `export * from './${kebab}';
export type { ${props} } from './${kebab}.types';
`;
}

function updateMainIndex(kebab) {
  const indexPath = join(ROOT, 'src', 'index.ts');

  if (!existsSync(indexPath)) return false;

  let content = readFileSync(indexPath, 'utf-8');
  const exportLine = `export * from './components/${kebab}';`;

  if (content.includes(exportLine)) return false;

  const hooksIdx = content.indexOf("export * from './hooks'");
  if (hooksIdx !== -1) {
    const beforeHooks = content.lastIndexOf('\n', hooksIdx - 1);
    const lineStart = beforeHooks !== -1 ? beforeHooks + 1 : 0;
    content =
      content.slice(0, lineStart) +
      exportLine +
      '\n' +
      content.slice(lineStart);
  } else {
    content += `\n${exportLine}`;
  }

  writeFileSync(indexPath, content, 'utf-8');
  return true;
}

async function main() {
  const rawName = process.argv[2];
  const registerFlag = process.argv.includes('--register');

  if (!rawName) {
    console.error('Usage: node scripts/generate-component.mjs <ComponentName> [--register]');
    console.error('  <ComponentName>  Component name in PascalCase, kebab-case, or space-separated');
    console.error('  --register       Also register the component in src/index.ts');
    process.exit(1);
  }

  const pascal = toPascal(componentName(rawName));
  const kebab = toKebab(pascal);
  const cssClass = kebabClassName(pascal);
  const props = propsTypeName(pascal);

  const dir = join(ROOT, 'src', 'components', kebab);

  if (existsSync(dir)) {
    const answer = await ask(
      `Component "${kebab}" already exists at ${dir}${sep}Overwrite existing files? (y/N) `,
    );
    if (!answer.toLowerCase().startsWith('y')) {
      console.log('Aborted.');
      process.exit(0);
    }
  } else {
    mkdirSync(dir, { recursive: true });
  }

  const files = {
    [`${kebab}.tsx`]: generateComponent(pascal, kebab, cssClass),
    [`${kebab}.types.ts`]: generateTypes(pascal),
    [`${kebab}.css`]: generateCSS(cssClass),
    [`${kebab}.test.tsx`]: generateTest(pascal, kebab),
    [`${kebab}.stories.tsx`]: generateStories(pascal, kebab),
    'index.ts': generateIndex(pascal, kebab, props),
  };

  for (const [name, content] of Object.entries(files)) {
    const filePath = join(dir, name);
    writeFileSync(filePath, content, 'utf-8');
    console.log(`  ${filePath}`);
  }

  if (registerFlag) {
    const updated = updateMainIndex(kebab);
    if (updated) {
      console.log(`  ${join(ROOT, 'src', 'index.ts')} (registered)`);
    } else {
      console.log(`  src/index.ts: already registered or not found`);
    }
  }

  console.log(`\n✔ Component "${pascal}" generated successfully!`);
  console.log(`  Directory: src/components/${kebab}`);
  console.log(`  CSS class: .${cssClass}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
