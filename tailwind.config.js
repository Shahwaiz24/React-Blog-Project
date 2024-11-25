/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customNavGreen:"#38CB89",
         customFooterGray: '#6C7275',
        customBgProduct: "#F3F5F7",
        customBgOfferBanner: "#141718",
        customRatingStarNonFill:"#343839"
      },
      firstbannerbg:{
        hero: "url('./home-Images/home-First-Banner-3.png')"
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        poppins: ['Poppins'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }], // For extra-small text
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // For small text
        'base': ['1rem', { lineHeight: '1.5rem' }], // Default size
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // Large text
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
    },
  },
  plugins: [],
}

