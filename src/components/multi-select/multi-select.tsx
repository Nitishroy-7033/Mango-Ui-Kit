import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Check, Search } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { MultiSelectProps } from './multi-select.types';
import './multi-select.css';

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options = [],
  value = [],
  onChange,
  label,
  placeholder = 'Select options...',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (optionId: string) => {
    const newValue = value.includes(optionId)
      ? value.filter(id => id !== optionId)
      : [...value, optionId];
    onChange(newValue);
  };

  const removeOption = (e: React.MouseEvent, optionId: string) => {
    e.stopPropagation();
    onChange(value.filter(id => id !== optionId));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(opt =>
    opt.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={cn('multi-select-root', className)} ref={dropdownRef}>
      {label && <label className="multi-select-label">{label}</label>}
      <div
        className={cn('multi-select-trigger', isOpen && 'active')}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="selected-chips">
          {value.length > 0 ? (
            value.map(id => {
              const opt = options.find(o => o.id === id);
              return opt ? (
                <div key={id} className="chip">
                  <span>{opt.name}</span>
                  <X size={12} onClick={(e) => removeOption(e, id)} />
                </div>
              ) : null;
            })
          ) : (
            <span className="placeholder">{placeholder}</span>
          )}
        </div>
        <ChevronDown size={18} className={cn('arrow', isOpen && 'open')} />
      </div>

      {isOpen && (
        <div className="multi-select-dropdown animate-scale-in">
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <div className="options-list">
            {filteredOptions.length > 0 ? (
              filteredOptions.map(opt => (
                <div
                  key={opt.id}
                  className={cn('option-item', value.includes(opt.id) && 'selected')}
                  onClick={() => toggleOption(opt.id)}
                >
                  <div className="checkbox">
                    {value.includes(opt.id) && <Check size={12} />}
                  </div>
                  <span className="option-name">{opt.name}</span>
                </div>
              ))
            ) : (
              <div className="no-options">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

MultiSelect.displayName = 'MultiSelect';
