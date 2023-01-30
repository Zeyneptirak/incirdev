/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors:{
        "content-grey":"#B8B8B8;",
        "content-yellow":"#EAED69",
        "card-bg":"#101010",
        'purple': '#9783D3',
        't-color': '#9089A9;',
        'primary':'#3E00FF',
        'title-color':'#1C0C50',
        'menuLine':  '#3C3C3C',
        'graybg': '#292929',
        'etext': '#B8B8B8',
        'border': '#EFF2F4',
        'right-bg': '#271838'
      },
      fontFamily:{
        "sora":"'Sora', sans-serif"
      },
      backgroundImage:{
        "page-bg":"url('./assets/Arka Plan.svg')"
      }
    },
  },
  plugins: [],
}
