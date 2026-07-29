import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { List, ListItem } from './index';

describe('List', () => {
  it('renders without crashing', () => {
    const { container } = render(<List />);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<List><ListItem title="Item" /></List>);
    expect(screen.getByText('Item')).toBeDefined();
  });

  it('renders header and footer', () => {
    render(<List header="Header" footer="Footer"><ListItem title="Item" /></List>);
    expect(screen.getByText('Header')).toBeDefined();
    expect(screen.getByText('Footer')).toBeDefined();
  });
});

describe('ListItem', () => {
  it('renders without crashing', () => {
    const { container } = render(<ListItem title="Test" />);
    expect(container).toBeDefined();
  });

  it('renders title and description', () => {
    render(<ListItem title="Title" description="Desc" />);
    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Desc')).toBeDefined();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<ListItem title="Click" onClick={onClick} />);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
