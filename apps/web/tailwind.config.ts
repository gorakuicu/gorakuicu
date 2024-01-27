import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

export const secondary = {
  '50': '#fef1f9',
  '100': '#ffe4f4',
  '200': '#ffcaec',
  '300': '#ff9eda',
  '400': '#ff62bf',
  '500': '#ff34a4',
  '600': '#f11181',
  '700': '#d70467',
  '800': '#ad0753',
  '900': '#900b47',
};

export const primary = {
  '50': '#faf4ff',
  '100': '#f4e5ff',
  '200': '#ebcfff',
  '300': '#dbaaff',
  '400': '#c574ff',
  '500': '#b03fff',
  '600': '#9d1aff',
  '700': '#8a0be9',
  '800': '#730fba',
  '900': '#5f0e95',
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
          DEFAULT: primary[500],
        },
        secondary: {
          ...Object.fromEntries(
            Object.entries(secondary).map(([key, value]) => [key, value]),
          ),
          DEFAULT: secondary[500],
        },
      },
    },
    fontFamily: {
      mono: ['monospace', ...defaultTheme.fontFamily.mono],
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['OpticianSans', 'Inter', ...defaultTheme.fontFamily.serif],
    },
  },
} satisfies Config;
