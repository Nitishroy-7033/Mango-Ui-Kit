import { forwardRef } from 'react';
import { Box } from '../layout/box';
import type { SpecializedBoxProps } from './box.types';
import { cn } from '../../utils/cn';
import './box.css';

/**
 * Enhanced Box component with pre-defined variants for Dashboard, Shadows, and Borders.
 */
export const MangoBox = forwardRef<HTMLElement, SpecializedBoxProps>(
    ({ variant = 'default', intensity = 2, className, style, children, ...props }, ref) => {

        const getVariantStyles = (): Partial<SpecializedBoxProps> => {
            switch (variant) {
                case 'elevated': {
                    const shadowSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
                    return {
                        shadow: shadowSizes[intensity - 1],
                        bg: 'var(--primaryContainercolor, white)',
                        radius: '16px',
                    };
                }
                case 'dashed':
                    return {
                        border: `${intensity}px dashed var(--borderColor, #e5e7eb)`,
                        bg: 'transparent',
                        radius: '12px',
                    };
                case 'outline':
                    return {
                        border: `${intensity}px solid var(--borderColor, #e5e7eb)`,
                        bg: 'var(--primaryContainercolor, white)',
                        radius: '12px',
                    };
                case 'glass':
                    return {
                        bg: 'rgba(255, 255, 255, 0.4)',
                        blur: intensity * 4,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        radius: '20px',
                        shadow: 'sm',
                    };
                case 'neon': {
                    const neonColors = ['#ffc107', '#fa8029', '#10b981', '#3b82f6', '#ef4444'];
                    const neonColor = neonColors[intensity - 1];
                    return {
                        bg: '#1a1a1a',
                        border: `1px solid ${neonColor}44`,
                        shadow: `0 0 ${intensity * 10}px ${neonColor}33`,
                        radius: '12px',
                        color: neonColor,
                    };
                }
                case 'gradient':
                    return {
                        gradient: 'linear-gradient(135deg, var(--primaryColor, #fa8029) 0%, #ffb347 100%)',
                        color: 'white',
                        radius: '16px',
                        shadow: 'md',
                    };
                case 'flat':
                    return {
                        bg: 'var(--secondaryContainercolor, #f8fafc)',
                        radius: '8px',
                        border: 'none',
                        shadow: 'none',
                    };
                default:
                    return {};
            }
        };

        const variantProps = getVariantStyles();

        return (
            <Box
                ref={ref}
                className={cn(
                    'mango-specialized-box',
                    `variant-${variant}`,
                    className
                )}
                {...variantProps}
                {...props}
            >
                {children}
            </Box>
        );
    }
);

MangoBox.displayName = 'MangoBox';
