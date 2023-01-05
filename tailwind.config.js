/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
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
  plugins: [
    require("flowbite/plugin")
  ],
}
