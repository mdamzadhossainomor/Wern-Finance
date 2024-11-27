/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/theme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#772AB3",
        
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

