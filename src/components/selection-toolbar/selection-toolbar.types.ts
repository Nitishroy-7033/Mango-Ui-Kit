import type { ReactNode } from 'react';

export interface SelectionDetails {
    text: string;
    wordCount: number;
    charCount: number;
    range: Range | null;
    rect: DOMRect | null;
}

export interface SelectionToolbarProps {
    /** Container element or selector to monitor for selection. If not provided, monitors document. */
    target?: React.RefObject<HTMLElement> | string;
    /** Callback when selection changes. Returns null if selection is cleared. */
    onSelectionChange?: (details: SelectionDetails | null) => void;
    /** Actions to show in the toolbar. If not provided, shows default formatting. */
    actions?: SelectionAction[];
    /** Whether to show default formatting actions (B, I, Link) */
    showDefaultActions?: boolean;
    /** Theme variant */
    variant?: 'default' | 'outline' | 'ghost';
    /** Custom class name */
    className?: string;
    /** Custom style */
    style?: React.CSSProperties;
    /** Children to be selection-active area if target is not provided */
    children?: ReactNode;
}

export interface SelectionAction {
    id: string;
    icon: ReactNode;
    label?: string;
    onClick: (details: SelectionDetails) => void;
    className?: string;
}
