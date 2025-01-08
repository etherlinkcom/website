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
        lightGreen: '#b6feda',
        darkGreen: '#59ad8c',
        midGreen: '#9bfecd',
        midBlack: '#1c1c1c',
        darkBlack: '#171717',
        white: '#ffffff',
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
        'neon-green': {
          50: '#ebfff5',
          100: '#c1ffe0',
          200: '#a3ffd1',
          300: '#7affbd',
          400: '#60ffb0',
          500: '#38ff9c',
          600: '#33e88e',
          700: '#28b56f',
          800: '#1f8c56',
          900: '#186b42'
        },
        'dark-green': {
          50: '#eaf5ef',
          100: '#bddece',
          200: '#9dcfb6',
          300: '#70b994',
          400: '#55ab80',
          500: '#2a9660',
          600: '#268957',
          700: '#1e6b44',
          800: '#175335',
          900: '#123f28'
        },
        purple: {
          50: '#efe6fd',
          100: '#ceb0fa',
          200: '#b78af7',
          300: '#9654f4',
          400: '#8133f1',
          500: '#6200ee',
          600: '#5900d9',
          700: '#4600a9',
          800: '#360083',
          900: '#290064'
        }
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
