import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './index';

const sampleItems = [
  { id: 1, title: 'Section 1', content: 'Content 1' },
  { id: 2, title: 'Section 2', content: 'Content 2' },
];

describe('Accordion', () => {
  it('renders without crashing', () => {
    const { container } = render(<Accordion />);
    expect(container).toBeDefined();
  });

  it('renders all items', () => {
    render(<Accordion items={sampleItems} />);
    expect(screen.getByText('Section 1')).toBeDefined();
    expect(screen.getByText('Section 2')).toBeDefined();
  });

  it('opens item on click', () => {
    render(<Accordion items={sampleItems} />);
    fireEvent.click(screen.getByText('Section 1'));
    expect(screen.getByText('Content 1')).toBeDefined();
  });

  it('calls onChange when item is clicked', () => {
    const onChange = vi.fn();
    render(<Accordion items={sampleItems} onChange={onChange} />);
    fireEvent.click(screen.getByText('Section 1'));
    expect(onChange).toHaveBeenCalledWith([0]);
  });
});
