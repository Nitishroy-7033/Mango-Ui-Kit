import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export type ThemeMode = 'light' | 'dark';

// ─── Built-in Color Tokens ────────────────────────────────────────────────────

export interface ThemeColors {
  // Core
  background: string;
  primaryColor: string;
  lightPrimaryColor: string;
  secondaryColor: string;
  primaryContainercolor: string;
  secondaryContainercolor: string;

  // Text
  textColor: string;
  textSecondaryColor: string;
  labelColor: string;
  labelSecondaryColor: string;

  // UI
  borderColor: string;
  accent: string;
  accentForeground: string;

  // Status
  successColor: string;
  warningColor: string;
  errorColor: string;
  infoColor: string;

  // Effects
  shadowColor: string;
  shadowColorOpacity: string;
}

// ─── Built-in Size / Spacing Tokens ──────────────────────────────────────────

export interface ThemeSizes {
  /** Base border radius */
  radiusSm?: string;
  radiusMd?: string;
  radiusLg?: string;
  radiusFull?: string;
  /** Base font sizes */
  fontSizeXs?: string;
  fontSizeSm?: string;
  fontSizeMd?: string;
  fontSizeLg?: string;
  fontSizeXl?: string;
  /** Base spacing */
  spacingSm?: string;
  spacingMd?: string;
  spacingLg?: string;
  spacingXl?: string;
}

// ─── Extended / Custom Tokens ─────────────────────────────────────────────────
// Users can pass any string key with a string value.
// They will be auto-injected as CSS variables with the prefix '--custom-'

export type CustomTokens = Record<string, string>;

// ─── Full Theme Config ────────────────────────────────────────────────────────

export interface ThemeModeTokens {
  colors?: Partial<ThemeColors>;
  sizes?: Partial<ThemeSizes>;
  custom?: CustomTokens;
}

export interface ThemeConfig {
  light: ThemeModeTokens;
  dark: ThemeModeTokens;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

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

// ─── Built-in variable names map ──────────────────────────────────────────────

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
  fontSizeXs: '--font-size-xs',
  fontSizeSm: '--font-size-sm',
  fontSizeMd: '--font-size-md',
  fontSizeLg: '--font-size-lg',
  fontSizeXl: '--font-size-xl',
  spacingSm: '--spacing-sm',
  spacingMd: '--spacing-md',
  spacingLg: '--spacing-lg',
  spacingXl: '--spacing-xl',
};

// ─── Context ──────────────────────────────────────────────────────────────────

export interface ThemeContextValue {
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  /** All resolved color tokens for the active mode */
  colors: ThemeColors;
  /** All resolved size tokens for the active mode */
  sizes: ThemeSizes;
  /** All resolved custom tokens for the active mode (user-defined) */
  custom: CustomTokens;
  /**
   * `tokens` merges colors + sizes + custom into a flat object for
   * convenient access: `tokens.primaryColor`, `tokens.heroBackground`, etc.
   */
  tokens: ThemeColors & ThemeSizes & CustomTokens;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeMode: 'light',
  setThemeMode: () => { },
  toggleTheme: () => { },
  colors: defaultColors,
  sizes: defaultSizes,
  custom: {},
  tokens: { ...defaultColors, ...defaultSizes },
});

// ─── Provider ─────────────────────────────────────────────────────────────────

export interface ThemeProviderProps {
  /** Initial theme mode to apply before localStorage is read */
  defaultThemeMode?: ThemeMode;
  /** localStorage key for persisting user's theme choice */
  storageKey?: string;
  /** Your theme overrides — can include colors, sizes, and custom tokens */
  theme?: Partial<ThemeConfig>;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultThemeMode = 'light',
  storageKey = 'mango-ui-theme',
  theme: userTheme,
  children,
}) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as ThemeMode | null;
      if (stored === 'light' || stored === 'dark') return stored;
    }
    return defaultThemeMode;
  });

  // Resolve full tokens for each mode
  const resolved = useMemo(() => {
    const resolve = (mode: 'light' | 'dark') => {
      const baseColors = mode === 'light' ? defaultColors : defaultDarkColors;
      const colors: ThemeColors = {
        ...baseColors,
        ...userTheme?.[mode]?.colors,
      };
      const sizes: ThemeSizes = {
        ...defaultSizes,
        ...userTheme?.[mode]?.sizes,
      };
      const custom: CustomTokens = {
        ...userTheme?.light?.custom,  // light custom is the base
        ...userTheme?.[mode]?.custom, // dark custom overrides
      };
      return { colors, sizes, custom };
    };
    return {
      light: resolve('light'),
      dark: resolve('dark'),
    };
  }, [userTheme]);

  const { colors, sizes, custom } = themeMode === 'light' ? resolved.light : resolved.dark;

  const tokens = { ...colors, ...sizes, ...custom } as ThemeColors & ThemeSizes & CustomTokens;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', themeMode);
    localStorage.setItem(storageKey, themeMode);

    const { colors: c, sizes: s, custom: cu } = themeMode === 'light' ? resolved.light : resolved.dark;

    // Inject built-in color vars
    Object.entries(COLOR_VAR_MAP).forEach(([key, varName]) => {
      const val = c[key as keyof ThemeColors];
      if (val !== undefined) root.style.setProperty(varName, val);
    });

    // Inject built-in size vars
    Object.entries(SIZE_VAR_MAP).forEach(([key, varName]) => {
      const val = s[key as keyof ThemeSizes];
      if (val !== undefined) root.style.setProperty(varName, val);
    });

    // Inject custom tokens as CSS variables with '--custom-' prefix
    Object.entries(cu).forEach(([key, val]) => {
      // Convert camelCase key to kebab-case: heroBackground → --custom-hero-background
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--custom-${kebab}`, val);
    });
  }, [themeMode, storageKey, resolved]);

  const setThemeMode = (mode: ThemeMode) => setThemeModeState(mode);
  const toggleTheme = () => setThemeModeState(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme, colors, sizes, custom, tokens }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useTheme = (): ThemeContextValue => useContext(ThemeContext);
