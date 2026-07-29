import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { createTheme, type MangoTheme, type ComponentOverrides } from '../../utils/create-theme';

export type ThemeMode = 'light' | 'dark';

// ─── Built-in Color Tokens ────────────────────────────────────

export interface ThemeColors {
  background: string;
  primaryColor: string;
  lightPrimaryColor: string;
  secondaryColor: string;
  primaryContainercolor: string;
  secondaryContainercolor: string;
  textColor: string;
  textSecondaryColor: string;
  labelColor: string;
  labelSecondaryColor: string;
  borderColor: string;
  accent: string;
  accentForeground: string;
  successColor: string;
  warningColor: string;
  errorColor: string;
  infoColor: string;
  shadowColor: string;
  shadowColorOpacity: string;
}

export interface ThemeSizes {
  radiusSm?: string;
  radiusMd?: string;
  radiusLg?: string;
  radiusFull?: string;
  fontSizeXs?: string;
  fontSizeSm?: string;
  fontSizeMd?: string;
  fontSizeLg?: string;
  fontSizeXl?: string;
  spacingSm?: string;
  spacingMd?: string;
  spacingLg?: string;
  spacingXl?: string;
}

export type CustomTokens = Record<string, string>;

export interface ThemeModeTokens {
  colors?: Partial<ThemeColors>;
  sizes?: Partial<ThemeSizes>;
  custom?: CustomTokens;
}

export interface ThemeConfig {
  light: ThemeModeTokens;
  dark: ThemeModeTokens;
}

// ─── Defaults ─────────────────────────────────────────────────

export const defaultColors: ThemeColors = {
  background: '#ffffff',
  primaryColor: '#fa8029',
  lightPrimaryColor: '#fff1e7',
  secondaryColor: '#f3f4f6',
  primaryContainercolor: '#ffffff',
  secondaryContainercolor: '#f9fafb',
  textColor: '#111827',
  textSecondaryColor: '#4b5563',
  labelColor: '#374151',
  labelSecondaryColor: '#6b7280',
  borderColor: '#e5e7eb',
  accent: '#fa8029',
  accentForeground: '#ffffff',
  successColor: '#10b981',
  warningColor: '#f59e0b',
  errorColor: '#ef4444',
  infoColor: '#3b82f6',
  shadowColor: '250, 128, 41',
  shadowColorOpacity: '0.35',
};

export const defaultDarkColors: ThemeColors = {
  background: '#030712',
  primaryColor: '#fa8029',
  lightPrimaryColor: '#2d1a0e',
  secondaryColor: '#1f2937',
  primaryContainercolor: '#111827',
  secondaryContainercolor: '#0f172a',
  textColor: '#f9fafb',
  textSecondaryColor: '#d1d5db',
  labelColor: '#e5e7eb',
  labelSecondaryColor: '#9ca3af',
  borderColor: '#374151',
  accent: '#fa8029',
  accentForeground: '#ffffff',
  successColor: '#10b981',
  warningColor: '#f59e0b',
  errorColor: '#ef4444',
  infoColor: '#3b82f6',
  shadowColor: '250, 128, 41',
  shadowColorOpacity: '0.35',
};

export const defaultSizes: ThemeSizes = {
  radiusSm: '6px',
  radiusMd: '12px',
  radiusLg: '20px',
  radiusFull: '9999px',
  fontSizeXs: '12px',
  fontSizeSm: '14px',
  fontSizeMd: '16px',
  fontSizeLg: '20px',
  fontSizeXl: '24px',
  spacingSm: '8px',
  spacingMd: '16px',
  spacingLg: '24px',
  spacingXl: '40px',
};

// ─── Context ──────────────────────────────────────────────────

export interface ThemeContextValue {
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  colors: ThemeColors;
  sizes: ThemeSizes;
  custom: CustomTokens;
  tokens: ThemeColors & ThemeSizes & CustomTokens;
  theme: MangoTheme;
  components: ComponentOverrides | undefined;
  getComponentProps: <T extends Record<string, unknown>>(componentName: string, props: T) => T;
  getComponentStyle: (componentName: string, key: string) => Record<string, string | number> | undefined;
}

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

// ─── Provider ─────────────────────────────────────────────────

export interface ThemeProviderProps {
  defaultThemeMode?: ThemeMode;
  storageKey?: string;
  theme?: Partial<MangoTheme>;
  followSystemTheme?: boolean;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultThemeMode = 'light',
  storageKey = 'mango-ui-theme',
  theme: userTheme,
  followSystemTheme = false,
  children,
}) => {
  const resolvedTheme = useMemo(() => createTheme(userTheme), [userTheme]);

  const getInitialMode = (): ThemeMode => {
    if (followSystemTheme && typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq.matches) return 'dark';
    }
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as ThemeMode | null;
      if (stored === 'light' || stored === 'dark') return stored;
    }
    return defaultThemeMode;
  };

  const [themeMode, setThemeModeState] = useState<ThemeMode>(getInitialMode);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  // Follow system preference
  useEffect(() => {
    if (!followSystemTheme) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(storageKey)) {
        setThemeModeState(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [followSystemTheme, storageKey]);

  // Resolve tokens
  const resolved = useMemo(() => {
    const resolve = (mode: 'light' | 'dark') => {
      const baseColors = mode === 'light' ? defaultColors : defaultDarkColors;
      const colors: ThemeColors = {
        ...baseColors,
        ...resolvedTheme[mode]?.colors,
      };
      const sizes: ThemeSizes = {
        ...defaultSizes,
        ...resolvedTheme[mode]?.sizes,
      };
      const custom: CustomTokens = {
        ...resolvedTheme.light?.custom,
        ...resolvedTheme[mode]?.custom,
      };
      return { colors, sizes, custom };
    };
    return { light: resolve('light'), dark: resolve('dark') };
  }, [resolvedTheme]);

  const { colors, sizes, custom } = themeMode === 'light' ? resolved.light : resolved.dark;
  const tokens = { ...colors, ...sizes, ...custom } as ThemeColors & ThemeSizes & CustomTokens;

  // Inject CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', themeMode);
    localStorage.setItem(storageKey, themeMode);

    const { colors: c, sizes: s, custom: cu } = themeMode === 'light' ? resolved.light : resolved.dark;

    const COLOR_VAR_MAP: Record<keyof ThemeColors, string> = {
      background: '--background',
      primaryColor: '--primaryColor',
      lightPrimaryColor: '--lightPrimaryColor',
      secondaryColor: '--secondaryColor',
      primaryContainercolor: '--primaryContainercolor',
      secondaryContainercolor: '--secondaryContainercolor',
      textColor: '--textColor',
      textSecondaryColor: '--textSecondaryColor',
      labelColor: '--labelColor',
      labelSecondaryColor: '--labelSecondaryColor',
      borderColor: '--borderColor',
      accent: '--accent',
      accentForeground: '--accent-foreground',
      successColor: '--successColor',
      warningColor: '--warningColor',
      errorColor: '--errorColor',
      infoColor: '--infoColor',
      shadowColor: '--shadowColorRGB',
      shadowColorOpacity: '--shadowOpacity',
    };

    const SIZE_VAR_MAP: Record<keyof ThemeSizes, string> = {
      radiusSm: '--radius-sm',
      radiusMd: '--radius-md',
      radiusLg: '--radius-lg',
      radiusFull: '--radius-full',
      fontSizeXs: '--btn-font-size-xs',
      fontSizeSm: '--btn-font-size-sm',
      fontSizeMd: '--btn-font-size-md',
      fontSizeLg: '--btn-font-size-lg',
      fontSizeXl: '--btn-font-size-xl',
      spacingSm: '--spacing-sm',
      spacingMd: '--spacing-md',
      spacingLg: '--spacing-lg',
      spacingXl: '--spacing-xl',
    };

    Object.entries(COLOR_VAR_MAP).forEach(([key, varName]) => {
      const val = c[key as keyof ThemeColors];
      if (val !== undefined) root.style.setProperty(varName, val);
    });

    Object.entries(SIZE_VAR_MAP).forEach(([key, varName]) => {
      const val = s[key as keyof ThemeSizes];
      if (val !== undefined) root.style.setProperty(varName, val);
    });

    Object.entries(cu).forEach(([key, val]) => {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--custom-${kebab}`, val);
    });

    // Inject typography CSS variables
    if (resolvedTheme.typography) {
      const typ = resolvedTheme.typography;
      if (typ.fontFamily) {
        Object.entries(typ.fontFamily).forEach(([key, val]) => {
          root.style.setProperty(`--font-${key}`, val);
        });
      }
      if (typ.fontSize) {
        Object.entries(typ.fontSize).forEach(([key, val]) => {
          root.style.setProperty(`--font-size-${key}`, val);
        });
      }
      if (typ.fontWeight) {
        Object.entries(typ.fontWeight).forEach(([key, val]) => {
          root.style.setProperty(`--font-weight-${key}`, val);
        });
      }
      if (typ.lineHeight) {
        Object.entries(typ.lineHeight).forEach(([key, val]) => {
          root.style.setProperty(`--line-height-${key}`, val);
        });
      }
      if (typ.letterSpacing) {
        Object.entries(typ.letterSpacing).forEach(([key, val]) => {
          root.style.setProperty(`--letter-spacing-${key}`, val);
        });
      }
    }

    // Inject component overrides
    if (resolvedTheme.components) {
      Object.entries(resolvedTheme.components).forEach(([compName, override]) => {
        if (override.style) {
          Object.entries(override.style).forEach(([cssProp, val]) => {
            const varName = `--${compName}-${cssProp.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
            root.style.setProperty(varName, String(val));
          });
        }
        if (override.variants) {
          Object.entries(override.variants).forEach(([variant, styles]) => {
            Object.entries(styles).forEach(([cssProp, val]) => {
              const varName = `--${compName}-${variant}-${cssProp.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
              root.style.setProperty(varName, String(val));
            });
          });
        }
        if (override.sizes) {
          Object.entries(override.sizes).forEach(([size, styles]) => {
            Object.entries(styles).forEach(([cssProp, val]) => {
              const varName = `--${compName}-${size}-${cssProp.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
              root.style.setProperty(varName, String(val));
            });
          });
        }
      });
    }
  }, [themeMode, storageKey, resolved, resolvedTheme]);

  // Component prop merging helper
  const getComponentProps = useCallback(<T extends Record<string, unknown>>(componentName: string, props: T): T => {
    const defaults = resolvedTheme.components?.[componentName]?.defaultProps as Partial<T> | undefined;
    if (!defaults) return props;
    return { ...defaults, ...props } as T;
  }, [resolvedTheme]);

  const getComponentStyle = useCallback((componentName: string): Record<string, string | number> | undefined => {
    return resolvedTheme.components?.[componentName]?.style;
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider value={{
      themeMode, setThemeMode, toggleTheme, colors, sizes, custom, tokens,
      theme: resolvedTheme,
      components: resolvedTheme.components,
      getComponentProps, getComponentStyle,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx.theme) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return ctx;
};
