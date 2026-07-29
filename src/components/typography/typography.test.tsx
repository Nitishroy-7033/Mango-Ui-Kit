import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Typography } from './index';

describe('Typography', () => {
  it('renders without crashing', () => {
    const { container } = render(<Typography>Text</Typography>);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText('Hello World')).toBeDefined();
  });

  it('renders as h1 when variant is h1', () => {
    const { container } = render(<Typography variant="h1">Heading</Typography>);
    const h1 = container.querySelector('h1');
    expect(h1).toBeDefined();
    expect(h1?.textContent).toBe('Heading');
  });

  it('renders as p by default for body variants', () => {
    const { container } = render(<Typography variant="body-md">Body</Typography>);
    const p = container.querySelector('p');
    expect(p).toBeDefined();
  });

  it('renders with custom element when as prop is used', () => {
    const { container } = render(<Typography as="span">Custom</Typography>);
    const span = container.querySelector('span');
    expect(span).toBeDefined();
  });
});
