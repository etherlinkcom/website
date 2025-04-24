const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const flowbite = require('flowbite-react/tailwind')

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content()
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        darkGreen: {
          50: '#e5f2ef',
          100: '#bdd8ea',
          200: '#9dc3d5',
          300: '#70b3a3',
          400: '#5a8d81',
          500: '#437863',
          600: '#226951',
          700: '#165a44',
          800: '#0b4035',
          900: '#123f28'
        },
        neonGreen: {
          50: '#eaffff',
          100: '#cffef0',
          200: '#A3FFD1',
          300: '#77ffdb',
          400: '#57ffbd',
          500: '#38ff9c',
          600: '#23e89e',
          700: '#1fd48f',
          800: '#14a772',
          900: '#0f8261'
        },
        grey: {
          50: '#e9e9e9',
          100: '#bcbcbc',
          200: '#9b9b9b',
          300: '#6e6e6e',
          400: '#515151',
          500: '#262626',
          600: '#232323',
          700: '#1b1b1b',
          800: '#151515',
          900: '#101010'
        },
        white: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#e8e8e8',
          700: '#b5b5b5',
          800: '#8c8c8c',
          900: '#6b6b6b'
        },
        black: {
          50: '#e6e6e6',
          100: '#b0b0b0',
          200: '#8a8a8a',
          300: '#545454',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        newGreen: '#38ff9c',
        lightGreen: '#b6feda',
        lightBlack: '#262626',
        midBlack: '#1c1c1c',
        darkBlack: '#171717'
      },
      screens: {
        'max-sm': { max: '640px' },
        'max-md': { max: '768px' },
        'max-lg': { max: '1024px' },
        'max-xl': { max: '1280px' },
        'max-2xl': { max: '1536px' }
      },
      keyframes: {
        circling: {
          '0%, 100%': {
            clipPath: 'inset(0 0 95% 0 round 24px)',
            opacity: '1'
          },
          '75%': {
            clipPath: 'inset(0 95% 0 0 round 24px)'
          },
          '50%': {
            clipPath: 'inset(95% 0 0 0 round 24px)'
          },
          '25%': {
            clipPath: 'inset(0 0 0 95% round 24px)'
          }
        }
      },
      animation: {
        circling: 'circling 2s linear'
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans]
    }
  },
  plugins: [flowbite.plugin()]
}
