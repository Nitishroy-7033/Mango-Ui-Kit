import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TimePicker } from './index';

describe('TimePicker', () => {
  it('renders without crashing', () => {
    const { container } = render(<TimePicker onChange={vi.fn()} />);
    expect(container).toBeDefined();
  });

  it('shows placeholder', () => {
    render(<TimePicker onChange={vi.fn()} placeholder="Pick time" />);
    expect(screen.getByText('Pick time')).toBeDefined();
  });

  it('opens dropdown on trigger click', () => {
    render(<TimePicker onChange={vi.fn()} />);
    fireEvent.click(screen.getByText('Select time'));
    expect(screen.getByText('HOUR')).toBeDefined();
  });

  it('renders label when provided', () => {
    render(<TimePicker onChange={vi.fn()} label="Time" />);
    expect(screen.getByText('Time')).toBeDefined();
  });
});
