import { ReactNode, ComponentType } from 'react';

export interface DropdownOption {
  id: string;
  name: string;
  icon?: ReactNode;
  details?: string;
}

export interface DropdownProps {
  options?: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
  className?: string;
  footer?: ReactNode;
  searchable?: boolean;
  disabled?: boolean;
}
