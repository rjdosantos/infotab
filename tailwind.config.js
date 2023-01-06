/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ['Lexend, sans-serif'],
      },
      colors: {
        'primarycolor': '#15198E',
        'secondaryColor': '#FFFFEE',
        'terciaryColor': '#311D99',
        'quartenaryColor': '#252525'
      }
    },
  },
  plugins: [],
}
