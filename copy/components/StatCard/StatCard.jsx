import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color = 'var(--primaryColor)', description }) => {
    const isPositive = trend === 'up';

    return (
        <div className="stat-card-premium" style={{ '--accent-color': color }}>
            <div className="stat-content">
                <div className="stat-main">
                    <span className="stat-title">{title}</span>
                    <h2 className="stat-value">{value}</h2>
                    {description && <p className="stat-description">{description}</p>}
                </div>
                <div className="stat-icon-wrapper">
                    <Icon size={24} />
                </div>
            </div>

            {trend && (
                <div className="stat-footer">
                    <div className={`trend-indicator ${isPositive ? 'positive' : 'negative'}`}>
                        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        <span>{trendValue}%</span>
                    </div>
                    <span className="trend-label">vs last month</span>
                </div>
            )}

            <div className="stat-glass-effect"></div>
        </div>
    );
};

export default StatCard;
