import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { BadgeProps } from './badge.types';
import './badge.css';

/**
 * Badge component for tags, counts, and status indicators.
 * Can be used as a standalone tag or an anchored overlay on children.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    (
        {
            children,
            badgeContent,
            variant = 'primary',
            size = 'md',
            dot = false,
            pill = true, // Default to true for overlap style
            maxCount = 99,
            showZero = false,
            position = 'top-right',
            offset,
            pulse = false,
            showDot = false,
            dotColor,
            icon: Icon,
            className,
            style,
            ...props
        },
        ref
    ) => {
        // Logic for content formatting
        let displayContent = badgeContent;
        if (typeof badgeContent === 'number') {
            if (badgeContent > maxCount) {
                displayContent = `${maxCount}+`;
            } else if (badgeContent === 0 && !showZero) {
                return <>{children}</>;
            }
        }

        if (dot) {
            displayContent = null;
        }

        const badgeElement = (
            <span
                ref={!children ? ref : undefined}
                className={cn(
                    'mango-badge',
                    `badge-${variant}`,
                    `badge-${size}`,
                    pill && 'badge-pill',
                    dot && 'badge-dot',
                    showDot && 'has-inner-dot',
                    children && 'badge-anchored',
                    children && `pos-${position}`,
                    pulse && 'is-pulsing',
                    className
                )}
                style={{
                    ...(offset && {
                        transform: `translate(${offset[0]}px, ${offset[1]}px)`,
                    }),
                    ...style,
                }}
                {...props}
            >
                {showDot && (
                    <span
                        className="badge-inner-dot"
                        style={{ backgroundColor: dotColor }}
                    />
                )}
                {Icon && <Icon className="badge-icon" />}
                {displayContent}
            </span>
        );

        if (!children) {
            return badgeElement;
        }

        return (
            <div className="mango-badge-container">
                {children}
                {badgeElement}
            </div>
        );
    }
);

Badge.displayName = 'Badge';
export default Badge;
