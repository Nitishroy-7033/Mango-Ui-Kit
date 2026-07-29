import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid } from './index';

describe('Grid', () => {
  it('renders without crashing', () => {
    const { container } = render(<Grid />);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Grid><span>Item</span></Grid>);
    expect(screen.getByText('Item')).toBeDefined();
  });

  it('shows empty state when no children', () => {
    render(<Grid emptyState="No items" />);
    expect(screen.getByText('No items')).toBeDefined();
  });

  it('renders pagination when provided', () => {
    render(<Grid pagination={{ current: 1, total: 20, pageSize: 10, onChange: vi.fn() }} />);
    expect(screen.getByText('2')).toBeDefined();
  });
});
