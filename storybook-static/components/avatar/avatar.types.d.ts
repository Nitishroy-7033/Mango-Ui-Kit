import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { avatarStyles } from './avatar.styles';
export type AvatarStatus = 'none' | 'online' | 'offline' | 'away' | 'busy';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarStyles> {
    src?: string;
    alt?: string;
    fallback?: React.ReactNode;
    status?: AvatarStatus;
    statusPosition?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
    bordered?: boolean;
    borderColor?: string;
    showRing?: boolean;
    ringColor?: string;
    bgColor?: string;
    textColor?: string;
}
