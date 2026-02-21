import type { ReactNode, ComponentType } from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: ComponentType<any>;
  content?: ReactNode;
}

export interface TabsProps {
  tabs?: TabItem[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}
