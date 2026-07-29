import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Rating } from './index';

describe('Rating', () => {
  it('renders without crashing', () => {
    const { container } = render(<Rating />);
    expect(container).toBeDefined();
  });

  it('renders the correct number of stars', () => {
    const { container } = render(<Rating max={5} />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(5);
  });

  it('calls onChange when clicked', () => {
    const onChange = vi.fn();
    render(<Rating onChange={onChange} />);
    const buttons = document.querySelectorAll('button');
    fireEvent.click(buttons[2]);
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('renders label and count when provided', () => {
    render(<Rating label="Score" count={42} />);
    expect(screen.getByText('Score')).toBeDefined();
    expect(screen.getByText('(42)')).toBeDefined();
  });
});
