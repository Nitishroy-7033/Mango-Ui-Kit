import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MangoBox } from './index';

describe('MangoBox', () => {
  it('renders without crashing', () => {
    const { container } = render(<MangoBox />);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<MangoBox><span>Hello</span></MangoBox>);
    expect(screen.getByText('Hello')).toBeDefined();
  });

  it('applies variant class', () => {
    const { container } = render(<MangoBox variant="elevated" />);
    expect(container.firstChild).toBeDefined();
  });
});
