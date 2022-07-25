/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        game: 'url(/src/public/assets/background.jpg)'
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
      }
    },
  },
  plugins: [],
}
