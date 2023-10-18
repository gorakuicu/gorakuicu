import { addons } from '@storybook/manager-api';
import theme from './theme';

// const link = document.createElement('link');
// link.setAttribute('rel', 'shortcut icon');
// document.head.appendChild(link);

addons.setConfig({
  theme,
});
