import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { ChevronDown, X, Check, Search } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { MultiSelectProps, MultiSelectOption } from './multi-select.types';
import { Spinner } from '../spinner';
import './multi-select.css';

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options = [],
  value = [],
  onChange,
  label,
  placeholder = 'Select options...',
  className = '',
  variant = 'outlined',
  size = 'md',
  searchable = true,
  disabled = false,
  loading = false,
  onLoadMore,
  hasMore = false,
  loadMoreThreshold = 0.8,
  footer,
  maxHeight = 300,
  maxTagsVisible = 3,
  showIcons = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedOptions = useMemo(() =>
    options.filter(opt => value.includes(opt.id)),
    [options, value]);

  const toggleOption = (option: MultiSelectOption) => {
    if (option.disabled || disabled) return;

    const newValue = value.includes(option.id)
      ? value.filter(id => id !== option.id)
      : [...value, option.id];
    onChange(newValue);
  };

  const removeOption = (e: React.MouseEvent, optionId: string | number) => {
    e.stopPropagation();
    if (disabled) return;
    onChange(value.filter(id => id !== optionId));
  };

  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    onChange([]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options;
    const lowerQuery = searchTerm.toLowerCase();
    return options.filter(opt =>
      opt.name.toLowerCase().includes(lowerQuery) ||
      (opt.details && opt.details.toLowerCase().includes(lowerQuery))
    );
  }, [options, searchTerm]);

  const handleScroll = useCallback(() => {
    if (!onLoadMore || !hasMore || loading || !scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    if (scrollPercentage > loadMoreThreshold) {
      onLoadMore();
    }
  }, [onLoadMore, hasMore, loading, loadMoreThreshold]);

  return (
    <div
      className={cn(
        'mango-multi-select',
        `mango-multi-select-${size}`,
        `mango-multi-select-variant-${variant}`,
        isOpen && 'is-open',
        disabled && 'is-disabled',
        className
      )}
      ref={dropdownRef}
    >
      {label && <label className="mango-multi-select-label">{label}</label>}

      <div
        className={cn('mango-multi-select-trigger', isOpen && 'active')}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="mango-multi-select-tags">
          {selectedOptions.length > 0 ? (
            <>
              {selectedOptions.slice(0, maxTagsVisible).map(opt => (
                <div key={opt.id} className="mango-multi-select-tag">
                  {showIcons && opt.icon && <span className="tag-icon">{opt.icon}</span>}
                  <span className="tag-name">{opt.name}</span>
                  {!disabled && (
                    <X
                      size={12}
                      className="tag-remove"
                      onClick={(e) => removeOption(e, opt.id)}
                    />
                  )}
                </div>
              ))}
              {selectedOptions.length > maxTagsVisible && (
                <div className="mango-multi-select-tag mango-multi-select-tag-more">
                  +{selectedOptions.length - maxTagsVisible}
                </div>
              )}
            </>
          ) : (
            <span className="placeholder">{placeholder}</span>
          )}
        </div>

        <div className="trigger-actions">
          {!disabled && value.length > 0 && (
            <X size={14} className="clear-all" onClick={clearAll} />
          )}
          <ChevronDown size={18} className={cn('arrow', isOpen && 'open')} />
        </div>
      </div>

      {isOpen && (
        <div className="mango-multi-select-dropdown animate-scale-in">
          {searchable && (
            <div className="mango-multi-select-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
              {searchTerm && (
                <X size={14} className="search-clear" onClick={() => setSearchTerm('')} />
              )}
            </div>
          )}

          <div
            className="mango-multi-select-list"
            ref={scrollRef}
            onScroll={handleScroll}
            style={{ maxHeight }}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map(opt => {
                const isSelected = value.includes(opt.id);
                return (
                  <div
                    key={opt.id}
                    className={cn(
                      'mango-multi-select-option',
                      isSelected && 'selected',
                      opt.disabled && 'disabled'
                    )}
                    onClick={() => toggleOption(opt)}
                  >
                    <div className={cn('option-checkbox', isSelected && 'checked')}>
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </div>
                    {showIcons && opt.icon && <div className="option-icon">{opt.icon}</div>}
                    <div className="option-content">
                      <span className="option-name">{opt.name}</span>
                      {opt.details && <span className="option-details">{opt.details}</span>}
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="no-results">
                {loading ? <Spinner size={20} /> : 'No results found'}
              </div>
            )}

            {loading && hasMore && (
              <div className="list-loading-more">
                <Spinner size={16} />
                <span>Loading more...</span>
              </div>
            )}
          </div>

          {footer && (
            <div className="mango-multi-select-footer">
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

MultiSelect.displayName = 'MultiSelect';
