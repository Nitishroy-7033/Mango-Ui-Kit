import { createContext, useContext } from 'react';
import type { BlurBehavior } from './tags-input.types';

export interface TagsInputContextValue {
    tags: string[];
    setTags: (tags: string[]) => void;
    inputValue: string;
    setInputValue: (value: string) => void;
    highlightedIndex: number;
    setHighlightedIndex: (index: number) => void;
    editingIndex: number;
    setEditingIndex: (index: number) => void;
    disabled: boolean;
    readOnly: boolean;
    editable: boolean;
    max?: number;
    onValidate?: (value: string) => boolean;
    addOnPaste: boolean;
    addOnTab: boolean;
    delimiter: string;
    blurBehavior: BlurBehavior;
    addTag: (tag: string) => void;
    removeTag: (index: number) => void;
    updateTag: (index: number, newValue: string) => void;
    clearTags: () => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
}

export const TagsInputContext = createContext<TagsInputContextValue | null>(null);

export const useTagsInput = () => {
    const context = useContext(TagsInputContext);
    if (!context) {
        throw new Error('TagsInput components must be used within a TagsInput provider');
    }
    return context;
};
