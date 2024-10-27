/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3EC1D3",
        secondary: "#111111",
      },
    },
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C",
          primary: {
            DEFAULT: "#3EC1D3",
            foreground: "#FFFFFF",
          },
          content1: "#FFFFFF",
          content2: "#F9FAFB",
          content3: "#F3F4F6",
          content4: "#E5E7EB",
        },
      },
    },
  })],
};