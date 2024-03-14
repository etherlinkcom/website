const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
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
        white: '#ffffff'
      },
      screens: {
        'max-sm': { max: '640px' },
        'max-md': { max: '768px' },
        'max-lg': { max: '1024px' },
        'max-xl': { max: '1280px' },
        'max-2xl': { max: '1536px' }
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require('flowbite/plugin')]
}
