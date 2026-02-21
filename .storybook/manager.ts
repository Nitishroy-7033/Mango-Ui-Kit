import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
    base: 'light',
    brandTitle: 'Mango UI Kit',
    brandUrl: 'https://github.com/mango-ui-kit',
    brandImage: 'https://placehold.co/150x50/ffc107/000000?text=Mango+UI',
    brandTarget: '_self',
});

addons.setConfig({
    theme,
});
