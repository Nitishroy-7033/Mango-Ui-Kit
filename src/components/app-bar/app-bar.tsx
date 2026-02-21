import React, { useState, useRef, useEffect } from 'react';
import { Bell, ChevronDown, Moon, Sun, LogOut, User, Settings, Crown, Menu, Search } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { AppBarProps, NavItem } from './app-bar.types';
import './app-bar.css';

const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className={cn('nav-item-dropdown', hasChildren && 'has-children')}
      onMouseEnter={() => hasChildren && setIsOpen(true)}
      onMouseLeave={() => hasChildren && setIsOpen(false)}
    >
      <button
        className={cn('nav-link', item.active && 'active')}
        onClick={() => item.onClick?.()}
      >
        {Icon && <Icon size={18} />}
        <span>{item.label}</span>
        {hasChildren && <ChevronDown size={14} className={cn('nav-arrow', isOpen && 'rotated')} />}
      </button>

      {hasChildren && isOpen && (
        <div className="nav-dropdown-menu">
          {item.children?.map((child, idx) => (
            <button
              key={idx}
              className="dropdown-item"
              onClick={() => child.onClick?.()}
            >
              {child.icon && <child.icon size={16} />}
              <span>{child.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const AppBar: React.FC<AppBarProps> = ({
  variant = 'glass',
  sticky = true,
  fixed = false,
  logo,
  brandName,
  leftContent,
  centerContent,
  rightContent,
  navItems = [],
  user,
  onLogout,
  subscriptionPlan,
  notificationCount = 0,
  showThemeToggle = true,
  theme = 'light',
  onToggleTheme,
  showSidebarToggle = false,
  onToggleSidebar,
  showSearch = true,
  searchPlaceholder = 'Search...',
  onSearch,
  className,
  bgColor,
  textColor,
  borderColor,
  accentColor,
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const styles = {
    '--primaryContainercolor': bgColor,
    '--textColor': textColor,
    '--borderColor': borderColor,
    '--primaryColor': accentColor,
  } as React.CSSProperties;

  return (
    <header
      className={cn(
        'app-bar',
        `app-bar-variant-${variant}`,
        sticky && 'app-bar-sticky',
        fixed && 'app-bar-fixed',
        className
      )}
      style={styles}
    >
      {/* ── LEFT SECTION ── */}
      <div className="app-bar-left">
        {showSidebarToggle && (
          <button className="mobile-menu-btn" onClick={onToggleSidebar}>
            <Menu size={24} />
          </button>
        )}

        {(logo || brandName) && (
          <div className="app-bar-brand">
            {logo && <div className="app-bar-logo">{logo}</div>}
            {brandName && <span className="app-bar-brand-name">{brandName}</span>}
          </div>
        )}

        {leftContent}

        <nav className="app-bar-nav">
          {navItems.map((item, idx) => (
            <NavLink key={idx} item={item} />
          ))}
        </nav>
      </div>

      {/* ── CENTER SECTION ── */}
      <div className="app-bar-center">
        {centerContent}

        {showSearch && (
          <div className="app-bar-search">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="app-bar-search-input"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* ── RIGHT SECTION ── */}
      <div className="app-bar-right">
        {rightContent}

        {subscriptionPlan && (
          <div className={cn('plan-badge', subscriptionPlan.toLowerCase())}>
            <Crown size={14} />
            <span>{subscriptionPlan}</span>
          </div>
        )}

        <div className="app-bar-actions">
          {showThemeToggle && onToggleTheme && (
            <button className="nav-link icon-only" onClick={onToggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          )}

          <button className="nav-link icon-only notification-btn">
            <Bell size={20} />
            {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
          </button>

          {user && (
            <div className="user-profile" ref={userMenuRef}>
              <button
                className="user-profile-trigger"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="user-avatar">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.fullName} />
                  ) : (
                    <div className="fallback-avatar">{user.fullName?.[0] || 'U'}</div>
                  )}
                </div>
                <ChevronDown size={14} className={cn('dropdown-icon', showUserMenu && 'rotated')} />
              </button>

              {showUserMenu && (
                <div className="user-dropdown-menu">
                  <div className="dropdown-header">
                    <p className="dropdown-name">{user.fullName}</p>
                    <p className="dropdown-email">{user.email}</p>
                  </div>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item"><User size={16} /> Profile</button>
                  <button className="dropdown-item"><Settings size={16} /> Settings</button>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item logout" onClick={onLogout}><LogOut size={16} /> Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
