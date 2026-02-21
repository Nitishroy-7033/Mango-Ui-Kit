import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { avatarStyles } from '../avatar/avatar.styles';
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    max?: number;
    size?: VariantProps<typeof avatarStyles>['size'];
    spacing?: 'tight' | 'relaxed';
}
