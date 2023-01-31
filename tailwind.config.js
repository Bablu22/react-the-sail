/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['proxima-nova', 'sans-serif'],
        primary: ['Staatliches', 'cursive'],
        secondary: ['Segoe UI', 'sans-serif']
      },
      colors: {
        header1: "#0e5ca2",
        header2: "#6ec9d1",
        header3: "#0099d2",
        footer1: "#0e5ca2",
        footer2: "#0a0d30",
        sail: "#01a985",
      }
    },
  },
  plugins: [],
}

