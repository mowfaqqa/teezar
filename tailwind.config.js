module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        gold : {
          100 : '#ffd333',
          200 : '#ffd700'
        }
      },
      fontFamily : {
        dancing : ['Dancing Script', 'cursive'],
        roboto : ['Roboto', 'sans-serif']
      }, 
      // backgroundImage : {
      //   'showcase-img': "url('./asset/backgroundImg.jpg')"
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
