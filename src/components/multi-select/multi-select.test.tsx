import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MultiSelect } from './index';

const options = [
  { id: '1', name: 'React' },
  { id: '2', name: 'Vue' },
];

describe('MultiSelect', () => {
  it('renders without crashing', () => {
    const { container } = render(<MultiSelect options={options} value={[]} onChange={vi.fn()} />);
    expect(container).toBeDefined();
  });

  it('shows placeholder', () => {
    render(<MultiSelect options={options} value={[]} onChange={vi.fn()} placeholder="Select frameworks" />);
    expect(screen.getByText('Select frameworks')).toBeDefined();
  });

  it('opens dropdown on click', () => {
    render(<MultiSelect options={options} value={[]} onChange={vi.fn()} />);
    fireEvent.click(screen.getByText('Select options...'));
    expect(screen.getByText('React')).toBeDefined();
  });

  it('shows selected tags', () => {
    render(<MultiSelect options={options} value={['1']} onChange={vi.fn()} />);
    expect(screen.getByText('React')).toBeDefined();
  });
});
