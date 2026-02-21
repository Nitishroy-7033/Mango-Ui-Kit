import { default as React } from '../../../node_modules/react';
export type ThemeMode = 'light' | 'dark';
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
export interface ThemeConfig {
    light: ThemeColors;
    dark: ThemeColors;
}
export declare const defaultTheme: ThemeConfig;
export interface ThemeContextValue {
    themeMode: ThemeMode;
    setThemeMode: (theme: ThemeMode) => void;
    toggleTheme: () => void;
    colors: ThemeColors;
}
export interface ThemeProviderProps {
    defaultThemeMode?: ThemeMode;
    storageKey?: string;
    theme?: Partial<ThemeConfig>;
    children: React.ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextValue;
