export type StepStatus = 'completed' | 'active' | 'error' | 'upcoming';
export type StepperVariant = 'numbered' | 'icon' | 'dot' | 'pill';
export type StepperOrientation = 'horizontal' | 'vertical';
export type StepperSize = 'sm' | 'md' | 'lg';
export interface StepItem {
    /** Step title */
    title: string;
    /** Optional description */
    description?: string;
    /** Optional icon (overrides number/dot) */
    icon?: React.ReactNode;
    /** Override status for this step */
    status?: StepStatus;
    /** Whether this step is optional */
    optional?: boolean;
}
export interface StepperProps {
    /** Array of step definitions */
    steps: StepItem[];
    /** Zero-indexed current active step */
    activeStep?: number;
    /** Visual variant */
    variant?: StepperVariant;
    /** Layout direction */
    orientation?: StepperOrientation;
    /** Size  */
    size?: StepperSize;
    /** Make steps clickable */
    onStepClick?: (index: number) => void;
    /** Custom active/completed color */
    color?: string;
    /** Additional CSS class */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
