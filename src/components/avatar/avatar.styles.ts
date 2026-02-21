import { cva } from 'class-variance-authority';

export const avatarStyles = cva(
    'avatar-root',
    {
        variants: {
            size: {
                xs: 'avatar-xs',
                sm: 'avatar-sm',
                md: 'avatar-md',
                lg: 'avatar-lg',
                xl: 'avatar-xl',
                '2xl': 'avatar-2xl',
            },
            shape: {
                circle: 'avatar-circle',
                square: 'avatar-square',
                rounded: 'avatar-rounded',
            },
            variant: {
                solid: '',
                bordered: 'avatar-variant-bordered',
                ghost: 'avatar-variant-ghost',
            }
        },
        defaultVariants: {
            size: 'md',
            shape: 'circle',
            variant: 'solid',
        },
    }
);
