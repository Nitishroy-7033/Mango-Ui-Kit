import React from 'react';
import './AvatarGroup.css';

const AvatarGroup = ({ users = [], max = 3, size = 32 }) => {
    const visibleUsers = users.slice(0, max);
    const extraCount = users.length - max;

    return (
        <div className="avatar-group" style={{ height: size }}>
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
                            {user.name?.split(' ').map(n => n[0]).join('')}
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

export default AvatarGroup;
