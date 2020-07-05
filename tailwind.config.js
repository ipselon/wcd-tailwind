module.exports = {
  purge: [
    './build/**/*.html'
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        'Roboto',
      ],
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
};
