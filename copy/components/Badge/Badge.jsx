import React from 'react';
import './Badge.css';

const Badge = ({ children, variant = 'primary', size = 'md', pill = false, icon: Icon, className = '' }) => {
    return (
        <span className={`badge-root badge-${variant} badge-${size} ${pill ? 'badge-pill' : ''} ${className}`}>
            {Icon && <Icon size={14} className="badge-icon" />}
            {children}
        </span>
    );
};

export default Badge;
