import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ReportMetricsCard } from './index';

describe('ReportMetricsCard', () => {
  it('renders without crashing', () => {
    const { container } = render(<ReportMetricsCard />);
    expect(container).toBeDefined();
  });

  it('renders title and value', () => {
    render(<ReportMetricsCard title="Revenue" value="$12,500" />);
    expect(screen.getByText('Revenue')).toBeDefined();
    expect(screen.getByText('$12,500')).toBeDefined();
  });

  it('renders trend percentage', () => {
    render(<ReportMetricsCard trend={15} />);
    expect(screen.getByText('15%')).toBeDefined();
  });

  it('calls onOptionsClick when options button clicked', () => {
    const onOptionsClick = vi.fn();
    render(<ReportMetricsCard onOptionsClick={onOptionsClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onOptionsClick).toHaveBeenCalledOnce();
  });
});
