import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { AccordionProps, AccordionItem as AccordionItemType } from './accordion.types';
import './accordion.css';

interface AccordionItemComponentProps extends AccordionItemType {
  isOpen: boolean;
  onClick: () => void;
  variant: string;
  size: string;
  rounded: string;
  iconPosition?: 'left' | 'right';
  arrowPosition?: 'left' | 'right';
  hideArrow?: boolean;
  expandIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  accentColor?: string;
  headerBg?: string;
  contentBg?: string;
  titleColor?: string;
  contentColor?: string;
  iconColor?: string;
  arrowColor?: string;
  borderColor?: string;
}

const AccordionItem: React.FC<AccordionItemComponentProps> = ({
  title,
  content,
  icon: Icon,
  disabled,
  isOpen,
  onClick,
  iconPosition = 'left',
  arrowPosition = 'right',
  hideArrow = false,
  expandIcon,
  collapseIcon,
  itemClassName,
  headerClassName,
  contentClassName,
  accentColor,
  headerBg,
  contentBg,
  titleColor,
  contentColor,
  iconColor,
  arrowColor,
  borderColor,
}) => {
  const showCustomIcons = expandIcon || collapseIcon;

  const itemStyle = {
    '--primaryColor': accentColor,
    '--primaryContainercolor': headerBg,
    '--secondaryContainercolor': contentBg,
    '--textColor': titleColor,
    '--labelSecondaryColor': contentColor,
    '--borderColor': borderColor,
  } as React.CSSProperties;

  const iconStyle = iconColor ? { color: iconColor } : undefined;
  const arrowStyle = arrowColor ? { color: arrowColor } : undefined;

  return (
    <div
      className={cn(
        'accordion-item',
        isOpen && 'open',
        disabled && 'disabled',
        itemClassName
      )}
      style={itemStyle}
    >
      <button
        className={cn('accordion-trigger', headerClassName)}
        onClick={onClick}
        disabled={disabled}
        aria-expanded={isOpen}
      >
        {arrowPosition === 'left' && !hideArrow && (
          <div className="accordion-arrow left" style={arrowStyle}>
            {showCustomIcons ? (isOpen ? collapseIcon : expandIcon) : <ChevronDown size={18} />}
          </div>
        )}

        <div className={cn('trigger-content', iconPosition === 'right' && 'reverse')}>
          {Icon && <Icon size={20} className="accordion-icon" style={iconStyle} />}
          <span className="accordion-title" style={titleColor ? { color: titleColor } : undefined}>{title}</span>
        </div>

        {arrowPosition === 'right' && !hideArrow && (
          <div className="accordion-arrow" style={arrowStyle}>
            {showCustomIcons ? (isOpen ? collapseIcon : expandIcon) : <ChevronDown size={18} />}
          </div>
        )}
      </button>

      <div className="accordion-content-wrapper">
        <div className={cn(
          'accordion-content',
          iconPosition === 'left' && Icon && 'indent-content',
          contentClassName
        )}>
          {content}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({
  items = [],
  allowMultiple = false,
  variant = 'default',
  size = 'md',
  rounded = 'lg',
  iconPosition = 'left',
  arrowPosition = 'right',
  hideArrow = false,
  expandIcon,
  collapseIcon,
  activeItems: controlledItems,
  onChange,
  defaultOpen = [],
  className,
  itemClassName,
  headerClassName,
  contentClassName,
  accentColor,
  headerBg,
  contentBg,
  titleColor,
  contentColor,
  iconColor,
  arrowColor,
  borderColor,
}) => {
  const [internalOpenIndices, setInternalOpenIndices] = useState<number[]>(defaultOpen);

  // Use controlled or internal state
  const openIndices = controlledItems !== undefined ? controlledItems : internalOpenIndices;

  const handleItemClick = (index: number) => {
    let newIndices: number[];

    if (allowMultiple) {
      newIndices = openIndices.includes(index)
        ? openIndices.filter((i) => i !== index)
        : [...openIndices, index];
    } else {
      newIndices = openIndices.includes(index) ? [] : [index];
    }

    if (controlledItems === undefined) {
      setInternalOpenIndices(newIndices);
    }

    onChange?.(newIndices);
  };

  return (
    <div className={cn(
      'accordion-container',
      `accordion-variant-${variant}`,
      `accordion-size-${size}`,
      `accordion-rounded-${rounded}`,
      className
    )}>
      {items.map((item, idx) => (
        <AccordionItem
          key={item.id || idx}
          {...item}
          variant={variant}
          size={size}
          rounded={rounded}
          iconPosition={iconPosition}
          arrowPosition={arrowPosition}
          hideArrow={hideArrow}
          expandIcon={expandIcon}
          collapseIcon={collapseIcon}
          isOpen={openIndices.includes(idx)}
          onClick={() => handleItemClick(idx)}
          itemClassName={itemClassName}
          headerClassName={headerClassName}
          contentClassName={contentClassName}
          accentColor={accentColor}
          headerBg={headerBg}
          contentBg={contentBg}
          titleColor={titleColor}
          contentColor={contentColor}
          iconColor={iconColor}
          arrowColor={arrowColor}
          borderColor={borderColor}
        />
      ))}
    </div>
  );
};

Accordion.displayName = 'Accordion';
