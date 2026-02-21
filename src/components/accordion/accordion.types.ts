import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface AccordionItem {
  title: string;
  content: ReactNode;
  icon?: LucideIcon;
}

export interface AccordionProps {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  defaultOpen?: number[];
}
