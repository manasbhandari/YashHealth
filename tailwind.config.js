/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'photo': 'url(https://raw.githubusercontent.com/manasbhandari/YashHealth/b73c94e11e6a29c1766d55fdbffaa484bf47c7a6/src/Assets/Photo.jpeg?token=GHSAT0AAAAAACMZCXYLGKHJ2A3Q4WR46OT4ZNCWCLQ)'
      }
    },
  },
  plugins: [],
}

