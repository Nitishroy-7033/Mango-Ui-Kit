import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Drawer } from './index';

describe('Drawer', () => {
  it('renders without crashing when open', () => {
    const { container } = render(<Drawer isOpen onClose={vi.fn()}>Content</Drawer>);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Drawer isOpen onClose={vi.fn()}>Hello</Drawer>);
    expect(screen.getByText('Hello')).toBeDefined();
  });

  it('renders title when provided', () => {
    render(<Drawer isOpen onClose={vi.fn()} title="Sidebar">Content</Drawer>);
    expect(screen.getByText('Sidebar')).toBeDefined();
  });

  it('renders footer when provided', () => {
    render(<Drawer isOpen onClose={vi.fn()} footer={<span>Footer</span>}>Content</Drawer>);
    expect(screen.getByText('Footer')).toBeDefined();
  });
});
