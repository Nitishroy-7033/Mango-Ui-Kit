import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
    it('renders unchecked by default', () => {
        render(<Checkbox label="Accept" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
        expect(screen.getByText('Accept')).toBeInTheDocument();
    });

    it('renders checked when checked is true', () => {
        render(<Checkbox checked onChange={() => {}} />);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('calls onChange with checked state on click', () => {
        const handleChange = vi.fn();
        render(<Checkbox onChange={handleChange} />);
        fireEvent.click(screen.getByRole('checkbox'));
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('can be disabled', () => {
        const handleChange = vi.fn();
        render(<Checkbox disabled onChange={handleChange} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
        fireEvent.click(checkbox);
        expect(handleChange).not.toHaveBeenCalled();
    });

    it('renders label and description', () => {
        render(<Checkbox label="Option" description="This is an option" />);
        expect(screen.getByText('Option')).toBeInTheDocument();
        expect(screen.getByText('This is an option')).toBeInTheDocument();
    });

    it('sets indeterminate state on the input element', () => {
        const { container } = render(<Checkbox indeterminate />);
        const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
        expect(input.indeterminate).toBe(true);
    });

    it('renders error message as string', () => {
        render(<Checkbox error="Selection required" />);
        expect(screen.getByText('Selection required')).toBeInTheDocument();
    });

    it('renders error indicator for boolean error', () => {
        const { container } = render(<Checkbox error />);
        expect(container.querySelector('.has-error')).toBeInTheDocument();
    });

    it('applies size class', () => {
        const { container } = render(<Checkbox size="lg" />);
        expect(container.querySelector('.mango-checkbox-size-lg')).toBeInTheDocument();
    });
});
