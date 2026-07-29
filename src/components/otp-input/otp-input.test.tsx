import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OTPInput } from './index';

describe('OTPInput', () => {
  it('renders without crashing', () => {
    const { container } = render(<OTPInput value="" onChange={vi.fn()} />);
    expect(container).toBeDefined();
  });

  it('renders the correct number of input boxes', () => {
    const { container } = render(<OTPInput length={4} value="" onChange={vi.fn()} />);
    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBe(4);
  });

  it('calls onChange when typing', () => {
    const onChange = vi.fn();
    render(<OTPInput length={4} value="" onChange={onChange} />);
    const inputs = document.querySelectorAll('input');
    fireEvent.change(inputs[0], { target: { value: '1' } });
    expect(onChange).toHaveBeenCalledWith('1');
  });

  it('renders label when provided', () => {
    render(<OTPInput value="" onChange={vi.fn()} label="Enter OTP" />);
    expect(screen.getByText('Enter OTP')).toBeDefined();
  });

  it('shows error message', () => {
    render(<OTPInput value="" onChange={vi.fn()} error="Invalid code" />);
    expect(screen.getByText('Invalid code')).toBeDefined();
  });
});
