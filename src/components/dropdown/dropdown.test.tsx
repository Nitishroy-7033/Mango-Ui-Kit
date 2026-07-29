import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './index';

const options = [
  { id: '1', name: 'Option A' },
  { id: '2', name: 'Option B' },
];

describe('Dropdown', () => {
  it('renders without crashing', () => {
    const { container } = render(<Dropdown options={options} />);
    expect(container).toBeDefined();
  });

  it('shows placeholder by default', () => {
    render(<Dropdown options={options} placeholder="Choose..." />);
    expect(screen.getByText('Choose...')).toBeDefined();
  });

  it('opens menu on trigger click', () => {
    render(<Dropdown options={options} />);
    fireEvent.click(screen.getByText('Select option'));
    expect(screen.getByText('Option A')).toBeDefined();
  });

  it('calls onChange when an option is selected', () => {
    const onChange = vi.fn();
    render(<Dropdown options={options} onChange={onChange} />);
    fireEvent.click(screen.getByText('Select option'));
    fireEvent.click(screen.getByText('Option A'));
    expect(onChange).toHaveBeenCalledWith('1');
  });
});
