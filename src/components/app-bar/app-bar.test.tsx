import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppBar } from './index';

describe('AppBar', () => {
  it('renders without crashing', () => {
    const { container } = render(<AppBar />);
    expect(container).toBeDefined();
  });

  it('renders brand name', () => {
    render(<AppBar brandName="MyApp" />);
    expect(screen.getByText('MyApp')).toBeDefined();
  });

  it('renders login button when not authenticated', () => {
    render(<AppBar />);
    expect(screen.getByText('Sign In')).toBeDefined();
  });

  it('renders search input when showSearch is true', () => {
    render(<AppBar />);
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });

  it('renders subscription plan badge', () => {
    render(<AppBar subscriptionPlan="Pro" />);
    expect(screen.getByText('Pro')).toBeDefined();
  });
});
