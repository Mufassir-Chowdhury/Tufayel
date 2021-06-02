module.exports = {
  mode: 'jit',

  purge: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ["Raleway", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}