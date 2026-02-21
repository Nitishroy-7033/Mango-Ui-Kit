import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { DropdownProps } from './dropdown.types';
import './dropdown.css';

export const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select option',
  label = 'Select',
  icon: TriggerIcon,
  className = '',
  footer,
  searchable = false,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.id === value);

  const filteredOptions = options.filter(opt => {
    const name = opt.name || '';
    const details = opt.details || '';
    return name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      details.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn('app-dropdown', className, isOpen && 'is-open', disabled && 'disabled')} ref={dropdownRef}>
      <div
        className={cn('app-dropdown-trigger', isOpen && 'active', disabled && 'disabled')}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {TriggerIcon && <TriggerIcon size={18} className="trigger-icon" />}
        <span className="trigger-text">
          {selectedOption ? selectedOption.name : placeholder}
        </span>
        <ChevronDown size={14} className={cn('arrow-icon', isOpen && 'rotated')} />
      </div>

      {isOpen && (
        <div className="app-dropdown-menu">
          {label && <div className="menu-label">{label}</div>}

          {searchable && (
            <input
              type="text"
              className="menu-search-input"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <div className="menu-scroll">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.id}
                  className={cn('menu-option', option.id === value && 'selected')}
                  onClick={() => {
                    onChange(option.id);
                    setIsOpen(false);
                  }}
                >
                  {option.icon && <div className="option-icon">{option.icon}</div>}
                  <div className="option-content">
                    <span className="option-name">{option.name}</span>
                    {option.details && <span className="option-details">{option.details}</span>}
                  </div>
                  {option.id === value && <Check size={14} className="check-icon" />}
                </div>
              ))
            ) : (
              <div className="no-options-found">No results found</div>
            )}
          </div>
          {footer && (
            <div className="app-dropdown-footer">
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
