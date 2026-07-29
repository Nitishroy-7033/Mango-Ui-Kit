import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './pagination';

describe('Pagination', () => {
    it('renders page buttons', () => {
        render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('does not render when totalPages is 1', () => {
        const { container } = render(<Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />);
        expect(container.querySelector('.mango-pagination')).not.toBeInTheDocument();
    });

    it('calls onPageChange when a page button is clicked', () => {
        const handleChange = vi.fn();
        render(<Pagination currentPage={1} totalPages={5} onPageChange={handleChange} />);
        fireEvent.click(screen.getByText('3'));
        expect(handleChange).toHaveBeenCalledWith(3);
    });

    it('disables previous button on first page', () => {
        render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
        const prevButton = screen.getByTitle('Previous Page');
        expect(prevButton).toBeDisabled();
    });

    it('disables next button on last page', () => {
        render(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);
        const nextButton = screen.getByTitle('Next Page');
        expect(nextButton).toBeDisabled();
    });

    it('disables first button on first page', () => {
        render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
        expect(screen.getByTitle('First Page')).toBeDisabled();
    });

    it('disables last button on last page', () => {
        render(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);
        expect(screen.getByTitle('Last Page')).toBeDisabled();
    });

    it('highlights current page with is-active class', () => {
        render(<Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />);
        const activeButton = screen.getByText('3');
        expect(activeButton).toHaveClass('is-active');
        expect(activeButton).toHaveAttribute('aria-current', 'page');
    });

    it('renders dots when there are many pages', () => {
        const { container } = render(<Pagination currentPage={5} totalPages={20} onPageChange={() => {}} />);
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
        expect(container.querySelector('.dots')).toBeInTheDocument();
    });

    it('does not show first/last buttons when showFirstLast is false', () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={() => {}} showFirstLast={false} />);
        expect(screen.queryByTitle('First Page')).not.toBeInTheDocument();
        expect(screen.queryByTitle('Last Page')).not.toBeInTheDocument();
    });

    it('disables all buttons when disabled prop is true', () => {
        render(<Pagination currentPage={3} totalPages={5} onPageChange={() => {}} disabled />);
        const buttons = screen.getAllByRole('button');
        buttons.forEach(button => {
            expect(button).toBeDisabled();
        });
    });

    it('sets aria-label on nav element', () => {
        render(<Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />);
        expect(screen.getByLabelText('Pagination')).toBeInTheDocument();
    });
});
