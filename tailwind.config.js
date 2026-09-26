/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#5c2340",
        inksoft: "#8d4a64",
        paper: "#fff7fa",
        blush: {
          50: "#fff8fb",
          100: "#fff0f5",
          200: "#ffe3ee",
          300: "#ffd0e2",
          400: "#f7b4cb",
          500: "#ee8aab",
          600: "#d45378",
          700: "#b43d62",
        },
      },
      fontFamily: {
        sans: ["Kalam", "cursive"],
        display: ["Caveat", "cursive"],
      },
      boxShadow: {
        sketch: "4px 4px 0 #f4a7bf",
        sketchlg: "6px 6px 0 #f4a7bf",
      },
    },
  },
  plugins: [],
}
