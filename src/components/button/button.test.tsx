import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';
import React from 'react';

describe('Button', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeDefined();
    });

    it('handles loading state', () => {
        render(<Button isLoading>Click me</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
        // Check for loading spinner (svg)
        expect(screen.getByRole('button').querySelector('svg')).toBeDefined();
    });

    it('can be disabled', () => {
        render(<Button disabled>Click me</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });
});
