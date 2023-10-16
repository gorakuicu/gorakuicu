import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

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
  '50': '#f2e9fe',
  '100': '#e8d7fd',
  '200': '#d6b7fb',
  '300': '#bd89f7',
  '400': '#b46bf4',
  '500': '#9b4eef',
  '600': '#8429e0',
  '700': '#7a29c7',
  '800': '#6727a2',
  '900': '#542083',
};

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      defaultExtendTheme: 'dark',
      defaultTheme: 'dark',
    }),
    typography,
  ],
  theme: {
    extend: {
      colors: {
        background: '#000',
        primary: {
          ...Object.fromEntries(
            Object.entries(primary).map(([key, value]) => [key, value]),
          ),
          DEFAULT: primary[400],
        },
        secondary: {
          ...Object.fromEntries(
            Object.entries(blue).map(([key, value]) => [key, value]),
          ),
          DEFAULT: blue[500],
        },
      },
    },
    fontFamily: {
      mono: ['monospace', ...defaultTheme.fontFamily.mono],
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['OpticianSans', ...defaultTheme.fontFamily.serif],
    },
  },
} satisfies Config;
