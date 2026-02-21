import React from 'react';
import { cn } from '../../utils/cn';
import type { AvatarProps } from './avatar.types';
import { avatarStyles } from './avatar.styles';

export const Avatar: React.FC<AvatarProps> = ({
    className,
    size,
    src,
    alt,
    fallback,
    ...props
}) => {
    const [hasError, setHasError] = React.useState(false);

    return (
        <div
            className={cn(avatarStyles({ size }), className)}
            {...props}
        >
            {src && !hasError ? (
                <img
                    src={src}
                    alt={alt}
                    className="aspect-square h-full w-full object-cover"
                    onError={() => setHasError(true)}
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-neutral-400 font-medium">
                    {fallback || (alt ? alt.substring(0, 2).toUpperCase() : '??')}
                </div>
            )}
        </div>
    );
};

Avatar.displayName = 'Avatar';
