import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './modal';

describe('Modal', () => {
    it('renders content when isOpen is true', () => {
        render(<Modal isOpen onClose={() => {}}>Modal Content</Modal>);
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('does not render when isOpen is false', () => {
        render(<Modal isOpen={false} onClose={() => {}}>Modal Content</Modal>);
        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const handleClose = vi.fn();
        render(<Modal isOpen onClose={handleClose}>Content</Modal>);
        fireEvent.click(screen.getByLabelText('Close modal'));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when Escape key is pressed', () => {
        const handleClose = vi.fn();
        render(<Modal isOpen onClose={handleClose}>Content</Modal>);
        fireEvent.keyDown(window, { key: 'Escape' });
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when overlay is clicked by default', () => {
        const handleClose = vi.fn();
        render(<Modal isOpen onClose={handleClose}>Content</Modal>);
        fireEvent.click(screen.getByRole('dialog').parentElement!.querySelector('.mango-modal-backdrop')!);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when overlay is clicked and closeOnOverlayClick is false', () => {
        const handleClose = vi.fn();
        render(<Modal isOpen onClose={handleClose} closeOnOverlayClick={false}>Content</Modal>);
        fireEvent.click(screen.getByRole('dialog').parentElement!.querySelector('.mango-modal-backdrop')!);
        expect(handleClose).not.toHaveBeenCalled();
    });

    it('renders title when provided', () => {
        render(<Modal isOpen onClose={() => {}} title="My Modal">Content</Modal>);
        expect(screen.getByText('My Modal')).toBeInTheDocument();
    });

    it('sets role="dialog" and aria-modal="true"', () => {
        render(<Modal isOpen onClose={() => {}}>Content</Modal>);
        const dialog = screen.getByRole('dialog');
        expect(dialog).toHaveAttribute('role', 'dialog');
        expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    it('locks body scroll when open', () => {
        render(<Modal isOpen onClose={() => {}}>Content</Modal>);
        expect(document.body.style.overflow).toBe('hidden');
    });

    it('restores body scroll when closed', () => {
        const { rerender } = render(<Modal isOpen onClose={() => {}}>Content</Modal>);
        rerender(<Modal isOpen={false} onClose={() => {}}>Content</Modal>);
        expect(document.body.style.overflow).toBe('unset');
    });
});
