import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CommandPalette } from './index';

const actions = [
  { id: '1', label: 'Open Dashboard', onSelect: vi.fn() },
  { id: '2', label: 'New Project', onSelect: vi.fn() },
];

describe('CommandPalette', () => {
  it('renders when isOpen is true', () => {
    render(<CommandPalette isOpen onClose={vi.fn()} actions={actions} />);
    expect(screen.getByPlaceholderText('Type a command or search...')).toBeDefined();
  });

  it('does not render when isOpen is false', () => {
    const { container } = render(<CommandPalette isOpen={false} onClose={vi.fn()} actions={actions} />);
    expect(container.innerHTML).toBe('');
  });

  it('renders all actions', () => {
    render(<CommandPalette isOpen onClose={vi.fn()} actions={actions} />);
    expect(screen.getByText('Open Dashboard')).toBeDefined();
    expect(screen.getByText('New Project')).toBeDefined();
  });

  it('filters actions based on search input', () => {
    render(<CommandPalette isOpen onClose={vi.fn()} actions={actions} />);
    const input = screen.getByPlaceholderText('Type a command or search...');
    fireEvent.change(input, { target: { value: 'Dashboard' } });
    expect(screen.getByText('Open Dashboard')).toBeDefined();
    expect(screen.queryByText('New Project')).toBeNull();
  });
});
