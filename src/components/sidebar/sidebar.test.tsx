import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './index';
import React from 'react';

const categories = [
  {
    title: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <span>D</span> },
      { id: 'settings', label: 'Settings', icon: <span>S</span> },
    ],
  },
];

describe('Sidebar', () => {
  it('renders without crashing', () => {
    const { container } = render(<Sidebar categories={categories} />);
    expect(container).toBeDefined();
  });

  it('renders category title', () => {
    render(<Sidebar categories={categories} />);
    expect(screen.getByText('Main')).toBeDefined();
  });

  it('renders items', () => {
    render(<Sidebar categories={categories} />);
    expect(screen.getByText('Dashboard')).toBeDefined();
    expect(screen.getByText('Settings')).toBeDefined();
  });

  it('calls onItemClick when item is clicked', () => {
    const onItemClick = vi.fn();
    render(<Sidebar categories={categories} onItemClick={onItemClick} />);
    fireEvent.click(screen.getByText('Dashboard'));
    expect(onItemClick).toHaveBeenCalledWith('dashboard', undefined);
  });
});
