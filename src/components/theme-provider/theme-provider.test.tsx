import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './index';

describe('ThemeProvider', () => {
  it('renders without crashing', () => {
    const { container } = render(<ThemeProvider>Content</ThemeProvider>);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<ThemeProvider><span>Hello</span></ThemeProvider>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
