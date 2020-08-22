module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'heads': ['Open Sans', 'sans-serif'],
      'pages': ['Roboto', 'sans-serif'],
      'sango': ['sango', 'sans-serif'],
    },
    extend: {
      colors: {
        'main-orange': '#ffb300',
        'main-purple': '#6200ff',
        'off-white':  '#f5f5f5',
        'richblack': '#020402',
        'feldgrau': '#4c6663',
        'deep-purple': '#2d1e2f',
        'ryb': '#f72c25',
      }
    },
  },
  variants: {
    fontSize: ['responsive', 'hover'],
    transitionDuration: ['responsive', 'hover']
  },
  plugins: [],
}
