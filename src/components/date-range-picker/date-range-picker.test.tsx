import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DateRangePicker } from './index';

describe('DateRangePicker', () => {
  it('renders without crashing', () => {
    const { container } = render(<DateRangePicker value={{ startDate: null, endDate: null }} onChange={vi.fn()} />);
    expect(container).toBeDefined();
  });

  it('shows placeholder', () => {
    render(<DateRangePicker value={{ startDate: null, endDate: null }} onChange={vi.fn()} placeholder="Select range" />);
    expect(screen.getByText('Select range')).toBeDefined();
  });

  it('opens calendar on click', () => {
    render(<DateRangePicker value={{ startDate: null, endDate: null }} onChange={vi.fn()} />);
    fireEvent.click(screen.getByText('Select date range'));
    expect(screen.getByText('Su')).toBeDefined();
  });

  it('renders label when provided', () => {
    render(<DateRangePicker value={{ startDate: null, endDate: null }} onChange={vi.fn()} label="Period" />);
    expect(screen.getByText('Period')).toBeDefined();
  });
});
