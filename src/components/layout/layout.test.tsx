import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Box, Row, Column, Col } from './index';

describe('Box', () => {
  it('renders without crashing', () => {
    const { container } = render(<Box />);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Box>Content</Box>);
    expect(screen.getByText('Content')).toBeDefined();
  });
});

describe('Row', () => {
  it('renders without crashing', () => {
    const { container } = render(<Row />);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Row><span>Item</span></Row>);
    expect(screen.getByText('Item')).toBeDefined();
  });
});

describe('Column', () => {
  it('renders without crashing', () => {
    const { container } = render(<Column />);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Column><span>Item</span></Column>);
    expect(screen.getByText('Item')).toBeDefined();
  });
});

describe('Col', () => {
  it('renders without crashing', () => {
    const { container } = render(<Col />);
    expect(container).toBeDefined();
  });

  it('renders children', () => {
    render(<Col><span>Item</span></Col>);
    expect(screen.getByText('Item')).toBeDefined();
  });
});
