import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './index';

describe('Avatar', () => {
  it('renders without crashing', () => {
    const { container } = render(<Avatar />);
    expect(container).toBeDefined();
  });

  it('renders fallback initials from alt', () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText('J')).toBeDefined();
  });

  it('renders fallback text when provided', () => {
    render(<Avatar fallback="JD" />);
    expect(screen.getByText('JD')).toBeDefined();
  });

  it('renders image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User" />);
    const img = screen.getByRole('img');
    expect(img).toBeDefined();
  });
});
