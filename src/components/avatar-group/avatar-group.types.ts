import type React from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { avatarStyles } from '../avatar/avatar.styles';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
  size?: VariantProps<typeof avatarStyles>['size'];
  spacing?: 'tight' | 'relaxed';
}
