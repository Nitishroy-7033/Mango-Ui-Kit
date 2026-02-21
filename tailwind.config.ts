import type { Config } from 'tailwindcss';
import { colors } from './src/theme/colors';

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                ...colors,
                // Theme-aware CSS variable colors
                background: 'var(--background)',
                primary: 'var(--primaryColor)',
                'primary-light': 'var(--lightPrimaryColor)',
                secondary: 'var(--secondaryColor)',
                'container-primary': 'var(--primaryContainercolor)',
                'container-secondary': 'var(--secondaryContainercolor)',
                text: 'var(--textColor)',
                'text-secondary': 'var(--textSecondaryColor)',
                label: 'var(--labelColor)',
                'label-secondary': 'var(--labelSecondaryColor)',
                border: 'var(--borderColor)',
                accent: 'var(--accent)',
                'accent-foreground': 'var(--accent-foreground)',
            },
            fontFamily: {
                sans: ['General Sans', 'Inter', 'system-ui', 'sans-serif'],
            },
            transitionDuration: {
                theme: 'var(--transition-speed)',
            },
        },
    },
    plugins: [],
};

export default config;
