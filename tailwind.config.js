const colors = require("./src/styles/colors/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      //font-family
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans-serif']
      },

      //colors
      colors: colors
    },
  },
  plugins: [],
}
