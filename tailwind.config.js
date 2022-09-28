/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  plugins: [
    require("tailwindcss-animate"),
    require('flowbite/plugin')

  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        purplePrimary: '#635FC7',
        purpleLight: 'rgba(171,169,221,0.16)',
        hoverPurple: '#A8A4FF',
        darkBluePrimary: 'hsl(228, 39%, 23%)',
        mediumGrey: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        varyLightGray: 'hsl(0, 0%, 98%)'
      }

    },
  },

}
