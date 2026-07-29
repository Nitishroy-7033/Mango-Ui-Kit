import type React from 'react';

export type SxValue =
  | React.CSSProperties
  | ((theme: Record<string, unknown>) => React.CSSProperties)
  | undefined;

export type SxProp = {
  sx?: SxValue;
};

export function resolveSx(
  sx: SxValue,
  theme?: Record<string, unknown>,
): React.CSSProperties | undefined {
  if (!sx) return undefined;
  if (typeof sx === 'function') return sx(theme || {});
  return sx;
}

export function mergeSx(
  externalSx: SxValue,
  internalSx: React.CSSProperties,
  theme?: Record<string, unknown>,
): React.CSSProperties {
  const resolved = resolveSx(externalSx, theme);
  return resolved ? { ...internalSx, ...resolved } : internalSx;
}

/**
 * Creates a styled component with pre-built sx support.
 * Usage: const StyledButton = styled(Button)({ margin: '10px' })
 */
export function styled<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
): (style: React.CSSProperties | ((props: P) => React.CSSProperties)) => React.FC<P & SxProp> {
  return (styleOrFn) => {
    const StyledComponent: React.FC<P & SxProp> = (props) => {
      const baseStyle = typeof styleOrFn === 'function' ? styleOrFn(props) : styleOrFn;
      const mergedSx = props.sx
        ? { ...baseStyle, ...resolveSx(props.sx) }
        : baseStyle;

      return (
        <Component
          {...props}
          style={{ ...mergedSx, ...(props.style as React.CSSProperties || {}) } as React.CSSProperties}
        />
      );
    };
    StyledComponent.displayName = `Styled(${Component.displayName || Component.name})`;
    return StyledComponent;
  };
}
