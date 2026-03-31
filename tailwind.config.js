/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        creme: "#F8F5F0",
        softGreen: "#EAF4EF",
        pistaGreen: "#A8CBB7",
        deepBlue: "#1E3A5F",
        gold: "#C8A96A"
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif']
      }
    },
  },
  plugins: [],
}
