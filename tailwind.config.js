
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  fontFamily: {
    space: ['Space Mono', 'monospace', 'sans-serif'],
    deca: ['Lexend Deca', 'Inter', 'sans-serif'],
    app: ['Homemade Apple', 'cursive'],
    out: ['Outfit', 'Inter', 'sans-serif'],
    aut: ['Autour One', 'cursive']
  },
  theme: {
    extend: {},
  },
  plugins: [],
}