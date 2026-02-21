import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Check, Search } from 'lucide-react';
import './MultiSelect.css';

const MultiSelect = ({ options, value = [], onChange, label, placeholder = 'Select options...' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    const toggleOption = (optionId) => {
        const newValue = value.includes(optionId)
            ? value.filter(id => id !== optionId)
            : [...value, optionId];
        onChange(newValue);
    };

    const removeOption = (e, optionId) => {
        e.stopPropagation();
        onChange(value.filter(id => id !== optionId));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
        <div className="multi-select-root" ref={dropdownRef}>
            {label && <label className="multi-select-label">{label}</label>}
            <div
                className={`multi-select-trigger ${isOpen ? 'active' : ''}`}
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
                <ChevronDown size={18} className={`arrow ${isOpen ? 'open' : ''}`} />
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
                        />
                    </div>
                    <div className="options-list">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map(opt => (
                                <div
                                    key={opt.id}
                                    className={`option-item ${value.includes(opt.id) ? 'selected' : ''}`}
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

export default MultiSelect;
