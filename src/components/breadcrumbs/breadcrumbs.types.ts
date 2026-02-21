import type { ReactNode, ComponentType } from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ComponentType<any>;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}
