import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SelectionToolbar } from './index';

describe('SelectionToolbar', () => {
  it('renders without crashing', () => {
    const { container } = render(<SelectionToolbar><p>Some text</p></SelectionToolbar>);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<SelectionToolbar><p>Hello</p></SelectionToolbar>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
