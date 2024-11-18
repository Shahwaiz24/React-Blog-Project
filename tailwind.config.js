/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customNavGreen:"#38CB89"
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

