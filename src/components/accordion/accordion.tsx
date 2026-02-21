import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { AccordionProps, AccordionItem as AccordionItemType } from './accordion.types';
import './accordion.css';

interface AccordionItemComponentProps extends AccordionItemType {
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemComponentProps> = ({ title, content, isOpen, onClick, icon: Icon }) => {
  return (
    <div className={cn('accordion-item', isOpen && 'open')}>
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

export const Accordion: React.FC<AccordionProps> = ({
  items = [],
  allowMultiple = false,
  className,
  defaultOpen = [0],
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(defaultOpen);

  const handleItemClick = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn('accordion-container', className)}>
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

Accordion.displayName = 'Accordion';
