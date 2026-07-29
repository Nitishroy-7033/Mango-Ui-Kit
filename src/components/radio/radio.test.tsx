import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Radio, RadioGroup } from './index';

describe('Radio', () => {
  it('renders without crashing', () => {
    const { container } = render(<Radio />);
    expect(container).toBeDefined();
  });

  it('renders label when provided', () => {
    render(<Radio label="Option A" />);
    expect(screen.getByText('Option A')).toBeDefined();
  });

  it('calls onChange when clicked', () => {
    const onChange = vi.fn();
    render(<Radio onChange={onChange} />);
    fireEvent.click(screen.getByRole('radio'));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});

describe('RadioGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(<RadioGroup><Radio value="a" label="A" /></RadioGroup>);
    expect(container).toBeDefined();
  });

  it('renders children radio buttons', () => {
    render(<RadioGroup><Radio value="a" label="A" /><Radio value="b" label="B" /></RadioGroup>);
    expect(screen.getByText('A')).toBeDefined();
    expect(screen.getByText('B')).toBeDefined();
  });
});
