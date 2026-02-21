import React from 'react';
import { cn } from '../../utils/cn';
import type { AvatarGroupProps } from './avatar-group.types';
import './avatar-group.css';

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  users = [],
  max = 3,
  size = 32,
  className,
}) => {
  const visibleUsers = users.slice(0, max);
  const extraCount = users.length - max;

  return (
    <div
      className={cn('avatar-group', className)}
      style={{ height: size }}
    >
      {visibleUsers.map((user, idx) => (
        <div
          key={idx}
          className="avatar-item"
          style={{
            width: size,
            height: size,
            zIndex: visibleUsers.length - idx
          }}
          title={user.name}
        >
          {user.image ? (
            <img src={user.image} alt={user.name} />
          ) : (
            <div className="avatar-placeholder">
              {user.name?.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          )}
        </div>
      ))}
      {extraCount > 0 && (
        <div
          className="avatar-extra"
          style={{
            width: size,
            height: size,
            zIndex: 0
          }}
        >
          +{extraCount}
        </div>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
