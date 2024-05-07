/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      'dark-color-primary':'#0F0920',
      'dark-color-secondary':'#221C3E',
      'light-color':'#f1f1f1',
      'primary-button':'#16c586',
      'light-text-color-primary':'#f2f0ff',
      'light-text-color-secondary':'#b5b3bc'
    },
    extend: {},
  },
  plugins: [],
}

