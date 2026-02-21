import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import type { TabsProps } from './tabs.types';
import './tabs.css';

export const Tabs: React.FC<TabsProps> = ({
  tabs = [],
  activeId,
  defaultTab,
  onChange,
  variant = 'pills',
  size = 'md',
  fullWidth = false,
  centered = false,
  color,
  className = '',
  placeholder,
  showContent = true,
  style,
}) => {
  const [internalActiveId, setInternalActiveId] = useState(defaultTab || tabs[0]?.id);
  const activeTabId = activeId !== undefined ? activeId : internalActiveId;

  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const tabsListRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const handleTabClick = (tabId: string) => {
    setInternalActiveId(tabId);
    onChange?.(tabId);
  };

  useEffect(() => {
    if (activeTabRef.current && tabsListRef.current) {
      const activeElement = activeTabRef.current;

      const { offsetLeft, offsetWidth } = activeElement;

      setIndicatorStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
      });

      // Scroll active tab into view if needed
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeTabId, tabs, variant]);

  const activeContent = tabs.find((tab) => tab.id === activeTabId)?.content;

  const containerStyle = {
    ...style,
    '--tabs-active-color': color,
    '--tabs-active-light': color ? `${color}14` : undefined, // 8% opacity for hybrid bg
  } as React.CSSProperties;

  return (
    <div className={cn('mango-tabs-container', className)} style={containerStyle}>
      <div className="mango-tabs-list-wrapper">
        <div
          ref={tabsListRef}
          className={cn(
            'mango-tabs-list',
            `is-${variant}`,
            fullWidth && 'is-full-width',
            centered && 'is-centered'
          )}
          role="tablist"
        >
          {/* Animated Indicator */}
          <div className="mango-tabs-indicator" style={indicatorStyle} />

          {tabs.map((tab) => {
            const isActive = activeTabId === tab.id;

            return (
              <button
                key={tab.id}
                ref={isActive ? activeTabRef : null}
                role="tab"
                aria-selected={isActive}
                disabled={tab.disabled}
                className={cn(
                  'mango-tabs-trigger',
                  isActive && 'active',
                  `is-${size}`
                )}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.icon && (
                  <span className="mango-tab-icon" style={{ display: 'inline-flex' }}>
                    {tab.icon}
                  </span>
                )}
                <span className="mango-tab-label">{tab.label}</span>
                {tab.badge && (
                  <span className="mango-tab-badge">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {showContent && (
        <div className="mango-tab-panel" role="tabpanel">
          {activeContent || placeholder}
        </div>
      )}
    </div>
  );
};

Tabs.displayName = 'Tabs';
