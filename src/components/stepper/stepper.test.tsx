import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Stepper } from './index';

const steps = [
  { title: 'Step 1', description: 'First step' },
  { title: 'Step 2', description: 'Second step' },
  { title: 'Step 3', description: 'Third step' },
];

describe('Stepper', () => {
  it('renders without crashing', () => {
    const { container } = render(<Stepper steps={steps} />);
    expect(container).toBeDefined();
  });

  it('renders all step titles', () => {
    render(<Stepper steps={steps} />);
    expect(screen.getByText('Step 1')).toBeDefined();
    expect(screen.getByText('Step 2')).toBeDefined();
    expect(screen.getByText('Step 3')).toBeDefined();
  });

  it('calls onStepClick when a step is clicked', () => {
    const onStepClick = vi.fn();
    render(<Stepper steps={steps} onStepClick={onStepClick} />);
    fireEvent.click(screen.getByText('Step 2'));
    expect(onStepClick).toHaveBeenCalledWith(1);
  });
});
