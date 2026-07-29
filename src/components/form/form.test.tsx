import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormField } from './index';

describe('FormField', () => {
  it('renders without crashing', () => {
    const { container } = render(<FormField name="test"><input /></FormField>);
    expect(container).toBeDefined();
  });

  it('renders label when provided', () => {
    render(<FormField name="email" label="Email"><input /></FormField>);
    expect(screen.getByText('Email')).toBeDefined();
  });

  it('shows required asterisk when required', () => {
    render(<FormField name="name" label="Name" required><input /></FormField>);
    expect(screen.getByText('*')).toBeDefined();
  });

  it('shows error message', () => {
    render(<FormField name="field" error="This is required"><input /></FormField>);
    expect(screen.getByText('This is required')).toBeDefined();
  });

  it('shows helper text when no error', () => {
    render(<FormField name="field" helperText="Enter your name"><input /></FormField>);
    expect(screen.getByText('Enter your name')).toBeDefined();
  });
});
