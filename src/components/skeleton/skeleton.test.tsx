import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from './index';

describe('Skeleton', () => {
  it('renders without crashing', () => {
    const { container } = render(<Skeleton />);
    expect(container).toBeDefined();
  });

  it('renders multiple skeletons when count is set', () => {
    const { container } = render(<Skeleton count={3} />);
    const skeletons = container.querySelectorAll('.mango-skeleton');
    expect(skeletons.length).toBe(3);
  });

  it('renders a single skeleton by default', () => {
    const { container } = render(<Skeleton />);
    const skeletons = container.querySelectorAll('.mango-skeleton');
    expect(skeletons.length).toBe(1);
  });
});
