import React, { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { BreadcrumbsProps } from './breadcrumbs.types';
import './breadcrumbs.css';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items = [],
  separator = <ChevronRight size={14} />,
  className = '',
}) => {
  return (
    <nav className={cn('breadcrumbs-container', className)} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const Icon = item.icon;

        return (
          <Fragment key={item.label}>
            <div className={cn('breadcrumb-item', isLast && 'active')}>
              {Icon && (
                <span className="breadcrumb-icon">
                  <Icon size={16} />
                </span>
              )}
              {isLast || !item.href ? (
                <span className="breadcrumb-text">{item.label}</span>
              ) : (
                <a href={item.href} className="breadcrumb-link">
                  {item.label}
                </a>
              )}
            </div>
            {!isLast && <span className="breadcrumb-separator">{separator}</span>}
          </Fragment>
        );
      })}
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
