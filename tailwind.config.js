/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // fontFamily: {
    //   'OleoScript': "url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap');"
    // },
    extend: {
      fontFamily: {
        'OleoScript': ['Oleo Script']
      },
      colors:{
        'laranja-escuro':'#FFD274',
        'laranja-claro':'#FFDD95',
        'azul-escuro':'#2A00A8',
        'azul-claro':'#86A7FC',
        'azul-titulo':'#496989',
        'branco':'#FFFFFF'
      },
      backgroundImage: {
        'logo': "url('./img/search.png')",
        'patas': "url('./img/patas.png')",
        'arranhado': "url('./img/arranhado.png')",

      },
    },
  },
  plugins: [],
}