import type React from 'react';

export const shadowPresets: Record<string, string> = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
};

export function getShadow(shadow?: string): string | undefined {
  if (!shadow) return undefined;
  return shadowPresets[shadow] || shadow;
}

export function getFlexAlign(a?: string): string | undefined {
  if (!a) return undefined;
  if (a === 'start' || a === 'end') return `flex-${a}`;
  return a;
}

export function getFlexJustify(j?: string): string | undefined {
  if (!j) return undefined;
  if (j === 'start' || j === 'end') return `flex-${j}`;
  if (j === 'between') return 'space-between';
  if (j === 'around') return 'space-around';
  if (j === 'evenly') return 'space-evenly';
  return j;
}

type SpacingValue = number | string;

export interface SpacingProps {
  p?: SpacingValue;
  px?: SpacingValue;
  py?: SpacingValue;
  pt?: SpacingValue;
  pr?: SpacingValue;
  pb?: SpacingValue;
  pl?: SpacingValue;
  m?: SpacingValue;
  mx?: SpacingValue;
  my?: SpacingValue;
  mt?: SpacingValue;
  mr?: SpacingValue;
  mb?: SpacingValue;
  ml?: SpacingValue;
}

export function spacingToStyle(props: SpacingProps): React.CSSProperties {
  return {
    padding: props.p,
    paddingLeft: props.pl ?? props.px,
    paddingRight: props.pr ?? props.px,
    paddingTop: props.pt ?? props.py,
    paddingBottom: props.pb ?? props.py,
    margin: props.m,
    marginLeft: props.ml ?? props.mx,
    marginRight: props.mr ?? props.mx,
    marginTop: props.mt ?? props.my,
    marginBottom: props.mb ?? props.my,
  } as React.CSSProperties;
}
