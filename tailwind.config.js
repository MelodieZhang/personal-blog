// https://tailwindcss.com/docs/configuration
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // https://tailwindcss.com/docs/customizing-colors
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: colors.black,
        dark: colors.white,
      },
      secondary: {
        DEFAULT: colors.coolGray[600],
        dark: colors.coolGray[100],
      },
      third: {
        DEFAULT: colors.coolGray[400],
        dark: colors.coolGray[200],
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus", "active"],
      borderColor: ["focus", "active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
