import type { ReactNode } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    content: ReactNode;
    position?: TooltipPosition;
    children: ReactNode;
    className?: string;
    delay?: number;
}
