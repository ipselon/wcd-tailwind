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
  variants: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  plugins: [],
};
