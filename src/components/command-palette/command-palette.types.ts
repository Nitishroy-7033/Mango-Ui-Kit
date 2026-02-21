import React from 'react';

export interface CommandAction {
    /** Unique ID for the action */
    id: string;
    /** Label to display */
    label: string;
    /** Description below the label */
    description?: string;
    /** Shortcut keys (e.g. ['G', 'H']) */
    shortcut?: string[];
    /** Leading icon */
    icon?: React.ReactNode;
    /** Callback when action is clicked / selected */
    onSelect: () => void;
    /** Group name for grouping actions */
    group?: string;
    /** Whether the action is disabled */
    disabled?: boolean;
}

export interface CommandPaletteProps {
    /** Whether the palette is open */
    isOpen: boolean;
    /** Callback when closing the palette */
    onClose: () => void;
    /** List of actions */
    actions: CommandAction[];
    /** Placeholder for the search input */
    placeholder?: string;
    /** Whether to show a shortcut hint in the input */
    showShortcutHint?: boolean;
    /** Max height of the result list */
    maxHeight?: string;
    /** Glassmorphism intensity (soft, medium, heavy) */
    glassIntensity?: 'soft' | 'medium' | 'heavy';
}
