export interface MultiSelectOption {
    id: string | number;
    name: string;
    icon?: React.ReactNode;
    details?: string;
    disabled?: boolean;
}
export interface MultiSelectProps {
    options: MultiSelectOption[];
    value: (string | number)[];
    onChange: (value: (string | number)[]) => void;
    label?: string;
    placeholder?: string;
    className?: string;
    variant?: 'outlined' | 'filled' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    searchable?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onLoadMore?: () => void;
    hasMore?: boolean;
    loadMoreThreshold?: number;
    footer?: React.ReactNode;
    maxHeight?: number;
    showTags?: boolean;
    showIcons?: boolean;
    maxTagsVisible?: number;
}
