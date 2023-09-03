import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export const blue = {
  50: '#e6f1fe',
  100: '#cce3fd',
  200: '#99c7fb',
  300: '#66aaf9',
  400: '#338ef7',
  500: '#006FEE',
  600: '#005bc4',
  700: '#004493',
  800: '#002e62',
  900: '#001731',
};

export const primary = {
  '50': '#faf5ff',
  '100': '#f2e9fe',
  '200': '#e8d7fd',
  '300': '#d6b7fb',
  '400': '#bd89f7',
  '500': '#9b4eef',
  '600': '#8429e0',
  '700': '#7a29c7',
  '800': '#6727a2',
  '900': '#542083',
};

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000',
        primary: {
          ...Object.fromEntries(
            Object.entries(primary).map(([key, value]) => [key, value]),
          ),
          DEFAULT: primary[500],
        },
        secondary: {
          ...Object.fromEntries(
            Object.entries(blue).map(([key, value]) => [key, value]),
          ),
          DEFAULT: blue[500],
        },
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: 'dark',
      defaultExtendTheme: 'dark',
      addCommonColors: true,
    }),
  ],
} satisfies Config;
