import React, { createContext, useContext } from 'react';

export interface IconComponents {
  Upload?: React.ComponentType<{ size?: number; className?: string }>;
  Trash2?: React.ComponentType<{ size?: number; className?: string }>;
  File?: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string; className?: string }>;
  FileCode?: React.ComponentType<{ size?: number; className?: string }>;
  CheckCircle2?: React.ComponentType<{ size?: number; className?: string }>;
  XCircle?: React.ComponentType<{ size?: number; className?: string }>;
  CloudUpload?: React.ComponentType<{ size?: number; className?: string }>;
  ChevronDown?: React.ComponentType<{ size?: number; className?: string }>;
  ChevronLeft?: React.ComponentType<{ size?: number; className?: string }>;
  ChevronRight?: React.ComponentType<{ size?: number; className?: string }>;
  ArrowUp?: React.ComponentType<{ size?: number; className?: string }>;
  ArrowDown?: React.ComponentType<{ size?: number; className?: string }>;
  ArrowUpDown?: React.ComponentType<{ size?: number; className?: string }>;
  Search?: React.ComponentType<{ size?: number; className?: string }>;
  MoreVertical?: React.ComponentType<{ size?: number; className?: string }>;
  Eye?: React.ComponentType<{ size?: number; className?: string }>;
  EyeOff?: React.ComponentType<{ size?: number; className?: string }>;
  Check?: React.ComponentType<{ size?: number; className?: string }>;
  AlertTriangle?: React.ComponentType<{ size?: number; className?: string }>;
  Info?: React.ComponentType<{ size?: number; className?: string }>;
  X?: React.ComponentType<{ size?: number; className?: string }>;
}

const defaultIcons: IconComponents = {};

const IconContext = createContext<IconComponents>(defaultIcons);

export function IconProvider({ icons, children }: { icons: IconComponents; children: React.ReactNode }) {
  return <IconContext.Provider value={icons}>{children}</IconContext.Provider>;
}

export function useIcons(): IconComponents {
  return useContext(IconContext);
}

export function withIcons<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  iconMap: IconComponents,
): React.FC<P> {
  const Wrapped: React.FC<P> = (props) => (
    <IconProvider icons={iconMap}>
      <Component {...props} />
    </IconProvider>
  );
  Wrapped.displayName = `withIcons(${Component.displayName || Component.name})`;
  return Wrapped;
}
