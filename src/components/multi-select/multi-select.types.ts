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

  // Customization
  variant?: 'outlined' | 'filled' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  searchable?: boolean;
  disabled?: boolean;
  loading?: boolean;

  // Advanced features
  onLoadMore?: () => void;
  hasMore?: boolean;
  loadMoreThreshold?: number;
  footer?: React.ReactNode;
  maxHeight?: number;

  // Chip customization
  showTags?: boolean;
  showIcons?: boolean;
  maxTagsVisible?: number;
}
