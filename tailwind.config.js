/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    colors:{
      "customwhite":'#F5F5F5',
      "customred":'#F05454',
      "customblue":'#30475E',
      "customblack":'#121212',
    },
    fontFamily:{
      merriwheater:['Merriweather', 'serif'],
      poiret:['Poiret One', 'cursive'],
      staat:['Staatliches', 'cursive']
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('flowbite/plugin'),
  ],
};
