import { ReactNode, ComponentType } from '../../../node_modules/react';
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
    children?: NavItem[];
}
export type AppBarVariant = 'glass' | 'flat' | 'bordered' | 'sticky' | 'floating';
export interface AppBarProps {
    variant?: AppBarVariant;
    sticky?: boolean;
    fixed?: boolean;
    className?: string;
    logo?: ReactNode;
    brandName?: string;
    leftContent?: ReactNode;
    centerContent?: ReactNode;
    rightContent?: ReactNode;
    navItems?: NavItem[];
    user?: AppBarUser;
    onLogout?: () => void;
    onUpgrade?: () => void;
    subscriptionPlan?: string;
    notificationCount?: number;
    showThemeToggle?: boolean;
    theme?: 'light' | 'dark';
    onToggleTheme?: () => void;
    showSidebarToggle?: boolean;
    onToggleSidebar?: () => void;
    showSearch?: boolean;
    searchPlaceholder?: string;
    onSearch?: (query: string) => void;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    accentColor?: string;
}
