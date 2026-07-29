import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SegmentedControl } from './index';

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

describe('SegmentedControl', () => {
  it('renders without crashing', () => {
    const { container } = render(<SegmentedControl options={options} />);
    expect(container).toBeDefined();
  });

  it('renders all options', () => {
    render(<SegmentedControl options={options} />);
    expect(screen.getByText('Day')).toBeDefined();
    expect(screen.getByText('Week')).toBeDefined();
    expect(screen.getByText('Month')).toBeDefined();
  });

  it('calls onChange when an option is clicked', () => {
    const onChange = vi.fn();
    render(<SegmentedControl options={options} onChange={onChange} />);
    fireEvent.click(screen.getByText('Week'));
    expect(onChange).toHaveBeenCalledWith('week');
  });
});
