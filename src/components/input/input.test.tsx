import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './input';

describe('Input', () => {
    it('renders with label and placeholder', () => {
        render(<Input label="Name" placeholder="Enter your name" />);
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    });

    it('renders with a value', () => {
        render(<Input value="Hello" onChange={() => {}} />);
        expect(screen.getByDisplayValue('Hello')).toBeInTheDocument();
    });

    it('calls onChange when value changes', () => {
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'new' } });
        expect(handleChange).toHaveBeenCalled();
    });

    it('can be disabled', () => {
        render(<Input disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('displays error message', () => {
        render(<Input error="This field is required" />);
        expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('supports password type with visibility toggle', () => {
        const { container } = render(<Input type="password" showPasswordToggle />);
        const input = container.querySelector('input')!;
        expect(input).toHaveAttribute('type', 'password');
        const toggle = screen.getByRole('button');
        fireEvent.click(toggle);
        expect(input).toHaveAttribute('type', 'text');
    });

    it('renders as multiline textarea', () => {
        render(<Input multiline placeholder="Multiline" />);
        const textarea = screen.getByPlaceholderText('Multiline');
        expect(textarea.tagName).toBe('TEXTAREA');
    });

    it('renders helper text when no error', () => {
        render(<Input helperText="Enter your full name" />);
        expect(screen.getByText('Enter your full name')).toBeInTheDocument();
    });

    it('supports prefix and suffix icons', () => {
        render(<Input prefixIcon={<span>pre</span>} suffixIcon={<span>suf</span>} />);
        expect(screen.getByText('pre')).toBeInTheDocument();
        expect(screen.getByText('suf')).toBeInTheDocument();
    });

    it('applies error styling via has-error class', () => {
        const { container } = render(<Input error="Error" />);
        expect(container.querySelector('.has-error')).toBeInTheDocument();
    });

    it('applies disabled styling via is-disabled class', () => {
        const { container } = render(<Input disabled />);
        expect(container.querySelector('.is-disabled')).toBeInTheDocument();
    });

    it('renders label element', () => {
        render(<Input label="Email" id="email" />);
        expect(screen.getByText('Email')).toBeInTheDocument();
    });
});
