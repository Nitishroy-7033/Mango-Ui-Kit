import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mango-400 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary: 'bg-mango-400 text-neutral-950 hover:bg-mango-500 shadow-sm',
                secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
                outline: 'border border-neutral-300 bg-transparent hover:bg-neutral-50',
                ghost: 'hover:bg-neutral-100 text-neutral-700',
                danger: 'bg-red-500 text-white hover:bg-red-600',
            },
            size: {
                sm: 'h-8 px-3 text-xs',
                md: 'h-10 px-4 text-sm',
                lg: 'h-12 px-6 text-base',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);
