import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
    'inline-flex items-center gap-1.5 font-bold transition-all duration-200 leading-none whitespace-nowrap',
    {
        variants: {
            variant: {
                primary: 'bg-mango-400/10 text-mango-400 border border-mango-400/20',
                success: 'bg-green-500/10 text-green-500 border border-green-500/20',
                error: 'bg-red-500/10 text-red-500 border border-red-500/20',
                warning: 'bg-amber-500/10 text-amber-500 border border-amber-500/20',
                info: 'bg-blue-500/10 text-blue-500 border border-blue-500/20',
                neutral: 'bg-white/5 text-neutral-400 border border-neutral-700',
            },
            size: {
                sm: 'px-1.5 py-0.5 text-[0.7rem] rounded-md',
                md: 'px-2.5 py-1 text-[0.75rem] rounded-md',
                lg: 'px-3.5 py-1.5 text-[0.85rem] rounded-md',
            },
            pill: {
                true: 'rounded-full',
                false: '',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            pill: false,
        },
    }
);
