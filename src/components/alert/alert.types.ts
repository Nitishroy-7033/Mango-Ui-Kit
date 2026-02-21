import type { ReactNode } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error' | 'neutral';
export type AlertStyle = 'filled' | 'soft' | 'outline' | 'glass';

export interface AlertProps {
    /** Visual style variant */
    variant?: AlertVariant;
    /** Rendering style */
    alertStyle?: AlertStyle;
    /** Title / headline */
    title?: ReactNode;
    /** Body text or ReactNode */
    children?: ReactNode;
    /** Custom icon override (pass null to hide it) */
    icon?: ReactNode | null;
    /** Whether the alert can be dismissed */
    dismissible?: boolean;
    /** Callback when dismissed */
    onDismiss?: () => void;
    /** Inline action button label */
    actionLabel?: string;
    /** Callback when action is clicked */
    onAction?: () => void;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
