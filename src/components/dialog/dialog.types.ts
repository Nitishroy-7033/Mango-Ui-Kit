import React from 'react';

import type { ButtonVariant } from '../button/button.types';

export interface DialogButtonProps {
    label: string;
    onClick?: () => void;
    variant?: ButtonVariant | 'success' | 'warning' | 'info';
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export interface DialogProps {
    /** Whether the dialog is visible */
    isOpen: boolean;
    /** Callback when the dialog wants to close */
    onClose: () => void;
    /** Main heading of the dialog */
    title?: React.ReactNode;
    /** Subtext or description */
    description?: React.ReactNode;
    /** Custom icon shown at the top */
    icon?: React.ReactNode;
    /** Color scheme for presets (affects icon bg and primary button) */
    variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
    /** Custom background color for the icon badge */
    iconBgColor?: string;
    /** Custom color for the icon itself */
    iconColor?: string;
    /** Primary action button configuration */
    primaryButton?: DialogButtonProps;
    /** Secondary/Cancel action button configuration */
    secondaryButton?: DialogButtonProps;
    /** Whether to show a close (X) icon in the top right */
    showClose?: boolean;
    /** Allow closing by clicking on the backdrop */
    closeOnOverlayClick?: boolean;
    /** Custom width for the dialog (default: 440px) */
    width?: string | number;
    /** Custom border radius for the dialog container */
    borderRadius?: string | number;
    /** Additional CSS class for the container */
    className?: string;
    /** Inline styles for the container */
    style?: React.CSSProperties;
    /** Custom content passed as children (replaces description if provided) */
    children?: React.ReactNode;
}
