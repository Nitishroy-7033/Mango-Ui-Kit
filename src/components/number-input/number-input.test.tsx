import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NumberInput } from './index';

describe('NumberInput', () => {
  it('renders without crashing', () => {
    const { container } = render(<NumberInput />);
    expect(container).toBeDefined();
  });

  it('renders increment and decrement buttons', () => {
    render(<NumberInput />);
    expect(screen.getByLabelText('Increase value')).toBeDefined();
    expect(screen.getByLabelText('Decrease value')).toBeDefined();
  });

  it('calls onChange when incremented', () => {
    const onChange = vi.fn();
    render(<NumberInput onChange={onChange} defaultValue={5} />);
    fireEvent.click(screen.getByLabelText('Increase value'));
    expect(onChange).toHaveBeenCalledWith(6);
  });

  it('calls onChange when decremented', () => {
    const onChange = vi.fn();
    render(<NumberInput onChange={onChange} defaultValue={5} />);
    fireEvent.click(screen.getByLabelText('Decrease value'));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it('renders label when provided', () => {
    render(<NumberInput label="Quantity" />);
    expect(screen.getByText('Quantity')).toBeDefined();
  });
});
