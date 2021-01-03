module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': "#FF3635",
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/design-tools.jpg')",
      })
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],

}
