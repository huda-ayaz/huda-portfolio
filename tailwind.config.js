/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#f5f0e1', // lightest brown
          200: '#d9c1a2',
          300: '#c0a27a',
          400: '#9e7a51',
          500: '#7d5c3c', // main brown color
          600: '#5e4730',
          700: '#4b3923',
          800: '#3c2a19', // darkest brown
        }
      }
    }
  },
  plugins: [],
}
