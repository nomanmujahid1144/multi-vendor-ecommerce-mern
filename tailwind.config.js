/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
          'hero-img': "url('~/src/assets/cta.jpg')",
      }),
      screens: {
        'sm': '640px',
        'md': '730px',
        'lg': '1100px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        'xl': '0 8px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'primaryColor': 'rgb(255, 121, 24)',
        'primaryColorHover': '#5CDB95',
        'primaryColorLight': '#8EE4AF',
        'secondaryColor': '#65A6C8',

        'bgOrangeColorLight': 'rgba(255, 121, 24, 0.3)',
        'bgOrangeColor': 'rgb(255, 121, 24)',
        'bgOrangeColorHover': 'rgb(163, 70, 10)',


        'primaryTextColor': 'rgb(255, 255, 255)',
        'textColorBlack': '#21201e',
        'textColorWhite': '#FFFFFF',

        
        'loaderBg': 'rgba(0 , 0, 0 , 0.6)'
      },
    },
    fontFamily: {
      'uberMove' : ['UBERMOVE' , 'sans-sarif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

