/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        mulish: ['Mulish', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}