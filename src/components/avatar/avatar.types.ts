import type React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { avatarStyles } from './avatar.styles';

export interface AvatarProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof avatarStyles> {
    src?: string;
    alt?: string;
    fallback?: string;
}
