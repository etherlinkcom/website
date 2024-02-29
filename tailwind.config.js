const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        'lightGreen': '#b6feda',
        'darkGreen': '#59ad8c',
        'midGreen': '#9bfecd',
      },
      screens: {
        'max-sm': { 'max': '640px' },
        'max-md': { 'max': '768px' },
        'max-lg': { 'max': '1024px' },
        'max-xl': { 'max': '1280px' },
        'max-2xl': { 'max': '1536px' },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
};
