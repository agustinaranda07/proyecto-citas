/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    screens:{
      "xs":"480px",
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
