module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myBg': '#3a7ad6',
        'loaderBg' :'rgb(var(--overlay-loader))'
      },
    },
    screens: {
      xl: { max: "1579px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1123px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "867px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      'sans': ['Roboto', 'Arial', 'sans-serif'],
    },

  },
  plugins: [],
}
