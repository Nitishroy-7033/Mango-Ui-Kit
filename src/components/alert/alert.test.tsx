import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Alert } from './index';

describe('Alert', () => {
  it('renders without crashing', () => {
    const { container } = render(<Alert />);
    expect(container).toBeDefined();
  });

  it('renders title and children', () => {
    render(<Alert title="Hello">World</Alert>);
    expect(screen.getByText('Hello')).toBeDefined();
    expect(screen.getByText('World')).toBeDefined();
  });

  it('renders action button and calls onAction', () => {
    const onAction = vi.fn();
    render(<Alert actionLabel="Undo" onAction={onAction} />);
    fireEvent.click(screen.getByText('Undo'));
    expect(onAction).toHaveBeenCalledOnce();
  });

  it('shows dismiss button and calls onDismiss', () => {
    const onDismiss = vi.fn();
    render(<Alert dismissible onDismiss={onDismiss} />);
    fireEvent.click(screen.getByLabelText('Dismiss alert'));
    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it('has role alert', () => {
    render(<Alert />);
    expect(screen.getByRole('alert')).toBeDefined();
  });
});
