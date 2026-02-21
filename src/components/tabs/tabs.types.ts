import type { ReactNode } from 'react';

export type TabsVariant = 'pills' | 'underline' | 'solid' | 'hybrid' | 'flat' | 'bordered';
export type TabsSize = 'sm' | 'md' | 'lg';

export interface TabItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  content?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /** Array of tab items */
  tabs: TabItem[];
  /** Controlled active tab ID */
  activeId?: string;
  /** Initially active tab ID */
  defaultTab?: string;
  /** Callback when tab changes */
  onChange?: (id: string) => void;
  /** Visual style variant */
  variant?: TabsVariant;
  /** Size of the tabs */
  size?: TabsSize;
  /** Make tabs take full width of container */
  fullWidth?: boolean;
  /** Center the tabs horizontally */
  centered?: boolean;
  /** Custom accent color (CSS color string) */
  color?: string;
  /** Additional CSS class */
  className?: string;
  /** Content to display when no tabs are selected (optional) */
  placeholder?: ReactNode;
  /** Whether to show content panel (default: true) */
  showContent?: boolean;
  /** Inline styles for the container */
  style?: React.CSSProperties;
}
