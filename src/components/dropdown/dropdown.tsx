import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronDown, Check, Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { DropdownProps, DropdownOption } from './dropdown.types';
import { Spinner } from '../spinner';
import './dropdown.css';

export const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select option',
  label,
  showLabel = true,
  icon: TriggerIcon,
  className = '',
  menuClassName = '',
  footer,
  header,
  searchable = false,
  multiple = false,
  loading = false,
  disabled = false,
  trigger = 'click',
  variant = 'default',
  size = 'md',
  placement = 'bottom',
  closeOnSelect,
  noOptionsContent = 'No results found',
  maxHeight = 300,
  onLoadMore,
  hasMore = false,
  loadMoreThreshold = 0.8,
  renderOption,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });

  // Handle derived values for single vs multiple
  const selectedIds = useMemo(() => {
    if (multiple) {
      return Array.isArray(value) ? value : value ? [value] : [];
    }
    return value !== undefined ? [value] : [];
  }, [value, multiple]);

  const selectedOptions = useMemo(() =>
    options.filter(opt => selectedIds.includes(opt.id)),
    [options, selectedIds]
  );

  const shouldCloseOnSelect = closeOnSelect !== undefined ? closeOnSelect : !multiple;

  // Search logic
  const filteredOptions = useMemo(() => {
    if (!searchQuery) return options;
    const lowerQuery = searchQuery.toLowerCase();
    return options.filter(opt =>
      opt.name.toLowerCase().includes(lowerQuery) ||
      (opt.details && opt.details.toLowerCase().includes(lowerQuery))
    );
  }, [options, searchQuery]);

  // Click outside listener
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

  // Handle selection
  const handleSelect = (option: DropdownOption) => {
    if (option.disabled || loading) return;

    if (multiple) {
      const newIds = selectedIds.includes(option.id)
        ? selectedIds.filter(id => id !== option.id)
        : [...selectedIds, option.id];
      onChange?.(newIds);
    } else {
      onChange?.(option.id);
      if (shouldCloseOnSelect) setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(multiple ? [] : '');
  };

  // Scroll pagination logic
  const handleScroll = useCallback(() => {
    if (!onLoadMore || !hasMore || loading || !scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    if (scrollPercentage > loadMoreThreshold) {
      onLoadMore();
    }
  }, [onLoadMore, hasMore, loading, loadMoreThreshold]);

  // Trigger handlers
  const handleTriggerClick = () => {
    if (disabled || trigger === 'hover' || trigger === 'contextMenu') return;
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (disabled || trigger !== 'hover') return;
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (disabled || trigger !== 'hover') return;
    setIsOpen(false);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (disabled || trigger !== 'contextMenu') return;
    e.preventDefault();
    setContextMenuPos({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  const menuStyle = trigger === 'contextMenu' ? {
    position: 'fixed' as const,
    top: contextMenuPos.y,
    left: contextMenuPos.x,
    zIndex: 9999,
  } : {};

  return (
    <div
      className={cn(
        'app-dropdown',
        `app-dropdown-size-${size}`,
        `app-dropdown-variant-${variant}`,
        `app-dropdown-placement-${placement}`,
        isOpen && 'is-open',
        disabled && 'disabled',
        className
      )}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleContextMenu}
      style={style}
    >
      {/* Trigger */}
      {trigger !== 'contextMenu' && (
        <div
          className={cn('app-dropdown-trigger', isOpen && 'active', disabled && 'disabled')}
          onClick={handleTriggerClick}
        >
          {TriggerIcon && <TriggerIcon size={size === 'sm' ? 16 : 18} className="trigger-icon" />}

          <div className="trigger-content">
            {selectedOptions.length > 0 ? (
              multiple ? (
                <div className="selected-tags">
                  {selectedOptions.slice(0, 2).map(opt => (
                    <span key={opt.id} className="selected-tag">
                      {opt.name}
                    </span>
                  ))}
                  {selectedOptions.length > 2 && (
                    <span className="selected-tag-more">+{selectedOptions.length - 2}</span>
                  )}
                </div>
              ) : (
                <span className="trigger-text">{selectedOptions[0].name}</span>
              )
            ) : (
              <span className="trigger-placeholder">{placeholder}</span>
            )}
          </div>

          <div className="trigger-actions">
            {!disabled && selectedOptions.length > 0 && (
              <X size={14} className="clear-icon" onClick={handleClear} />
            )}
            <ChevronDown size={14} className={cn('arrow-icon', isOpen && 'rotated')} />
          </div>
        </div>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn('app-dropdown-menu', menuClassName)}
          style={menuStyle}
          onClick={(e) => e.stopPropagation()}
        >
          {showLabel && (label || header) && (
            <div className="menu-header">
              {label && <div className="menu-label">{label}</div>}
              {header}
            </div>
          )}

          {searchable && (
            <div className="menu-search-wrapper">
              <Search size={14} className="search-icon" />
              <input
                type="text"
                className="menu-search-input"
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <X size={14} className="search-clear" onClick={() => setSearchQuery('')} />
              )}
            </div>
          )}

          <div
            className="menu-scroll"
            ref={scrollRef}
            onScroll={handleScroll}
            style={{ maxHeight }}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = selectedIds.includes(option.id);

                if (renderOption) {
                  return (
                    <div
                      key={option.id}
                      onClick={() => handleSelect(option)}
                      className={cn('custom-option-wrapper', option.disabled && 'disabled')}
                    >
                      {renderOption(option, isSelected)}
                    </div>
                  );
                }

                return (
                  <div
                    key={option.id}
                    className={cn(
                      'menu-option',
                      isSelected && 'selected',
                      option.disabled && 'disabled'
                    )}
                    onClick={() => handleSelect(option)}
                  >
                    {multiple && (
                      <div className={cn('option-checkbox', isSelected && 'checked')}>
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                    )}

                    {option.icon && <div className="option-icon">{option.icon}</div>}

                    <div className="option-content">
                      <span className="option-name">{option.name}</span>
                      {option.details && <span className="option-details">{option.details}</span>}
                    </div>

                    {!multiple && isSelected && (
                      <Check size={14} className="check-icon" />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="no-options-found">
                {loading ? <Spinner size={16} /> : noOptionsContent}
              </div>
            )}

            {loading && hasMore && (
              <div className="menu-loading-more">
                <Spinner size={16} />
                <span>Loading more...</span>
              </div>
            )}
          </div>

          {footer && (
            <div className="menu-footer">
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
