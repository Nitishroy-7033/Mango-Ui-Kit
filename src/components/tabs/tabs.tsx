import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import type { TabsProps } from './tabs.types';
import './tabs.css';

export const Tabs: React.FC<TabsProps> = ({
  tabs = [],
  defaultTab,
  onChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={cn('tabs-container', className)}>
      <div className="tabs-list" role="tablist">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              className={cn('tab-trigger', isActive && 'active')}
              onClick={() => handleTabClick(tab.id)}
            >
              {Icon && <Icon size={16} />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="tab-panel" role="tabpanel">
        {activeContent}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';
