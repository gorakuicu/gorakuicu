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
  50: '#FDF2FB',
  100: '#FAC7EE',
  200: '#F6A2E3',
  300: '#F37CD7',
  400: '#EF57CC',
  500: '#EC32C0',
  600: '#D214A6',
  700: '#9F0F7D',
  800: '#6B0A55',
  900: '#38052C',
};

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './.ladle/**/*.{js,jsx,ts,tsx}',
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
          DEFAULT: primary[600],
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
