import type { ReactNode } from 'react';

export interface SidebarLink {
  icon: ReactNode;
  label: string;
  path?: string;
  badge?: number | string;
  active?: boolean;
  onClick?: () => void;
}

export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export interface SidebarProps {
  sections?: SidebarSection[];
  isOpen?: boolean;
  onClose?: () => void;
  logo?: ReactNode;
  footer?: ReactNode;
  className?: string;
}
