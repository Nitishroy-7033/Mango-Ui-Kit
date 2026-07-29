import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CalendarDatePicker } from './index';

describe('CalendarDatePicker', () => {
  it('renders without crashing', () => {
    const { container } = render(<CalendarDatePicker onChange={vi.fn()} />);
    expect(container).toBeDefined();
  });

  it('shows placeholder when no value', () => {
    render(<CalendarDatePicker onChange={vi.fn()} placeholder="Pick a date" />);
    expect(screen.getByText('Pick a date')).toBeDefined();
  });

  it('opens calendar on trigger click', () => {
    render(<CalendarDatePicker onChange={vi.fn()} />);
    fireEvent.click(screen.getByText('Select date'));
    expect(screen.getByText('Today')).toBeDefined();
  });

  it('renders label when provided', () => {
    render(<CalendarDatePicker onChange={vi.fn()} label="Date" />);
    expect(screen.getByText('Date')).toBeDefined();
  });
});
