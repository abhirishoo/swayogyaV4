/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#e0cfff',
          200: '#c19eff',
          300: '#a26eff',
          400: '#833eff',
          500: '#6400ff',
          600: '#5000cc',
          700: '#3c0099',
          800: '#280066',
          900: '#140033',
        },
        secondary: {
          100: '#ffd1f1',
          200: '#ffa3e3',
          300: '#ff74d5',
          400: '#ff46c7',
          500: '#ff17b9',
          600: '#cc1394',
          700: '#990e6f',
          800: '#66094a',
          900: '#330525',
        },
        accent: {
          100: '#cff5ff',
          200: '#9febff',
          300: '#70e0ff',
          400: '#40d6ff',
          500: '#11ccff',
          600: '#0da3cc',
          700: '#0a7a99',
          800: '#065266',
          900: '#032933',
        },
        dark: {
          100: '#d1d2d8',
          200: '#a3a5b1',
          300: '#76798a',
          400: '#484c63',
          500: '#1a1f3c',
          600: '#151930',
          700: '#101324',
          800: '#0a0c18',
          900: '#05060c',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};