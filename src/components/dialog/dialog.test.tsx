import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dialog } from './index';

describe('Dialog', () => {
  it('renders without crashing when open', () => {
    const { container } = render(<Dialog isOpen onClose={vi.fn()} />);
    expect(container).toBeDefined();
  });

  it('does not render when isOpen is false', () => {
    const { container } = render(<Dialog isOpen={false} onClose={vi.fn()} />);
    expect(container.innerHTML).toBe('');
  });

  it('renders title and description', () => {
    render(<Dialog isOpen onClose={vi.fn()} title="Confirm" description="Are you sure?" />);
    expect(screen.getByText('Confirm')).toBeDefined();
    expect(screen.getByText('Are you sure?')).toBeDefined();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<Dialog isOpen onClose={onClose} />);
    fireEvent.click(screen.getByLabelText('Close dialog'));
    expect(onClose).toHaveBeenCalledOnce();
  });
});
