import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Tooltip } from './tooltip';

describe('Tooltip', () => {
    it('renders children', () => {
        render(<Tooltip content="Tooltip text"><button>Hover me</button></Tooltip>);
        expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('shows tooltip content on mouse enter and hides on mouse leave', () => {
        render(<Tooltip content="Helpful tip"><button>Hover</button></Tooltip>);
        const wrapper = screen.getByText('Hover').parentElement!;
        expect(screen.getByText('Helpful tip')).not.toHaveClass('tooltip-visible');

        fireEvent.mouseEnter(wrapper);
        expect(screen.getByText('Helpful tip')).toBeInTheDocument();
        expect(screen.getByRole('tooltip')).toHaveClass('tooltip-visible');

        fireEvent.mouseLeave(wrapper);
        expect(screen.queryByText('Helpful tip')).not.toHaveClass('tooltip-visible');
    });

    it('shows tooltip on focus and hides on blur', () => {
        render(<Tooltip content="Focus tip"><button>Focus me</button></Tooltip>);
        const wrapper = screen.getByText('Focus me').parentElement!;

        fireEvent.focus(wrapper);
        expect(screen.getByText('Focus tip')).toBeInTheDocument();

        fireEvent.blur(wrapper);
        expect(screen.queryByText('Focus tip')).not.toHaveClass('tooltip-visible');
    });

    it('sets role="tooltip" on the tooltip element', () => {
        render(<Tooltip content="Role check"><span>Test</span></Tooltip>);
        fireEvent.mouseEnter(screen.getByText('Test').parentElement!);
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    it('applies position class', () => {
        const { container } = render(<Tooltip content="Left tooltip" position="left"><span>L</span></Tooltip>);
        expect(container.querySelector('.tooltip-pos-left')).toBeInTheDocument();
    });

    it('defaults to top position', () => {
        const { container } = render(<Tooltip content="Top tooltip"><span>T</span></Tooltip>);
        expect(container.querySelector('.tooltip-pos-top')).toBeInTheDocument();
    });

    it('applies delay before showing', () => {
        vi.useFakeTimers();
        render(<Tooltip content="Delayed" delay={500}><span>Delay</span></Tooltip>);
        const wrapper = screen.getByText('Delay').parentElement!;

        fireEvent.mouseEnter(wrapper);
        expect(screen.getByText('Delayed')).not.toHaveClass('tooltip-visible');

        act(() => {
            vi.advanceTimersByTime(500);
        });
        expect(screen.getByText('Delayed')).toHaveClass('tooltip-visible');

        vi.useRealTimers();
    });
});
