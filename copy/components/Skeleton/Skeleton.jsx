import React from 'react';
import './Skeleton.css';

const Skeleton = ({ variant = 'text', width, height, borderRadius, margin, className = '' }) => {
    const style = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        margin: margin
    };

    return (
        <div
            className={`skeleton-base skeleton-${variant} ${className}`}
            style={style}
        />
    );
};

export default Skeleton;
