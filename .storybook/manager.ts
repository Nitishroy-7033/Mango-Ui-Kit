import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
    base: 'light',
    brandTitle: 'Mango UI Kit',
    brandUrl: 'https://github.com/Nitishroy-7033/Mango-Ui-Kit',
    brandImage: '/mango-logo.png',
    brandTarget: '_self',

    // Colors
    colorPrimary: '#ffc107',
    colorSecondary: '#fa8029',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#eeeeee',
    appBorderRadius: 10,

    // Typography
    fontBase: '"Inter", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#1f2937',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#4b5563',
    barSelectedColor: '#fa8029',
    barBg: '#ffffff',
});

addons.setConfig({
    theme,
});
