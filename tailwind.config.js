/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-inicio': "url('/src/assets/fondo-inicio.jpg')",
      },
    },
    fontFamily: {
      rajdhani: ['Rajdhani', 'sans-serif'],
    },
    colors:{
      "marvel-vino": {
        100: "#340C0C",
        80: "#421010",
      },
      "marvel-red": {
        100: "#7A1F1E",
        90: "#82302F",
        70: "#8F504F",
      },
      "white-gray": "#DDDDDD",
      "bg-input-gray": "#C1C1C1",
      "gray-nav": "#424242",
      ...colors,
    },
  },
  plugins: [],
}
