 /** @type {import('tailwindcss').Config} */
 export default {
  darkMode: 'class',
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'SpaceMono': 'sans-serif',
        'inter': '"Inter", sans-serif',
        'poppins':'"Poppins", sans-serif'
      }, 
      colors:{
        'assent-color': 'hsl(199, 89%, 48%)',

        'da-text-color-dark': 'hsl(214, 32%, 91%)',
        'da-text-very-light-gray': 'hsl(215, 20%, 65%)',
        'da-text-color': 'hsl(215, 20%, 65%)',
        'da-text-light-gray':'hsl(215, 20%, 65%)',
        'da-body': 'hsl(223, 49%, 8%)',
        'da-container': 'hsl(222, 47%, 11%)',
        'da-icon': 'hsl(80, 100%, 99%)',
        'da-icon-unavaliable': 'hsl(219, 14%, 60%)',

        'li-text-color': 'hsl(222, 47%, 11%)',
        'li-text-color-gray': 'hsl(215, 25%, 27%)',
        'li-text-light-gray':'hsl(215, 25%, 27%)',
        'li-text-very-light-gray':'hsl(215, 20%, 68%)',
        'li-body': 'hsl(222, 100%, 98%)',
        'li-container': 'hsl(0, 0%, 100%)',
        'li-icon': 'hsl(218, 31%, 45%)',
        'li-icon-unavaliable': 'hsl(216, 29%, 73%)'
      },
      // width:{
      //   '100': ''
      // }
    },
  },
  plugins: [],
}