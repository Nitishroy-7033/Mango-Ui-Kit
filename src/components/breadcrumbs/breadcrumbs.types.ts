import type { ReactNode, ComponentType, CSSProperties } from 'react';

export interface BreadcrumbItem {
  /** Text to display */
  label: string;
  /** Link destination */
  href?: string;
  /** Icon to display before the label */
  icon?: ComponentType<any> | ReactNode;
  /** Custom color for this specific item */
  color?: string;
  /** Custom data for analytics or other use cases */
  [key: string]: any;
}

export type BreadcrumbsVariant = 'default' | 'filled' | 'outline' | 'ghost';
export type BreadcrumbsSize = 'sm' | 'md' | 'lg';

export interface BreadcrumbsProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator element */
  separator?: ReactNode;
  /** Selection for visual style */
  variant?: BreadcrumbsVariant;
  /** Size of the breadcrumbs */
  size?: BreadcrumbsSize;
  /** Maximum number of items to show before collapsing */
  maxItems?: number;
  /** Custom color for active item */
  activeColor?: string;
  /** Custom color for idle items */
  textColor?: string;
  /** Custom color for hover state */
  hoverColor?: string;
  /** Custom background color (mainly for filled variant) */
  bgColor?: string;
  /** Custom CSS classes */
  className?: string;
  /** Custom styles */
  style?: CSSProperties;
  /** Whether to show a separator after the last item (useful for certain layouts) */
  showLastSeparator?: boolean;
}
