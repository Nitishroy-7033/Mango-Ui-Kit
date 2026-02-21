import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, CornerDownLeft, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { CommandPaletteProps, CommandAction } from './command-palette.types';
import './command-palette.css';

export const CommandPalette: React.FC<CommandPaletteProps> = ({
    isOpen,
    onClose,
    actions,
    placeholder = 'Type a command or search...',
    maxHeight,
}) => {
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    // Initial focus and reset
    useEffect(() => {
        if (isOpen) {
            setSearch('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 10);
        }
    }, [isOpen]);

    // Filtering
    const filteredActions = useMemo(() => {
        const query = search.toLowerCase();
        return actions.filter(
            (action) =>
                action.label.toLowerCase().includes(query) ||
                action.description?.toLowerCase().includes(query) ||
                action.group?.toLowerCase().includes(query)
        );
    }, [actions, search]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeys = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev < filteredActions.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredActions[selectedIndex]) {
                    handleAction(filteredActions[selectedIndex]);
                }
            }
        };

        window.addEventListener('keydown', handleKeys);
        return () => window.removeEventListener('keydown', handleKeys);
    }, [isOpen, filteredActions, selectedIndex, onClose]);

    // Scroll into view
    useEffect(() => {
        const selectedEl = listRef.current?.children[selectedIndex] as HTMLElement;
        if (selectedEl) {
            selectedEl.scrollIntoView({ block: 'nearest' });
        }
    }, [selectedIndex]);

    const handleAction = (action: CommandAction) => {
        if (action.disabled) return;
        action.onSelect();
        onClose();
    };

    if (!isOpen) return null;

    // Grouping
    const groups: { [key: string]: CommandAction[] } = {};
    filteredActions.forEach(action => {
        const group = action.group || 'Default';
        if (!groups[group]) groups[group] = [];
        groups[group].push(action);
    });

    return (
        <div className="mango-command-overlay" onClick={onClose}>
            <div
                className="mango-command-root"
                onClick={(e) => e.stopPropagation()}
                style={maxHeight ? { maxHeight } : {}}
            >
                <div className="mango-command-header">
                    <Search className="mango-command-search-icon" size={20} />
                    <input
                        ref={inputRef}
                        className="mango-command-input"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setSelectedIndex(0);
                        }}
                        placeholder={placeholder}
                    />
                </div>

                <div className="mango-command-list" ref={listRef}>
                    {filteredActions.length === 0 ? (
                        <div style={{ padding: '40px 20px', textAlign: 'center', opacity: 0.5 }}>
                            No results found for "{search}"
                        </div>
                    ) : (
                        Object.keys(groups).map((groupName) => (
                            <React.Fragment key={groupName}>
                                {groupName !== 'Default' && (
                                    <div className="mango-command-group-title">{groupName}</div>
                                )}
                                {groups[groupName].map((action) => {
                                    const actualIndex = filteredActions.indexOf(action);
                                    const isSelected = actualIndex === selectedIndex;

                                    return (
                                        <div
                                            key={action.id}
                                            className={cn(
                                                'mango-command-item',
                                                isSelected && 'is-selected',
                                                action.disabled && 'is-disabled'
                                            )}
                                            onMouseEnter={() => setSelectedIndex(actualIndex)}
                                            onClick={() => handleAction(action)}
                                        >
                                            {action.icon && (
                                                <div className="mango-command-item-icon">
                                                    {action.icon}
                                                </div>
                                            )}
                                            <div className="mango-command-item-content">
                                                <div className="mango-command-item-label">{action.label}</div>
                                                {action.description && (
                                                    <div className="mango-command-item-description">{action.description}</div>
                                                )}
                                            </div>
                                            {action.shortcut && (
                                                <div className="mango-command-item-shortcut">
                                                    {action.shortcut.map((key) => (
                                                        <kbd key={key} className="mango-command-kbd">{key}</kbd>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </React.Fragment>
                        ))
                    )}
                </div>

                <div className="mango-command-footer">
                    <div className="help-item">
                        <CornerDownLeft size={14} /> <span>Select</span>
                    </div>
                    <div className="help-item">
                        <ArrowUp size={14} /> <ArrowDown size={14} /> <span>Navigate</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

CommandPalette.displayName = 'CommandPalette';
