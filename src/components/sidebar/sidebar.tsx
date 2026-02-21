import React, { useState } from 'react';
import { ChevronRight, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { SidebarProps, SidebarItem, SidebarSubItem, SidebarCategory } from './sidebar.types';
import './sidebar.css';

export const Sidebar: React.FC<SidebarProps> = ({
  logo,
  brandName,
  topCategories = [],
  categories = [],
  collapsed: controlledCollapsed,
  defaultCollapsed = false,
  onCollapse,
  activeId,
  onItemClick,
  footer,
  className,
  style,
  showTreeLines = true,
  width = 280,
  collapsedWidth = 80,
  position = 'left',
  showToggle = true,
  togglePosition = 'bottom',
  borderRadius,
  itemBorderRadius,
  colorScheme = 'primary',
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const isCollapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  const handleToggleCollapse = () => {
    const nextState = !isCollapsed;
    setInternalCollapsed(nextState);
    onCollapse?.(nextState);
  };

  const handleItemClick = (item: SidebarItem | SidebarSubItem, isParent = false) => {
    if (onItemClick) {
      onItemClick(item.id, item.path);
    }

    // Auto-expand parent if it has sub-items and is clicked
    if (isParent && (item as SidebarItem).subItems) {
      setExpandedItems(prev =>
        prev.includes(item.id) ? prev.filter(i => i !== item.id) : [...prev, item.id]
      );
    }
  };

  const renderBadge = (badge?: React.ReactNode, variant?: string) => {
    if (badge === undefined || isCollapsed) return null;
    return (
      <span className={cn('mango-sidebar-badge', variant && `badge-${variant}`)}>
        {badge}
      </span>
    );
  };

  const getThemeColor = (scheme: string) => {
    switch (scheme) {
      case 'primary': return 'var(--primaryColor, #fa8029)';
      case 'secondary': return 'var(--secondaryColor, #64748b)';
      case 'success': return '#22c55e';
      case 'warning': return '#f59e0b';
      case 'error': return '#ef4444';
      case 'info': return '#3b82f6';
      default: return scheme; // Assume hex or other valid CSS color
    }
  };

  const activeColor = getThemeColor(colorScheme);
  const lightActiveColor = colorScheme.startsWith('#')
    ? `${activeColor}1a` // Add 10% opacity if hex
    : `var(--lightPrimaryColor, ${activeColor}1a)`;

  const sidebarStyle = {
    ...style,
    '--sidebar-width': typeof width === 'number' ? `${width}px` : width,
    '--sidebar-collapsed-width': typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth,
    '--sidebar-radius': borderRadius,
    '--sidebar-item-radius': itemBorderRadius,
    '--sidebar-active-color': activeColor,
    '--sidebar-active-bg': lightActiveColor,
  } as React.CSSProperties;

  const renderCategory = (category: SidebarCategory, catIdx: number) => (
    <div key={catIdx} className="mango-sidebar-category">
      {category.title && !isCollapsed && (
        <h4 className="mango-sidebar-category-title animate-fade-in">
          {category.title}
        </h4>
      )}
      <div className="mango-sidebar-items">
        {category.items.filter(item => !item.hidden).map((item) => {
          const isExpanded = expandedItems.includes(item.id);
          const isActive = activeId === item.id ||
            item.subItems?.some(sub => sub.id === activeId);
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <div key={item.id} className={cn('mango-sidebar-item-group', isExpanded && 'is-expanded')}>
              <div
                className={cn(
                  'mango-sidebar-item',
                  isActive && 'is-active',
                  item.disabled && 'is-disabled'
                )}
                onClick={() => !item.disabled && handleItemClick(item, true)}
                title={isCollapsed ? item.label : undefined}
              >
                <div className="mango-sidebar-item-icon">
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <>
                    <span className="mango-sidebar-item-label">{item.label}</span>
                    <div className="mango-sidebar-item-suffix">
                      {renderBadge(item.badge, item.badgeVariant)}
                      {hasSubItems && (
                        <ChevronRight
                          size={14}
                          className={cn('mango-sidebar-chevron', isExpanded && 'rotated')}
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
              {hasSubItems && !isCollapsed && isExpanded && (
                <div className={cn('mango-sidebar-sub-items', showTreeLines && 'show-tree')}>
                  {item.subItems?.map((subItem) => (
                    <div
                      key={subItem.id}
                      className={cn(
                        'mango-sidebar-sub-item',
                        activeId === subItem.id && 'is-active'
                      )}
                      onClick={() => handleItemClick(subItem)}
                    >
                      <span className="mango-sidebar-sub-item-label">
                        {subItem.label}
                      </span>
                      {renderBadge(subItem.badge, subItem.badgeVariant)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderToggle = (pos: 'top' | 'bottom' | 'float') => {
    if (!showToggle || togglePosition !== pos) return null;
    return (
      <button
        className={cn('mango-sidebar-toggle', `is-${pos}`)}
        onClick={handleToggleCollapse}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        {!isCollapsed && pos === 'bottom' && <span className="toggle-text">Collapse Sidebar</span>}
      </button>
    );
  };

  return (
    <aside
      className={cn(
        'mango-sidebar',
        isCollapsed && 'is-collapsed',
        `position-${position}`,
        className
      )}
      style={sidebarStyle}
    >
      <div className="mango-sidebar-header">
        <div className="mango-sidebar-brand">
          {logo && <div className="mango-sidebar-logo">{logo}</div>}
          {brandName && !isCollapsed && (
            <span className="mango-sidebar-brand-name animate-fade-in">{brandName}</span>
          )}
        </div>
        {renderToggle('top')}
      </div>

      {renderToggle('float')}

      {/* Fixed Top Content */}
      <div className="mango-sidebar-top-content">
        {topCategories.map((category, idx) => renderCategory(category, idx))}
      </div>

      {/* Scrollable Content */}
      <div className="mango-sidebar-content mango-scrollbar">
        {categories.map((category, idx) => renderCategory(category, idx))}
      </div>

      {/* Footer & Bottom Toggle */}
      <div className="mango-sidebar-footer-wrapper">
        {renderToggle('bottom')}
        {footer && (
          <div className="mango-sidebar-footer">
            {footer}
          </div>
        )}
      </div>
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';
