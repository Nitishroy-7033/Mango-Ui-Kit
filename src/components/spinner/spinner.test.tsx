import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Spinner } from './spinner';

describe('Spinner', () => {
    it('renders a spinner element', () => {
        const { container } = render(<Spinner />);
        expect(container.querySelector('.mango-spinner')).toBeInTheDocument();
    });

    it('renders with custom size', () => {
        const { container } = render(<Spinner size={48} />);
        const svg = container.querySelector('svg');
        expect(svg).toHaveAttribute('width', '48');
        expect(svg).toHaveAttribute('height', '48');
    });

    it('renders with custom color via CSS variable', () => {
        const { container } = render(<Spinner color="#ff0000" />);
        const spinner = container.querySelector('.mango-spinner') as HTMLElement;
        expect(spinner.style.getPropertyValue('--spinner-color')).toBe('#ff0000');
    });

    it('renders dots variant', () => {
        const { container } = render(<Spinner variant="dots" />);
        expect(container.querySelector('.mango-spinner-dots')).toBeInTheDocument();
    });

    it('renders waves variant', () => {
        const { container } = render(<Spinner variant="waves" />);
        expect(container.querySelector('.mango-spinner-waves')).toBeInTheDocument();
    });

    it('renders pulse variant', () => {
        const { container } = render(<Spinner variant="pulse" />);
        expect(container.querySelector('.mango-spinner-pulse')).toBeInTheDocument();
    });

    it('renders ring variant', () => {
        const { container } = render(<Spinner variant="ring" />);
        expect(container.querySelector('.mango-spinner-ring')).toBeInTheDocument();
    });

    it('renders gear variant', () => {
        const { container } = render(<Spinner variant="gear" />);
        expect(container.querySelector('.mango-spinner-gear')).toBeInTheDocument();
    });

    it('renders bouncing variant', () => {
        const { container } = render(<Spinner variant="bouncing" />);
        expect(container.querySelector('.mango-spinner-bouncing')).toBeInTheDocument();
    });

    it('renders icon-spin variant with default RefreshCw icon', () => {
        const { container } = render(<Spinner variant="icon-spin" />);
        expect(container.querySelector('.mango-spinner-icon-spin')).toBeInTheDocument();
    });

    it('has display name set', () => {
        expect(Spinner.displayName).toBe('Spinner');
    });

    it('applies custom className', () => {
        const { container } = render(<Spinner className="custom-class" />);
        expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });
});
