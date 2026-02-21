import React, { Children, isValidElement, cloneElement } from 'react';
import { cn } from '../../utils/cn';
import type { AvatarGroupProps } from './avatar-group.types';
import { avatarStyles } from '../avatar/avatar.styles';
import './avatar-group.css';
import '../avatar/avatar.css';

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max,
  size = 'md',
  spacing = 'tight',
  className,
  ...props
}) => {
  const validChildren = Children.toArray(children).filter(isValidElement);
  const totalChildren = validChildren.length;
  const itemsToShow = max ? validChildren.slice(0, max) : validChildren;
  const remainingCount = totalChildren - (max || totalChildren);

  const spacingClass = spacing === 'tight' ? 'avatar-group-tight' : 'avatar-group-relaxed';

  return (
    <div
      className={cn('avatar-group-root', spacingClass, className)}
      {...props}
    >
      {itemsToShow.map((child, index) =>
        cloneElement(child as React.ReactElement<any>, {
          size: (child.props as any).size || size,
          className: cn(
            (child.props as any).className,
            'avatar-group-item'
          ),
          key: index,
          style: { zIndex: itemsToShow.length - index, ...((child.props as any).style || {}) }
        })
      )}

      {remainingCount > 0 && (
        <div
          className={cn(
            avatarStyles({ size, shape: 'circle' }),
            'avatar-group-extra'
          )}
          style={{ zIndex: 0 }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
