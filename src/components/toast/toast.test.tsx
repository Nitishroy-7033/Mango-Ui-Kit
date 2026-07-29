import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toast } from './index';

describe('Toast', () => {
  it('renders without crashing', () => {
    const { container } = render(<Toast id="1" onClose={vi.fn()} description="Hello" />);
    expect(container).toBeDefined();
  });

  it('renders title and description', () => {
    render(<Toast id="1" onClose={vi.fn()} title="Success" description="Saved!" />);
    expect(screen.getByText('Success')).toBeDefined();
    expect(screen.getByText('Saved!')).toBeDefined();
  });

  it('renders action button when provided', () => {
    render(<Toast id="1" onClose={vi.fn()} description="Updated" action={{ label: 'Undo', onClick: vi.fn() }} />);
    expect(screen.getByText('Undo')).toBeDefined();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<Toast id="1" onClose={onClose} description="Test" />);
    fireEvent.click(screen.getByLabelText('Close toast'));
    expect(onClose).toHaveBeenCalledWith('1');
  });

  it('has role alert', () => {
    render(<Toast id="1" onClose={vi.fn()} description="Alert" />);
    expect(screen.getByRole('alert')).toBeDefined();
  });
});
