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
        newGreen: '#38ff9c',
        lightGreen: '#b6feda',
        darkGreen: '#59ad8c',
        midGreen: '#9bfecd',
        grey: '#414349',
        lightBlack: '#262626',
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
