/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    fontFamily:{
      'custom-inconsolata':'Inconsolata',
      'custom-zenDots':'Zen Dots'
    },
    extend: {
      colors:{
        'dark-color-primary':'#0F0920',
        'dark-color-secondary':'#221C3E',
        'light-color':'#f1f1f1',
        'lime-primary':'#16c586',
        'emerald-primary':'#03FCFC',
        'light-color-primary':'#f2f0ff',
        'light-color-secondary':'#b5b3bc'
      },
    },
  },
  plugins: [],
}

