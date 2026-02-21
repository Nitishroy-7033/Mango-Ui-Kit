import { cva } from 'class-variance-authority';

export const avatarStyles = cva(
    'relative flex shrink-0 overflow-hidden rounded-full border border-neutral-700 bg-neutral-800',
    {
        variants: {
            size: {
                xs: 'h-6 w-6 text-[0.6rem]',
                sm: 'h-8 w-8 text-xs',
                md: 'h-10 w-10 text-sm',
                lg: 'h-12 w-12 text-base',
                xl: 'h-16 w-16 text-lg',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);
