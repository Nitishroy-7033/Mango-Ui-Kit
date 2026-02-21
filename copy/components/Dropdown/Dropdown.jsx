import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, Search } from 'lucide-react';
import './Dropdown.css';

/**
 * Global Dropdown Component
 * @param {Object} props
 * @param {Array} props.options - Array of { id, name, icon, details }
 * @param {string} props.value - Current selected ID
 * @param {function} props.onChange - Selection handler
 * @param {React.ReactNode} props.trigger - Optional custom trigger element
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.label - Header label for dropdown menu
 * @param {React.ReactNode} props.icon - Default icon for the trigger
 * @param {React.ReactNode} props.footer - Optional footer element for the dropdown menu
 */
const Dropdown = ({
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
    const dropdownRef = useRef(null);

    const selectedOption = options.find(opt => opt.id === value);

    // Filter options based on search query
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
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`app-dropdown ${className} ${isOpen ? 'is-open' : ''} ${disabled ? 'disabled' : ''}`} ref={dropdownRef}>
            <div
                className={`app-dropdown-trigger ${isOpen ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                {TriggerIcon && <TriggerIcon size={18} className="trigger-icon" />}
                <span className="trigger-text">
                    {selectedOption ? selectedOption.name : placeholder}
                </span>
                <ChevronDown size={14} className={`arrow-icon ${isOpen ? 'rotated' : ''}`} />
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
                                    className={`menu-option ${option.id === value ? 'selected' : ''}`}
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

export default Dropdown;
