import { addons } from '@storybook/manager-api';
import favicon from '../public/other/storybook.png';
import theme from './theme';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme,
});
