/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      cocogoose: ["Cocogoose", "sans-serif"],
      cocogoosebold: ["CocogooseBold", "sans-serif"],
    },
    extend: {
      colors: {
        bg: {
          900: "#717171",
          800: "#717171",
          700: "#717171",
          600: "#555555",
          500: "#444444",
          400: "#363636",
          300: "#262626",
          200: "#1D1D1D",
          100: "#101010",
        },
        textcol: {
          normal:"#FFFFFF",
          link:"#E90000",
        },
        highlight: {
          800: "#6A0000",
          600: "#5b0000",
          400: "#290000",
          200: "#290000",
        }
      }
    },
  },
  plugins: [],
}

