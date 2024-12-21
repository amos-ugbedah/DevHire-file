/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1D9BF0",
        },
        dark: {
          300: "#14142B",
        },
      },
    },
  },
  plugins: [],
};
