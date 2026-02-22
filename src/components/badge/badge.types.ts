import type React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';
export type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'content'> {
    /** The content to be wrapped by the badge */
    children?: React.ReactNode;
    /** The content of the badge itself (number, string, or icon) */
    badgeContent?: React.ReactNode;
    /** Visual variant */
    variant?: BadgeVariant;
    /** Size of the badge */
    size?: BadgeSize;
    /** Whether to show as a small dot without content */
    dot?: boolean;
    /** Whether the badge is a pill shape */
    pill?: boolean;
    /** Maximum value to show (e.g. 99+ if content is 100) */
    maxCount?: number;
    /** Whether to show when content is 0 */
    showZero?: boolean;
    /** Position relative to the wrapped element */
    position?: BadgePosition;
    /** Adjust the badge position (e.g. [10, -5]) */
    offset?: [number, number];
    /** If true, the badge will pulsate */
    pulse?: boolean;
    /** Icon to show inside the badge */
    icon?: React.ElementType;
}
