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
        darkBluePrimary: '#2B2C37',
        mediumGrey: 'hsl(227, 12%, 61%)',
        veryDarkBlue: '#20212C',
        varyLightGray: 'hsl(0, 0%, 98%)'
      }

    },
  },

}
