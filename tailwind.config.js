/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#00FFC2',
        'brand-yellow': '#CDFF64',
      },
      fontFamily: {
        'heading': ['Roboto', 'sans-serif'], // Temporary substitute for Robbert PRO
        'body': ['Inter', 'sans-serif'], // Temporary substitute for ES Klarheit
      },
    },
  },
  plugins: [],
}