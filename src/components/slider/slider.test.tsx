import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from './index';

describe('Slider', () => {
  it('renders without crashing', () => {
    const { container } = render(<Slider />);
    expect(container).toBeDefined();
  });

  it('renders with default value', () => {
    render(<Slider defaultValue={50} />);
    expect(screen.getByText('50')).toBeDefined();
  });

  it('shows min/max labels when showMinMax is true', () => {
    render(<Slider min={0} max={100} showMinMax />);
    const zeros = screen.getAllByText('0');
    expect(zeros.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('100')).toBeDefined();
  });
});
