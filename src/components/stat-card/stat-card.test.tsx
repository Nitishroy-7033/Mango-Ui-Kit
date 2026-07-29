import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatCard } from './index';

describe('StatCard', () => {
  it('renders without crashing', () => {
    const { container } = render(<StatCard label="Users" value="1,234" />);
    expect(container).toBeDefined();
  });

  it('renders label and value', () => {
    render(<StatCard label="Revenue" value="$50K" />);
    expect(screen.getByText('Revenue')).toBeDefined();
    expect(screen.getByText('$50K')).toBeDefined();
  });

  it('renders trend badge when trend is provided', () => {
    render(<StatCard label="Sales" value="500" trend={12} />);
    expect(screen.getByText('12%')).toBeDefined();
  });

  it('renders trendLabel when provided', () => {
    render(<StatCard label="Sales" value="500" trendLabel="vs last month" />);
    expect(screen.getByText('vs last month')).toBeDefined();
  });
});
