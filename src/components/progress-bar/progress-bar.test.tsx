import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar, CircularProgress } from './index';

describe('ProgressBar', () => {
  it('renders without crashing', () => {
    const { container } = render(<ProgressBar />);
    expect(container).toBeDefined();
  });

  it('shows percentage when showPercentage is true', () => {
    render(<ProgressBar progress={50} showPercentage />);
    expect(screen.getByText('50%')).toBeDefined();
  });

  it('shows label when provided', () => {
    render(<ProgressBar label="Uploading" />);
    expect(screen.getByText('Uploading')).toBeDefined();
  });

  it('has role progressbar', () => {
    render(<ProgressBar progress={30} />);
    expect(screen.getByRole('progressbar')).toBeDefined();
  });
});

describe('CircularProgress', () => {
  it('renders without crashing', () => {
    const { container } = render(<CircularProgress />);
    expect(container).toBeDefined();
  });

  it('renders label when provided', () => {
    render(<CircularProgress label="Loading" />);
    expect(screen.getByText('Loading')).toBeDefined();
  });
});
