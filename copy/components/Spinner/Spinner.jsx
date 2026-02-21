import React from 'react';
import './Spinner.css';

const Spinner = ({ size = 24, color = 'var(--primaryColor)', thickness = 3 }) => {
    return (
        <div
            className="spinner-root"
            style={{
                width: size,
                height: size,
                borderWidth: thickness,
                borderTopColor: color
            }}
        />
    );
};

export default Spinner;
