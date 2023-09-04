import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#E0273A",
          }
        },
      },
      light: {
        colors: {
          primary: {
            DEFAULT: "#E0273A",
          },
          content1: {
            DEFAULT: "#e4e4e7",
          },
          content2: {
            DEFAULT: "#d4d4d8",
          },
          content3: {
            DEFAULT: "#a1a1aa",
          },
          content4: {
            DEFAULT: "#88888a",
          },
        },
      }
    }
  })],
}

