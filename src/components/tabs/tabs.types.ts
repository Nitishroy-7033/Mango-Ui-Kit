import type { ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  content?: ReactNode;
}

export interface TabsProps {
  tabs?: TabItem[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}
