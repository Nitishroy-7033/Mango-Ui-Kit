import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs = [], defaultTab, onChange }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        if (onChange) onChange(tabId);
    };

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                        <span className="tab-label">{tab.label}</span>
                        {activeTab === tab.id && <div className="tab-indicator" />}
                    </button>
                ))}
            </div>
            <div className="tabs-content animate-fade-in">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs;
