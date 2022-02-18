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
        'lg1':'932px',
        "402":'402px',
      },
      transitionProperty:{
        'left':'left',
        'right':'right'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollBehavior: ['motion-safe', 'motion-reduce', 'responsive']
  }
}
