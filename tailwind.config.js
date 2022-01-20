module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        QuickSand:["Quicksand", "sans-serif"],
        SourceSans:["Source Sans Pro", "sans-serif"],
        Mont:["'Montserrat', 'sans-serif'"],
        Raleway:["'Raleway', 'sans-serif'"],
      },
      backgroundImage:{
        'servicebg':"url('./images/servicebg.jpeg')",
        'servicebg1':"url('./images/servicebg1.jpg')",
        'contactbg':"url('./images/contactbg.jpg')"
      },
      screens: {
        'lg1':'932px'
      },
      transitionProperty:{
        'left':'left'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
