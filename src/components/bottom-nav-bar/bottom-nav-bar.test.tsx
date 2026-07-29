import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BottomNavigationBar } from './index';
import React from 'react';

const items = [
  { id: 'home', label: 'Home', icon: <span>H</span> },
  { id: 'search', label: 'Search', icon: <span>S</span> },
];

describe('BottomNavigationBar', () => {
  it('renders without crashing', () => {
    const { container } = render(<BottomNavigationBar items={items} />);
    expect(container).toBeDefined();
  });

  it('renders all items', () => {
    render(<BottomNavigationBar items={items} />);
    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('Search')).toBeDefined();
  });

  it('calls onChange when item is clicked', () => {
    const onChange = vi.fn();
    render(<BottomNavigationBar items={items} onChange={onChange} />);
    fireEvent.click(screen.getByText('Search'));
    expect(onChange).toHaveBeenCalledWith('search');
  });
});
