import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MediaUploader } from './index';

describe('MediaUploader', () => {
  it('renders without crashing', () => {
    const { container } = render(<MediaUploader />);
    expect(container).toBeDefined();
  });

  it('renders default upload button', () => {
    render(<MediaUploader label="Upload Files" />);
    expect(screen.getByText('Upload Files')).toBeDefined();
  });

  it('renders title when provided', () => {
    render(<MediaUploader title="Gallery" />);
    expect(screen.getByText('Gallery')).toBeDefined();
  });

  it('does not trigger file input when disabled', () => {
    render(<MediaUploader disabled label="Upload" />);
    const button = screen.getByText('Upload');
    expect(button.closest('button')).toHaveProperty('disabled', true);
  });
});
