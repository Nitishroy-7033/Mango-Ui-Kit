import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
}

export const Card = ({ className, hoverable, children, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                'rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 text-white shadow-sm backdrop-blur-sm',
                hoverable && 'transition-all hover:border-mango-400/50 hover:bg-neutral-800/50 cursor-pointer',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('mb-4 flex flex-col space-y-1.5', className)} {...props}>
        {children}
    </div>
);

export const CardTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props}>
        {children}
    </h3>
);

export const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('pt-0', className)} {...props}>
        {children}
    </div>
);
