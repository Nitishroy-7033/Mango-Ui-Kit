import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './Rating.css';

const Rating = ({ value = 0, max = 5, onChange, readonly = false, size = 20 }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className={`rating-root ${readonly ? 'readonly' : ''}`}>
            {[...Array(max)].map((_, idx) => {
                const starValue = idx + 1;
                const isActive = starValue <= (hover || value);

                return (
                    <button
                        key={idx}
                        type="button"
                        className={`star-btn ${isActive ? 'active' : ''}`}
                        onClick={() => !readonly && onChange && onChange(starValue)}
                        onMouseEnter={() => !readonly && setHover(starValue)}
                        onMouseLeave={() => !readonly && setHover(0)}
                        style={{ width: size, height: size }}
                    >
                        <Star
                            size={size}
                            fill={isActive ? 'var(--primaryColor)' : 'none'}
                            stroke={isActive ? 'var(--primaryColor)' : 'var(--labelSecondaryColor)'}
                        />
                    </button>
                );
            })}
            {!readonly && (hover || value) > 0 && (
                <span className="rating-hint">{hover || value} / {max}</span>
            )}
        </div>
    );
};

export default Rating;
