import type { ReactNode, ComponentType } from 'react';

export interface AppBarUser {
  fullName?: string;
  avatarUrl?: string;
  email?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  icon?: ComponentType<any>;
  active?: boolean;
  onClick?: () => void;
  children?: NavItem[]; // For dropdowns
}

export type AppBarVariant = 'glass' | 'flat' | 'bordered' | 'sticky' | 'floating';

export interface AppBarProps {
  // Layout & Styling
  variant?: AppBarVariant;
  sticky?: boolean;
  fixed?: boolean;
  className?: string;

  // Brand
  logo?: ReactNode;
  brandName?: string;

  // Main Areas (Freedom to add anything anywhere)
  leftContent?: ReactNode;
  centerContent?: ReactNode;
  rightContent?: ReactNode;

  // Navigation
  navItems?: NavItem[];

  // Dashboard & Profile (Existing legacy + enhanced)
  user?: AppBarUser;
  onLogout?: () => void;
  onUpgrade?: () => void;
  subscriptionPlan?: string;
  notificationCount?: number;
  showThemeToggle?: boolean;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;

  // Sidebar Interaction
  showSidebarToggle?: boolean;
  onToggleSidebar?: () => void;

  // Search
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;

  // Colors
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  accentColor?: string;
}
