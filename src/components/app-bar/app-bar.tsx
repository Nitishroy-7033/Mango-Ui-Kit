import React, { useState, useRef, useEffect } from 'react';
import { Bell, ChevronDown, Moon, Sun, ArrowUpCircle, LogOut, User, Settings, Crown, Menu } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { AppBarProps } from './app-bar.types';
import './app-bar.css';

export const AppBar: React.FC<AppBarProps> = ({
  theme = 'light',
  onToggleTheme,
  onToggleSidebar,
  user,
  onLogout,
  onUpgrade,
  subscriptionPlan,
  searchPlaceholder = 'Search...',
  onSearch,
  notificationCount = 0,
  className,
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isFree = subscriptionPlan?.toLowerCase() === 'free';

  return (
    <header className={cn('app-bar', className)}>
      {onToggleSidebar && (
        <button
          className="menu-toggle-btn"
          onClick={onToggleSidebar}
          title="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>
      )}

      <div className="search-container">
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="search-input-full"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>

      <div className="app-bar-actions">
        {subscriptionPlan && (
          <div className={cn('plan-badge', subscriptionPlan.toLowerCase())}>
            <Crown size={14} className="medal-icon" />
            <span>{subscriptionPlan} Plan</span>
          </div>
        )}

        {isFree && onUpgrade && (
          <button className="upgrade-btn" onClick={onUpgrade}>
            <ArrowUpCircle size={18} />
            <span>Upgrade</span>
          </button>
        )}

        <div className="divider" />

        {onToggleTheme && (
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            title="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        )}

        <button className="icon-btn notification-btn">
          <Bell size={20} />
          {notificationCount > 0 && <span className="notification-dot"></span>}
        </button>

        <div className="user-profile" ref={menuRef}>
          <div
            className="user-profile-trigger"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="user-avatar">
              {user?.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.fullName || 'User'} />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                  {user?.fullName?.[0] ?? 'U'}
                </div>
              )}
            </div>
            <div className="user-details">
              <span className="user-name">{user?.fullName || 'User'}</span>
              <ChevronDown size={14} className={cn('dropdown-icon', showUserMenu && 'rotated')} />
            </div>
          </div>

          {showUserMenu && (
            <div className="user-dropdown-menu">
              <div className="dropdown-header">
                <div className="dropdown-user-info">
                  <span className="dropdown-name">{user?.fullName || 'User'}</span>
                  <span className="dropdown-email">{user?.email || 'user@example.com'}</span>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">
                <User size={16} />
                <span>My Profile</span>
              </button>
              <button className="dropdown-item">
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item logout" onClick={() => { setShowUserMenu(false); onLogout?.(); }}>
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

AppBar.displayName = 'AppBar';
