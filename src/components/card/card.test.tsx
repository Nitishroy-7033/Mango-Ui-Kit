import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardContent } from './index';

describe('Card', () => {
  it('renders without crashing', () => {
    const { container } = render(<Card />);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toBeDefined();
  });

  it('CardHeader renders children', () => {
    render(<CardHeader>Header</CardHeader>);
    expect(screen.getByText('Header')).toBeDefined();
  });

  it('CardTitle renders children', () => {
    render(<CardTitle>Title</CardTitle>);
    expect(screen.getByText('Title')).toBeDefined();
  });

  it('CardContent renders children', () => {
    render(<CardContent>Body</CardContent>);
    expect(screen.getByText('Body')).toBeDefined();
  });
});
