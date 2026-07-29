export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'dashed' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export const sizeMap: Record<string, string> = {
  sm: 'mango-btn-sm',
  md: 'mango-btn-md',
  lg: 'mango-btn-lg',
};

export const variantMap: Record<string, string> = {
  primary: 'mango-btn-primary',
  secondary: 'mango-btn-secondary',
  outline: 'mango-btn-outline',
  ghost: 'mango-btn-ghost',
  danger: 'mango-btn-danger',
  dashed: 'mango-btn-dashed',
  link: 'mango-btn-link',
};

export const roundedMap: Record<string, string> = {
  none: 'mango-btn-rounded-none',
  sm: 'mango-btn-rounded-sm',
  md: 'mango-btn-rounded-md',
  lg: 'mango-btn-rounded-lg',
  xl: 'mango-btn-rounded-xl',
  full: 'mango-btn-rounded-full',
};
