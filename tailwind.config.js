module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: "#87D039",
      },
      height: {
        500: '50vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'dracula', // first one will be the default theme
      'dark',
      'forest',
      'synthwave'
    ],
  },
}
