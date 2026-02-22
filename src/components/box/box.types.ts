import type { BoxProps } from '../layout/layout.types';

export type BoxVariant =
    | 'default'
    | 'dashed'
    | 'dotted'
    | 'glass'
    | 'neon'
    | 'elevated'
    | 'flat'
    | 'outline'
    | 'gradient';

export interface SpecializedBoxProps extends BoxProps {
    /** Preset variant for the box */
    variant?: BoxVariant;
    /** Intensity of the shadow/effect (1-5) */
    intensity?: 1 | 2 | 3 | 4 | 5;
}
