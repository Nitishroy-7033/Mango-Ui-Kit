import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type AccordionVariant = 'default' | 'bordered' | 'filled' | 'separated' | 'ghost';
export type AccordionSize = 'sm' | 'md' | 'lg';
export type AccordionRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface AccordionItem {
  id?: string | number;
  title: string;
  content: ReactNode;
  icon?: LucideIcon;
  disabled?: boolean;
}

export interface AccordionProps {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  variant?: AccordionVariant;
  size?: AccordionSize;
  rounded?: AccordionRounded;

  // Icons & Arrows
  iconPosition?: 'left' | 'right';
  arrowPosition?: 'left' | 'right';
  hideArrow?: boolean;
  expandIcon?: ReactNode;
  collapseIcon?: ReactNode;

  // Controlled State
  activeItems?: number[];
  onChange?: (indices: number[]) => void;

  // Customization
  defaultOpen?: number[];
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;

  // Colors
  accentColor?: string;
  headerBg?: string;
  contentBg?: string;
  titleColor?: string;
  contentColor?: string;
  iconColor?: string;
  arrowColor?: string;
  borderColor?: string;

  // Behavior
  compact?: boolean;
}
