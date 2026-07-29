import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from './index';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Details' },
];

describe('Breadcrumbs', () => {
  it('renders without crashing', () => {
    const { container } = render(<Breadcrumbs items={items} />);
    expect(container).toBeDefined();
  });

  it('renders all items', () => {
    render(<Breadcrumbs items={items} />);
    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('Products')).toBeDefined();
    expect(screen.getByText('Details')).toBeDefined();
  });

  it('renders links for items with href', () => {
    render(<Breadcrumbs items={items} />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
  });

  it('has aria-label Breadcrumb', () => {
    render(<Breadcrumbs items={items} />);
    expect(screen.getByLabelText('Breadcrumb')).toBeDefined();
  });
});
