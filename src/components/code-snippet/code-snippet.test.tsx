import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CodeSnippet } from './index';

describe('CodeSnippet', () => {
  it('renders without crashing', () => {
    const { container } = render(<CodeSnippet code="hello" />);
    expect(container).toBeDefined();
  });

  it('renders the code content', () => {
    const { container } = render(<CodeSnippet code="const x = 1;" />);
    expect(container.textContent).toContain('const x = 1;');
  });

  it('shows line numbers', () => {
    const { container } = render(<CodeSnippet code={'line1\nline2\nline3'} />);
    const lineNumbers = container.querySelectorAll('.line-number');
    expect(lineNumbers.length).toBe(3);
    expect(lineNumbers[0].textContent).toBe('1');
    expect(lineNumbers[1].textContent).toBe('2');
    expect(lineNumbers[2].textContent).toBe('3');
  });

  it('shows copy button by default', () => {
    render(<CodeSnippet code="test" />);
    expect(screen.getByText('Copy')).toBeDefined();
  });

  it('shows header title when provided', () => {
    render(<CodeSnippet code="test" headerTitle="My Code" />);
    expect(screen.getByText('My Code')).toBeDefined();
  });
});
