/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // <-- Add this line
      },
      colors: {
      primary: "#00B69D",
    },
    },
  },
  plugins: [],
}
