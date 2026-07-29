import type { ThemeModeTokens } from '../components/theme-provider/theme-provider';

// ─── Typography Scale ─────────────────────────────────────────

export interface TypographyScale {
  fontFamily?: Partial<{
    sans: string;
    mono: string;
    heading: string;
    body: string;
  }>;
  fontSize?: Record<string, string>;
  fontWeight?: Record<string, string>;
  lineHeight?: Record<string, string>;
  letterSpacing?: Record<string, string>;
}

// ─── Component Overrides ──────────────────────────────────────

export interface ComponentOverride {
  style?: Record<string, string | number>;
  variants?: Record<string, Record<string, string | number>>;
  sizes?: Record<string, Record<string, string | number>>;
  defaultProps?: Record<string, unknown>;
}

export type ComponentOverrides = Record<string, ComponentOverride>;

// ─── Full Theme Config ────────────────────────────────────────

export interface MangoTheme {
  light: ThemeModeTokens;
  dark: ThemeModeTokens;
  typography?: TypographyScale;
  components?: ComponentOverrides;
}

// ─── Default Typography Scale ─────────────────────────────────

export const defaultTypographyScale: TypographyScale = {
  fontFamily: {
    sans: "'General Sans', 'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    heading: "'General Sans', 'Inter', system-ui, sans-serif",
    body: "'General Sans', 'Inter', system-ui, sans-serif",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// ─── Create Theme ─────────────────────────────────────────────

export function createTheme(theme?: Partial<MangoTheme>): MangoTheme {
  return {
    light: {
      colors: theme?.light?.colors,
      sizes: theme?.light?.sizes,
      custom: theme?.light?.custom,
    },
    dark: {
      colors: theme?.dark?.colors,
      sizes: theme?.dark?.sizes,
      custom: theme?.dark?.custom,
    },
    typography: {
      ...defaultTypographyScale,
      ...theme?.typography,
      fontFamily: { ...defaultTypographyScale.fontFamily, ...theme?.typography?.fontFamily },
      fontSize: { ...defaultTypographyScale.fontSize, ...theme?.typography?.fontSize },
      fontWeight: { ...defaultTypographyScale.fontWeight, ...theme?.typography?.fontWeight },
      lineHeight: { ...defaultTypographyScale.lineHeight, ...theme?.typography?.lineHeight },
      letterSpacing: { ...defaultTypographyScale.letterSpacing, ...theme?.typography?.letterSpacing },
    },
    components: theme?.components,
  };
}

// ─── CSS Variable Injection ───────────────────────────────────

export function injectThemeCSS(
  theme: MangoTheme,
  mode: 'light' | 'dark',
  root: HTMLElement = document.documentElement,
): void {
  const tokens = mode === 'light' ? theme.light : theme.dark;
  const colors = tokens.colors;
  const sizes = tokens.sizes;

  const COLOR_VAR_MAP: Record<string, string> = {
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

  if (colors) {
    Object.entries(COLOR_VAR_MAP).forEach(([key, varName]) => {
      const val = (colors as Record<string, string | undefined>)[key];
      if (val !== undefined) root.style.setProperty(varName, val);
    });
  }

  if (sizes) {
    const SIZE_VAR_MAP: Record<string, string> = {
      radiusSm: '--radius-sm',
      radiusMd: '--radius-md',
      radiusLg: '--radius-lg',
      radiusFull: '--radius-full',
      spacingSm: '--spacing-sm',
      spacingMd: '--spacing-md',
      spacingLg: '--spacing-lg',
      spacingXl: '--spacing-xl',
    };
    const sizesRecord = sizes as Record<string, string | undefined>;
    Object.entries(SIZE_VAR_MAP).forEach(([key, varName]) => {
      const val = sizesRecord[key];
      if (val !== undefined) root.style.setProperty(varName, val);
    });
  }

  if (theme.typography) {
    const typography = theme.typography;

    if (typography.fontFamily) {
      Object.entries(typography.fontFamily).forEach(([key, val]) => {
        root.style.setProperty(`--font-${key}`, val);
      });
    }

    if (typography.fontSize) {
      Object.entries(typography.fontSize).forEach(([key, val]) => {
        root.style.setProperty(`--font-size-${key}`, val);
      });
    }

    if (typography.fontWeight) {
      Object.entries(typography.fontWeight).forEach(([key, val]) => {
        root.style.setProperty(`--font-weight-${key}`, val);
      });
    }

    if (typography.lineHeight) {
      Object.entries(typography.lineHeight).forEach(([key, val]) => {
        root.style.setProperty(`--line-height-${key}`, val);
      });
    }

    if (typography.letterSpacing) {
      Object.entries(typography.letterSpacing).forEach(([key, val]) => {
        root.style.setProperty(`--letter-spacing-${key}`, val);
      });
    }
  }

  if (tokens.custom) {
    Object.entries(tokens.custom).forEach(([key, val]) => {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--custom-${kebab}`, val);
    });
  }
}

// ─── Generate CSS Variables string (for non-JS environments) ──

export function generateThemeCSS(theme: MangoTheme): string {
  let css = ':root {\n';

  const addVars = (obj: Record<string, string | undefined>, prefix = '--') => {
    Object.entries(obj).forEach(([key, val]) => {
      if (val !== undefined) {
        const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        css += `  ${prefix}${varName}: ${val};\n`;
      }
    });
  };

  const lightColors = theme.light.colors as Record<string, string | undefined> | undefined;
  const lightSizes = theme.light.sizes as Record<string, string | undefined> | undefined;

  if (lightColors) addVars(lightColors);
  if (lightSizes) addVars(lightSizes, '--');

  if (theme.typography) {
    if (theme.typography.fontFamily) {
      Object.entries(theme.typography.fontFamily).forEach(([key, val]) => {
        css += `  --font-${key}: ${val};\n`;
      });
    }
    if (theme.typography.fontSize) {
      Object.entries(theme.typography.fontSize).forEach(([key, val]) => {
        css += `  --font-size-${key}: ${val};\n`;
      });
    }
  }

  css += '}\n';
  return css;
}
