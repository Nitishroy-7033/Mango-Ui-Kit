import { cva } from 'class-variance-authority';

/**
 * @deprecated Use the Button component directly with variant/size/rounded props.
 * Styles are now applied via CSS classes internally.
 */
export const buttonStyles = cva(
    'mango-btn',
    {
        variants: {
            variant: {
                primary: 'mango-btn-primary',
                secondary: 'mango-btn-secondary',
                outline: 'mango-btn-outline',
                ghost: 'mango-btn-ghost',
                danger: 'mango-btn-danger',
            },
            size: {
                sm: 'mango-btn-sm',
                md: 'mango-btn-md',
                lg: 'mango-btn-lg',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);
