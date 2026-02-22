import React, { useState, useRef, useCallback } from 'react';
import { X, RotateCcw } from 'lucide-react';
import { cn } from '../../utils/cn';
import { TagsInputContext } from './tags-input.context';
import type {
    TagsInputProps,
    TagsInputLabelProps,
    TagsInputInputProps,
    TagsInputItemProps,
    TagsInputItemTextProps,
    TagsInputItemDeleteProps,
    TagsInputClearProps
} from './tags-input.types';
import './tags-input.css';

export const TagsInput: React.FC<TagsInputProps> = ({
    defaultValue = [],
    value: controlledValue,
    onValueChange,
    disabled = false,
    readOnly = false,
    editable = true,
    max,
    onValidate,
    addOnPaste = true,
    addOnTab = false,
    delimiter = ',',
    blurBehavior = 'add',
    className,
    children,
    ...props
}) => {
    const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(defaultValue);
    const tags = controlledValue ?? uncontrolledValue;

    const [inputValue, setInputValue] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [editingIndex, setEditingIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    const setTags = useCallback((newTags: string[]) => {
        if (controlledValue === undefined) {
            setUncontrolledValue(newTags);
        }
        onValueChange?.(newTags);
    }, [controlledValue, onValueChange]);

    const addTag = useCallback((tag: string) => {
        const trimmed = tag.trim();
        if (!trimmed) return;
        if (max && tags.length >= max) return;
        if (onValidate && !onValidate(trimmed)) return;
        if (tags.includes(trimmed)) return;

        setTags([...tags, trimmed]);
        setInputValue('');
    }, [tags, max, onValidate, setTags]);

    const removeTag = useCallback((index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);

        if (highlightedIndex === index) {
            setHighlightedIndex(-1);
        } else if (highlightedIndex > index) {
            setHighlightedIndex(highlightedIndex - 1);
        }
    }, [tags, highlightedIndex, setTags]);

    const updateTag = useCallback((index: number, newValue: string) => {
        const trimmed = newValue.trim();
        if (!trimmed) {
            removeTag(index);
            return;
        }
        const newTags = [...tags];
        newTags[index] = trimmed;
        setTags(newTags);
    }, [tags, setTags, removeTag]);

    const clearTags = useCallback(() => {
        setTags([]);
        setHighlightedIndex(-1);
        setEditingIndex(-1);
    }, [setTags]);

    const contextValue = {
        tags,
        setTags,
        inputValue,
        setInputValue,
        highlightedIndex,
        setHighlightedIndex,
        editingIndex,
        setEditingIndex,
        disabled,
        readOnly,
        editable,
        max,
        onValidate,
        addOnPaste,
        addOnTab,
        delimiter,
        blurBehavior,
        addTag,
        removeTag,
        updateTag,
        clearTags,
        inputRef
    };

    return (
        <TagsInputContext.Provider value={contextValue}>
            <div
                className={cn('mango-tags-input-root', className)}
                data-disabled={disabled || undefined}
                data-readonly={readOnly || undefined}
                {...props}
            >
                {children}
            </div>
        </TagsInputContext.Provider>
    );
};

export const TagsInputLabel: React.FC<TagsInputLabelProps> = ({ className, children, ...props }) => {
    const { disabled } = React.useContext(TagsInputContext)!;
    return (
        <label
            className={cn('mango-tags-input-label', className)}
            data-disabled={disabled || undefined}
            {...props}
        >
            {children}
        </label>
    );
};

export const TagsInputInput: React.FC<TagsInputInputProps> = ({ className, ...props }) => {
    const {
        inputValue,
        setInputValue,
        addTag,
        tags,
        highlightedIndex,
        setHighlightedIndex,
        disabled,
        readOnly,
        addOnTab,
        blurBehavior,
        inputRef
    } = React.useContext(TagsInputContext)!;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (disabled || readOnly) return;

        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(inputValue);
        } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
            if (highlightedIndex === -1) {
                setHighlightedIndex(tags.length - 1);
            } else {
                const indexToRemove = highlightedIndex;
                const newIndex = indexToRemove > 0 ? indexToRemove - 1 : 0;
                const newTags = [...tags];
                newTags.splice(indexToRemove, 1);
                // context state updates
                const context = (TagsInputContext as any)._currentValue;
                context.setTags(newTags);
                context.setHighlightedIndex(newTags.length > 0 ? newIndex : -1);
            }
        } else if (e.key === 'Delete' && highlightedIndex !== -1) {
            const indexToRemove = highlightedIndex;
            const newTags = [...tags];
            newTags.splice(indexToRemove, 1);
            const context = (TagsInputContext as any)._currentValue;
            context.setTags(newTags);
            context.setHighlightedIndex(newTags.length > indexToRemove ? indexToRemove : (newTags.length > 0 ? newTags.length - 1 : -1));
        } else if (e.key === 'ArrowLeft') {
            if (inputValue === '' || highlightedIndex !== -1) {
                if (highlightedIndex === -1) {
                    setHighlightedIndex(tags.length - 1);
                } else if (highlightedIndex > 0) {
                    setHighlightedIndex(highlightedIndex - 1);
                }
            }
        } else if (e.key === 'ArrowRight') {
            if (highlightedIndex !== -1) {
                if (highlightedIndex < tags.length - 1) {
                    setHighlightedIndex(highlightedIndex + 1);
                } else {
                    setHighlightedIndex(-1);
                }
            }
        } else if (e.key === 'Home') {
            if (tags.length > 0) setHighlightedIndex(0);
        } else if (e.key === 'End') {
            setHighlightedIndex(-1);
        } else if (e.key === 'Escape') {
            setHighlightedIndex(-1);
        } else if (e.key === 'Tab' && addOnTab && inputValue !== '') {
            e.preventDefault();
            addTag(inputValue);
        }
    };

    const handleBlur = () => {
        if (blurBehavior === 'add' && inputValue !== '') {
            addTag(inputValue);
        } else if (blurBehavior === 'clear') {
            setInputValue('');
        }
        setHighlightedIndex(-1);
    };

    return (
        <input
            ref={inputRef}
            className={cn('mango-tags-input-field', className)}
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
                setHighlightedIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
        />
    );
};

export const TagsInputItem: React.FC<TagsInputItemProps> = ({
    value,
    className,
    children,
    ...props
}) => {
    const {
        tags,
        highlightedIndex,
        disabled,
        editable
    } = React.useContext(TagsInputContext)!;

    const index = tags.indexOf(value);
    const isHighlighted = highlightedIndex === index;

    return (
        <div
            className={cn('mango-tags-input-item', className)}
            data-state={isHighlighted ? 'active' : 'inactive'}
            data-highlighted={isHighlighted || undefined}
            data-disabled={disabled || props.disabled || undefined}
            data-editable={editable || undefined}
            {...props}
        >
            {children}
        </div>
    );
};

export const TagsInputItemText: React.FC<TagsInputItemTextProps> = ({ className, children, ...props }) => {
    return (
        <span className={cn('mango-tags-input-item-text', className)} {...props}>
            {children}
        </span>
    );
};

export const TagsInputItemDelete: React.FC<TagsInputItemDeleteProps> = ({ className, ...props }) => {
    const { disabled } = React.useContext(TagsInputContext)!;
    // We need the value to find the index, or we assume it's used inside Item
    // For simplicity, let's assume it's used correctly within the item scope or we'd need another context
    return (
        <button
            type="button"
            className={cn('mango-tags-input-item-delete', className)}
            disabled={disabled}
            data-disabled={disabled || undefined}
            {...props}
        >
            <X size={14} />
        </button>
    );
};

export const TagsInputClear: React.FC<TagsInputClearProps> = ({ className, children, ...props }) => {
    const { clearTags, tags, disabled } = React.useContext(TagsInputContext)!;
    const isVisible = tags.length > 0;

    if (!isVisible && !props.forceMount) return null;

    return (
        <button
            type="button"
            className={cn('mango-tags-input-clear', className)}
            onClick={clearTags}
            disabled={disabled}
            data-disabled={disabled || undefined}
            data-state={isVisible ? 'visible' : 'invisible'}
            {...props}
        >
            {children || <><RotateCcw size={16} /> Clear</>}
        </button>
    );
};
