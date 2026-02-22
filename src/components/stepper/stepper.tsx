import React from 'react';
import { cn } from '../../utils/cn';
import type { StepperProps, StepItem, StepStatus } from './stepper.types';
import './stepper.css';

const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const XIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const getStatusForStep = (index: number, activeStep: number, item: StepItem): StepStatus => {
    if (item.status) return item.status;
    if (index < activeStep) return 'completed';
    if (index === activeStep) return 'active';
    return 'upcoming';
};

const StepIndicator: React.FC<{
    index: number;
    status: StepStatus;
    variant: StepperProps['variant'];
    size: StepperProps['size'];
    icon?: React.ReactNode;
    color?: string;
}> = ({ index, status, variant, size, icon, color }) => {
    const sizeMap = { sm: 28, md: 36, lg: 44 };
    const px = sizeMap[size ?? 'md'];
    const fontSize = size === 'sm' ? '11px' : size === 'lg' ? '15px' : '13px';

    const activeColor = color ?? 'var(--primaryColor, #fa8029)';
    const completedColor = color ?? 'var(--primaryColor, #fa8029)';

    const bgMap: Record<StepStatus, string> = {
        completed: completedColor,
        active: activeColor,
        error: 'var(--errorColor, #ef4444)',
        upcoming: 'var(--secondaryContainercolor, #f3f4f6)',
    };

    const colorMap: Record<StepStatus, string> = {
        completed: '#fff',
        active: '#fff',
        error: '#fff',
        upcoming: 'var(--labelSecondaryColor, #9ca3af)',
    };

    const borderMap: Record<StepStatus, string> = {
        completed: 'none',
        active: `2px solid ${activeColor}`,
        error: 'none',
        upcoming: '2px solid var(--borderColor, #e5e7eb)',
    };

    if (variant === 'dot') {
        const dotSize = size === 'sm' ? 10 : size === 'lg' ? 18 : 14;
        const dotColors: Record<StepStatus, string> = {
            completed: completedColor,
            active: activeColor,
            error: 'var(--errorColor, #ef4444)',
            upcoming: 'var(--borderColor, #e5e7eb)',
        };
        return (
            <div
                className="mango-step-dot"
                style={{
                    width: dotSize,
                    height: dotSize,
                    borderRadius: '50%',
                    backgroundColor: dotColors[status],
                    boxShadow: status === 'active' ? `0 0 0 4px ${activeColor}22` : undefined,
                    flexShrink: 0,
                }}
            />
        );
    }

    if (variant === 'pill') {
        return (
            <div
                className="mango-step-pill"
                style={{
                    height: size === 'sm' ? 6 : size === 'lg' ? 10 : 8,
                    width: size === 'sm' ? 28 : size === 'lg' ? 44 : 36,
                    borderRadius: 9999,
                    backgroundColor: bgMap[status],
                    flexShrink: 0,
                }}
            />
        );
    }

    const content = () => {
        if (status === 'completed') return <CheckIcon />;
        if (status === 'error') return <XIcon />;
        if (variant === 'icon' && icon) return icon;
        return <span style={{ fontSize, fontWeight: 600, lineHeight: 1 }}>{index + 1}</span>;
    };

    return (
        <div
            className={cn('mango-step-indicator', `is-${status}`)}
            style={{
                width: px,
                height: px,
                borderRadius: '50%',
                backgroundColor: bgMap[status],
                border: borderMap[status],
                color: colorMap[status],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.25s ease',
            }}
        >
            {content()}
        </div>
    );
};

export const Stepper: React.FC<StepperProps> = ({
    steps,
    activeStep = 0,
    variant = 'numbered',
    orientation = 'horizontal',
    size = 'md',
    onStepClick,
    color,
    className,
    style,
}) => {
    const isVertical = orientation === 'vertical';
    const gapMap = { sm: 8, md: 12, lg: 16 };
    const labelSizeMap = { sm: '12px', md: '14px', lg: '16px' };
    const descSizeMap = { sm: '11px', md: '12px', lg: '13px' };

    return (
        <div
            className={cn(
                'mango-stepper',
                `orientation-${orientation}`,
                `variant-${variant}`,
                `size-${size}`,
                className
            )}
            style={{
                display: 'flex',
                flexDirection: isVertical ? 'column' : 'row',
                alignItems: isVertical ? 'flex-start' : 'flex-start',
                gap: isVertical ? gapMap[size] : 0,
                width: '100%',
                ...style,
            }}
        >
            {steps.map((step, i) => {
                const status = getStatusForStep(i, activeStep, step);
                const isLast = i === steps.length - 1;
                const isClickable = !!onStepClick;

                const connectorColor =
                    status === 'completed'
                        ? (color ?? 'var(--primaryColor, #fa8029)')
                        : 'var(--borderColor, #e5e7eb)';

                return (
                    <div
                        key={i}
                        className={cn('mango-step', `step-${status}`, isClickable && 'is-clickable')}
                        style={{
                            display: 'flex',
                            flexDirection: isVertical ? 'row' : 'column',
                            alignItems: isVertical ? 'flex-start' : 'center',
                            flex: isVertical ? undefined : isLast ? undefined : 1,
                            cursor: isClickable ? 'pointer' : 'default',
                            gap: isVertical ? 12 : 0,
                        }}
                        onClick={() => isClickable && onStepClick!(i)}
                    >
                        {/* Indicator + connector (horizontal top row) */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: isVertical ? 'column' : 'row',
                                alignItems: 'center',
                                flex: isVertical ? undefined : isLast ? undefined : 1,
                                width: isVertical ? undefined : '100%',
                            }}
                        >
                            <StepIndicator
                                index={i}
                                status={status}
                                variant={variant}
                                size={size}
                                icon={step.icon}
                                color={color}
                            />

                            {/* Connector line */}
                            {!isLast && (
                                <div
                                    className="mango-step-connector"
                                    style={{
                                        flex: isVertical ? undefined : 1,
                                        height: isVertical ? (size === 'sm' ? 20 : size === 'lg' ? 32 : 24) : 2,
                                        width: isVertical ? 2 : undefined,
                                        backgroundColor: connectorColor,
                                        marginLeft: isVertical ? (size === 'sm' ? 13 : size === 'lg' ? 21 : 17) : 0,
                                        marginTop: isVertical ? 4 : 0,
                                        transition: 'background-color 0.25s ease',
                                        flexShrink: 0,
                                    }}
                                />
                            )}
                        </div>

                        {/* Label block */}
                        {variant !== 'pill' && (
                            <div
                                style={{
                                    textAlign: isVertical ? 'left' : 'center',
                                    marginTop: isVertical ? 0 : 8,
                                    paddingBottom: isVertical && !isLast ? 8 : 0,
                                    maxWidth: isVertical ? undefined : 120,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: labelSizeMap[size],
                                        fontWeight: status === 'active' ? 600 : 500,
                                        color: status === 'upcoming'
                                            ? 'var(--labelSecondaryColor, #9ca3af)'
                                            : status === 'error'
                                                ? 'var(--errorColor, #ef4444)'
                                                : 'var(--textColor, #111827)',
                                        transition: 'color 0.2s ease',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {step.title}
                                    {step.optional && (
                                        <span style={{ fontSize: '11px', color: 'var(--labelSecondaryColor, #9ca3af)', marginLeft: 4 }}>
                                            (optional)
                                        </span>
                                    )}
                                </div>
                                {step.description && (
                                    <div
                                        style={{
                                            fontSize: descSizeMap[size],
                                            color: 'var(--labelSecondaryColor, #9ca3af)',
                                            marginTop: 2,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {step.description}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

Stepper.displayName = 'Stepper';
