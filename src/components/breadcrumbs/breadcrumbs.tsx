import React, { Fragment, useState } from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { BreadcrumbsProps, BreadcrumbItem } from './breadcrumbs.types';
import './breadcrumbs.css';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items = [],
  separator = <ChevronRight size={14} />,
  variant = 'default',
  size = 'md',
  maxItems = 0,
  activeColor,
  textColor,
  hoverColor,
  bgColor,
  className = '',
  style,
  showLastSeparator = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle collapsing logic
  const getDisplayItems = () => {
    if (maxItems <= 0 || items.length <= maxItems || isExpanded) {
      return items;
    }

    const itemsBefore = Math.ceil((maxItems - 1) / 2);
    const itemsAfter = Math.floor((maxItems - 1) / 2);

    const firstItems = items.slice(0, itemsBefore);
    const lastItems = items.slice(items.length - itemsAfter);

    return [...firstItems, { label: 'collapsed', isCollapsedIndicator: true } as any, ...lastItems];
  };

  const displayItems = getDisplayItems();

  const renderItemContent = (item: BreadcrumbItem, isLast: boolean) => {
    const IconComponent = item.icon as any;
    const hasIcon = !!item.icon;

    // Check if icon is a component or an element
    const renderedIcon = React.isValidElement(item.icon)
      ? item.icon
      : IconComponent ? <IconComponent size={size === 'sm' ? 14 : 16} /> : null;

    const itemStyle: React.CSSProperties = {
      color: isLast ? activeColor || undefined : (item.color || textColor || undefined),
    };

    const content = (
      <div
        className={cn(
          'breadcrumb-item',
          isLast && 'active',
          hasIcon && 'has-icon'
        )}
        style={itemStyle}
      >
        {renderedIcon && <span className="breadcrumb-icon">{renderedIcon}</span>}
        <span className="breadcrumb-text">{item.label}</span>
      </div>
    );

    if (isLast || !item.href) {
      return content;
    }

    return (
      <a
        href={item.href}
        className="breadcrumb-link"
        style={{ '--hover-color': hoverColor } as React.CSSProperties}
      >
        {content}
      </a>
    );
  };

  return (
    <nav
      className={cn(
        'breadcrumbs-root',
        `breadcrumbs-${variant}`,
        `breadcrumbs-${size}`,
        className
      )}
      aria-label="Breadcrumb"
      style={{
        ...style,
        backgroundColor: bgColor || undefined
      }}
    >
      {displayItems.map((item, index) => {
        const isLast = index === displayItems.length - 1;

        if ((item as any).isCollapsedIndicator) {
          return (
            <Fragment key="collapsed">
              <button
                className="breadcrumb-collapsed-btn"
                onClick={() => setIsExpanded(true)}
                title="Show all items"
              >
                <MoreHorizontal size={size === 'sm' ? 14 : 16} />
              </button>
              <span className="breadcrumb-separator">{separator}</span>
            </Fragment>
          );
        }

        return (
          <Fragment key={`${item.label}-${index}`}>
            {renderItemContent(item, isLast)}
            {(!isLast || showLastSeparator) && (
              <span className="breadcrumb-separator">{separator}</span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
