import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.css';

// Apply default light theme so CSS variables resolve in Storybook
document.documentElement.setAttribute('data-theme', 'light');

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#f2f7fa' },
                { name: 'dark', value: '#1f2124' },
            ],
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || 'light';
            document.documentElement.setAttribute('data-theme', theme);
            return Story();
        },
    ],
};

export default preview;
