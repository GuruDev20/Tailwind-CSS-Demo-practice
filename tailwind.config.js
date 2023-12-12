/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      margin:{
        1:'14px',
        2:'16px',
        3:'18px',
        4:'20px'
      },
      colors: {
        vuejs: "#49e659",
      },
    },
  },
  plugins: [],
};
