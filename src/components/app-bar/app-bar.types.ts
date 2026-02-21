import type { ReactNode } from 'react';

export interface AppBarUser {
  fullName?: string;
  avatarUrl?: string;
  email?: string;
}

export interface AppBarProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  onToggleSidebar?: () => void;
  user?: AppBarUser;
  onLogout?: () => void;
  onUpgrade?: () => void;
  subscriptionPlan?: string;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  notificationCount?: number;
  className?: string;
  logo?: ReactNode;
}
