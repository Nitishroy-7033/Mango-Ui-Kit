import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SpeedDial } from './index';
import React from 'react';

const actions = [
  { id: '1', icon: <span>A</span>, label: 'Action A', onClick: vi.fn() },
  { id: '2', icon: <span>B</span>, label: 'Action B', onClick: vi.fn() },
];

describe('SpeedDial', () => {
  it('renders without crashing', () => {
    const { container } = render(<SpeedDial icon={<span>+</span>} actions={actions} />);
    expect(container).toBeDefined();
  });

  it('shows action buttons when triggered', () => {
    render(<SpeedDial icon={<span>+</span>} actions={actions} />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('A')).toBeDefined();
    expect(screen.getByText('B')).toBeDefined();
  });

  it('calls action onClick when action is clicked', () => {
    render(<SpeedDial icon={<span>+</span>} actions={actions} />);
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('A'));
    expect(actions[0].onClick).toHaveBeenCalledWith('1');
  });
});
