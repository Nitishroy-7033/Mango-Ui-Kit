import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OptionMenu } from './index';
import React from 'react';

const options = [
  { id: 'edit', label: 'Edit', onClick: vi.fn() },
  { id: 'delete', label: 'Delete', onClick: vi.fn() },
];

describe('OptionMenu', () => {
  it('renders without crashing', () => {
    const { container } = render(<OptionMenu trigger={<button>Open</button>} options={options} />);
    expect(container).toBeDefined();
  });

  it('opens menu on trigger click', () => {
    render(<OptionMenu trigger={<button>Open</button>} options={options} />);
    fireEvent.click(screen.getByText('Open'));
    expect(screen.getByText('Edit')).toBeDefined();
    expect(screen.getByText('Delete')).toBeDefined();
  });

  it('calls onClick when menu item is clicked', () => {
    render(<OptionMenu trigger={<button>Open</button>} options={options} />);
    fireEvent.click(screen.getByText('Open'));
    fireEvent.click(screen.getByText('Edit'));
    expect(options[0].onClick).toHaveBeenCalledWith('edit');
  });
});
