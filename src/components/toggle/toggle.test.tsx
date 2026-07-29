import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from './toggle';

describe('Toggle', () => {
    it('renders unchecked by default', () => {
        render(<Toggle />);
        const toggle = screen.getByRole('switch');
        expect(toggle).toHaveAttribute('aria-checked', 'false');
    });

    it('renders checked when checked is true', () => {
        render(<Toggle checked onChange={() => {}} />);
        expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('calls onChange with new value on click', () => {
        const handleChange = vi.fn();
        render(<Toggle onChange={handleChange} />);
        fireEvent.click(screen.getByRole('switch'));
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('calls onChange with false when currently checked', () => {
        const handleChange = vi.fn();
        render(<Toggle checked onChange={handleChange} />);
        fireEvent.click(screen.getByRole('switch'));
        expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('can be disabled', () => {
        const handleChange = vi.fn();
        render(<Toggle disabled onChange={handleChange} />);
        const toggle = screen.getByRole('switch');
        expect(toggle).toHaveClass('is-disabled');
        fireEvent.click(toggle);
        expect(handleChange).not.toHaveBeenCalled();
    });

    it('renders label', () => {
        render(<Toggle label="Enable notifications" />);
        expect(screen.getByText('Enable notifications')).toBeInTheDocument();
    });

    it('renders description', () => {
        render(<Toggle label="Notifications" description="Receive alerts" />);
        expect(screen.getByText('Receive alerts')).toBeInTheDocument();
    });

    it('handles keyboard Enter and Space', () => {
        const handleChange = vi.fn();
        render(<Toggle onChange={handleChange} />);
        const toggle = screen.getByRole('switch');

        fireEvent.keyDown(toggle, { key: 'Enter' });
        expect(handleChange).toHaveBeenCalledWith(true);

        fireEvent.keyDown(toggle, { key: ' ' });
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('has tabIndex 0 when not disabled', () => {
        render(<Toggle />);
        expect(screen.getByRole('switch')).toHaveAttribute('tabIndex', '0');
    });

    it('has tabIndex -1 when disabled', () => {
        render(<Toggle disabled />);
        expect(screen.getByRole('switch')).toHaveAttribute('tabIndex', '-1');
    });

    it('renders label on the left when labelPosition is left', () => {
        render(<Toggle label="Left label" labelPosition="left" />);
        const container = screen.getByRole('switch');
        expect(container.textContent).toContain('Left label');
    });
});
