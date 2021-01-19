// https://tailwindcss.com/docs/configuration
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus", "active"],
      borderColor: ["focus", "active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
