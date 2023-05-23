const fs = require('fs');
const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

const customColors = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './src/styles/theme/colors.json'), 'utf8'),
);
const screens = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './src/styles/theme/screens.json'), 'utf8'),
);

const colors = {
  ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
  ...customColors,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens,
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Lekton', ...defaultTheme.fontFamily.serif],
      mono: ['Fira Sans', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors,
      fontFamily: {
        title: ['Lekton', ...defaultTheme.fontFamily.sans],
        text: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '-1': '-1',
        1: '1',
      },
      margin: { full: '100%' },
      borderWidth: { 1: '1px' },
    },
  },
  daisyui: {
    darkTheme: 'dark',
    themes: [
      {
        extend: {
          colors,
          '--rounded-box': '2rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '1rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '3rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '1rem', // border radius of tabs,
          fontFamily: {
            title: ['Lekton', ...defaultTheme.fontFamily.sans],
            text: ['Inter', ...defaultTheme.fontFamily.sans],
          },
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
