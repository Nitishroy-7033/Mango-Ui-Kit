import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value, max = 100, label, showValue = true, color = 'var(--primaryColor)' }) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className="progress-container">
            {(label || showValue) && (
                <div className="progress-header">
                    {label && <span className="progress-label">{label}</span>}
                    {showValue && <span className="progress-value">{Math.round(percentage)}%</span>}
                </div>
            )}
            <div className="progress-track">
                <div
                    className="progress-fill"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}4d`
                    }}
                >
                    <div className="progress-shimmer"></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
