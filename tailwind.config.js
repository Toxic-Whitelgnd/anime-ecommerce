/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      rajdhani:['Rajdhani', 'sans-serif'],
      glitch:['Rubik Glitch', 'cursive'],
      marker:['Rubik Marker Hatch', 'cursive'],
      wetpaint:['Rubik Wet Paint', 'cursive'],
      silkscreen:['Silkscreen', 'cursive'],
      teko:['Teko', 'sans-serif'],
      dancing:['Dancing Script', 'cursive'],
      kanit:['Kanit', 'sans-serif'],
      lobster:['Lobster', 'cursive'],
    }
  },
  plugins: [],
}
