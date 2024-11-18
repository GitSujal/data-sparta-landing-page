/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
          divider: "#E5E7EB",
          focus: "#3EC1D3",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      dark: {
        colors: {
          background: "#0D1117",
          foreground: "#FFFFFF",
          primary: {
            DEFAULT: "#3EC1D3",
            foreground: "#FFFFFF",
          },
          content1: "#161B22",
          content2: "#21262D",
          content3: "#30363D",
          content4: "#484F58",
          divider: "#30363D",
          focus: "#3EC1D3",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    },
  })],
};