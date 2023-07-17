
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
  theme: {
    extend: {
      colors:{
        lightBlue: 'rgb(186,196,227)',
        lightPink: 'rgb(231, 195, 216)',
        darkBlue: 'hsl(218, 44%, 22%)'
      },
      fontFamily: {
        quick: ['Quicksand', 'sans-serif']
      },
    },
  },
  plugins: [],
}