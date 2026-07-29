import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AvatarGroup } from './index';
import { Avatar } from '../avatar';

describe('AvatarGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(<AvatarGroup><Avatar alt="A" /></AvatarGroup>);
    expect(container).toBeDefined();
  });

  it('renders all avatars when no max', () => {
    render(<AvatarGroup><Avatar alt="A" /><Avatar alt="B" /></AvatarGroup>);
    expect(screen.getByText('A')).toBeDefined();
    expect(screen.getByText('B')).toBeDefined();
  });

  it('shows remaining count when max is set', () => {
    render(<AvatarGroup max={1}><Avatar alt="A" /><Avatar alt="B" /></AvatarGroup>);
    expect(screen.getByText('+1')).toBeDefined();
  });
});
