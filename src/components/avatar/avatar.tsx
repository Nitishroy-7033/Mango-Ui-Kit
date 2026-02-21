import React from 'react';
import { cn } from '../../utils/cn';
import type { AvatarProps } from './avatar.types';
import { avatarStyles } from './avatar.styles';
import './avatar.css';

export const Avatar: React.FC<AvatarProps> = ({
    className,
    size = 'md',
    shape = 'circle',
    variant = 'solid',
    src,
    alt,
    fallback,
    status = 'none',
    statusPosition = 'bottom-right',
    bordered = false,
    borderColor,
    showRing = false,
    ringColor,
    bgColor,
    textColor,
    ...props
}) => {
    const [hasError, setHasError] = React.useState(false);

    const customStyles = {
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
        '--ring-color': ringColor,
    } as React.CSSProperties;

    const renderStatus = () => {
        if (status === 'none') return null;

        return (
            <span
                className={cn(
                    'avatar-status-dot',
                    `status-${status}`,
                    `status-${statusPosition}`
                )}
            />
        );
    };

    return (
        <div
            className={cn(
                avatarStyles({ size, shape, variant }),
                showRing && 'avatar-ring',
                className
            )}
            style={customStyles}
            {...props}
        >
            {src && !hasError ? (
                <img
                    src={src}
                    alt={alt}
                    className="avatar-image"
                    onError={() => setHasError(true)}
                />
            ) : (
                <div
                    className="avatar-fallback"
                    style={{ backgroundColor: bgColor }}
                >
                    {fallback || (alt ? alt.substring(0, 1).toUpperCase() : '?')}
                </div>
            )}
            {renderStatus()}
        </div>
    );
};

Avatar.displayName = 'Avatar';
