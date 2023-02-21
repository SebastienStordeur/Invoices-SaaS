/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#2b2d42",
        gray: "#8d99ae",
        white: "#edf2f4",
        red: "#ef233c",
        error: "#d90429",
      },
    },
  },
  plugins: [],
};
