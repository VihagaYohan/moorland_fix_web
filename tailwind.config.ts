/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B4513", // Brown
          foreground: "#ffffff", // Text/icon color on primary buttons
        },
      },
    },
  },
  plugins: [],
};
