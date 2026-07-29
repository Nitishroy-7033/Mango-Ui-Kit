import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';

describe('Badge', () => {
    it('renders badge content', () => {
        render(<Badge badgeContent={5} />);
        expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('renders children wrapped by the badge', () => {
        render(<Badge badgeContent={3}><span>Inbox</span></Badge>);
        expect(screen.getByText('Inbox')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('applies variant class', () => {
        const { container } = render(<Badge badgeContent="New" variant="danger" />);
        expect(container.querySelector('.badge-danger')).toBeInTheDocument();
    });

    it('applies size class', () => {
        const { container } = render(<Badge badgeContent="X" size="lg" />);
        expect(container.querySelector('.badge-lg')).toBeInTheDocument();
    });

    it('renders as a dot when dot prop is true', () => {
        const { container } = render(<Badge dot />);
        expect(container.querySelector('.badge-dot')).toBeInTheDocument();
    });

    it('applies pill class by default', () => {
        const { container } = render(<Badge badgeContent="Pill" />);
        expect(container.querySelector('.badge-pill')).toBeInTheDocument();
    });

    it('caps number content with maxCount', () => {
        render(<Badge badgeContent={150} maxCount={99} />);
        expect(screen.getByText('99+')).toBeInTheDocument();
    });

    it('hides badge when content is zero and showZero is false', () => {
        const { container } = render(<Badge badgeContent={0}><span>Zero</span></Badge>);
        expect(screen.getByText('Zero')).toBeInTheDocument();
        expect(container.querySelector('.mango-badge')).toBeNull();
    });

    it('shows badge when content is zero and showZero is true', () => {
        render(<Badge badgeContent={0} showZero />);
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('applies pulse class when pulse is true', () => {
        const { container } = render(<Badge badgeContent="!" pulse />);
        expect(container.querySelector('.is-pulsing')).toBeInTheDocument();
    });

    it('renders as a standalone span when no children', () => {
        const { container } = render(<Badge badgeContent="Tag" />);
        expect(container.querySelector('span.mango-badge')).toBeInTheDocument();
    });

    it('renders inner dot when showDot is true', () => {
        const { container } = render(<Badge badgeContent="Status" showDot />);
        expect(container.querySelector('.badge-inner-dot')).toBeInTheDocument();
    });
});
