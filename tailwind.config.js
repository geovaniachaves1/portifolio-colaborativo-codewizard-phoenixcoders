/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      'dark-color-primary':'#0F0920',
      'dark-color-secondary':'#221C3E',
      'light-color':'#f1f1f1',
      'lime-primary':'#16c586',
      'light-color-primary':'#f2f0ff',
      'light-color-secondary':'#b5b3bc'
    },
    fontFamily:{
      'custom-inconsolata':'Inconsolata',
      'custom-zenDots':'Zen Dots'
    },
    extend: {},
  },
  plugins: [],
}

