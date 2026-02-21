import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

const AccordionItem = ({ title, content, isOpen, onClick, icon: Icon }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div className="accordion-trigger" onClick={onClick}>
                <div className="trigger-left">
                    {Icon && <Icon size={20} className="accordion-icon" />}
                    <span className="accordion-title">{title}</span>
                </div>
                <ChevronDown size={18} className="accordion-arrow" />
            </div>
            <div className="accordion-content-wrapper">
                <div className="accordion-content">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ items = [], allowMultiple = false }) => {
    const [openIndices, setOpenIndices] = useState([0]);

    const handleItemClick = (index) => {
        if (allowMultiple) {
            setOpenIndices(prev =>
                prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndices(prev => prev.includes(index) ? [] : [index]);
        }
    };

    return (
        <div className="accordion-container">
            {items.map((item, idx) => (
                <AccordionItem
                    key={idx}
                    {...item}
                    isOpen={openIndices.includes(idx)}
                    onClick={() => handleItemClick(idx)}
                />
            ))}
        </div>
    );
};

export default Accordion;
