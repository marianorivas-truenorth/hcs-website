module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#333333',
        gray: {
          200: '#FAFAFA',
          300: '#F6F5F0',
          400: '#DDDDDD',
          500: '#999999',
          700: '#555555',
          800: '#333333',
          900: '#111111',
        },
        primary: {
          200: '#DFF2E9',
          300: '#BFE5D2',
          500: '#5EBD8F',
          600: '#438F72',
          900: '#11393B',
        },
        secondary: {
          200: '#FDF2EE',
          500: '#E87F51',
          600: '#D17249',
        },
        accent: {
          200: '#F8F2D0',
          300: '#EFDF8A',
          400: '#E8D25B',
          500: '#DEBE15',
          900: '#6F5F0B',
        },
      },
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [
    //require('@tailwindcss/forms')
  ],
};
