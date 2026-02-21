import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  // Core Colors
  background: string;
  primaryColor: string;
  lightPrimaryColor: string;
  secondaryColor: string;
  primaryContainercolor: string;
  secondaryContainercolor: string;

  // Text Colors
  textColor: string;
  textSecondaryColor: string;
  labelColor: string;
  labelSecondaryColor: string;

  // UI Colors
  borderColor: string;
  accent: string;
  accentForeground: string;

  // Status Colors
  successColor: string;
  warningColor: string;
  errorColor: string;
  infoColor: string;

  // Effects
  shadowColor: string;
  shadowColorOpacity: string; // e.g. "rgba(250, 128, 41, 0.35)"
}

export interface ThemeConfig {
  light: ThemeColors;
  dark: ThemeColors;
}

export const defaultTheme: ThemeConfig = {
  light: {
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
  },
  dark: {
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
  },
};

export interface ThemeContextValue {
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeMode: 'light',
  setThemeMode: () => { },
  toggleTheme: () => { },
  colors: defaultTheme.light,
});

export interface ThemeProviderProps {
  defaultThemeMode?: ThemeMode;
  storageKey?: string;
  theme?: Partial<ThemeConfig>; // Renamed from customTheme for brevity
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultThemeMode = 'light',
  storageKey = 'mango-ui-theme',
  theme: customTheme,
  children,
}) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as ThemeMode | null;
      if (stored === 'light' || stored === 'dark') return stored;
    }
    return defaultThemeMode;
  });

  const themeConfig = useMemo(() => ({
    light: { ...defaultTheme.light, ...customTheme?.light },
    dark: { ...defaultTheme.dark, ...customTheme?.dark },
  }), [customTheme]);

  const currentColors = themeMode === 'light' ? themeConfig.light : themeConfig.dark;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', themeMode);
    localStorage.setItem(storageKey, themeMode);

    const colors = themeMode === 'light' ? themeConfig.light : themeConfig.dark;

    // Map of color keys to CSS variable names
    const variableMap: Record<keyof ThemeColors, string> = {
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

    Object.entries(variableMap).forEach(([key, variableName]) => {
      root.style.setProperty(variableName, colors[key as keyof ThemeColors]);
    });
  }, [themeMode, storageKey, themeConfig]);

  const setThemeMode = (newTheme: ThemeMode) => {
    setThemeModeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme, colors: currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext);
};
