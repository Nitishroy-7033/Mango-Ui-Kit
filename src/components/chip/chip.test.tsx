import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Chip } from './index';

describe('Chip', () => {
  it('renders without crashing', () => {
    const { container } = render(<Chip>Label</Chip>);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Chip>Hello</Chip>);
    expect(screen.getByText('Hello')).toBeDefined();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<Chip onClick={onClick}>Clickable</Chip>);
    fireEvent.click(screen.getByText('Clickable'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('calls onRemove when remove button clicked', () => {
    const onRemove = vi.fn();
    render(<Chip removable onRemove={onRemove}>Removable</Chip>);
    fireEvent.click(screen.getByLabelText('Remove'));
    expect(onRemove).toHaveBeenCalledOnce();
  });
});
