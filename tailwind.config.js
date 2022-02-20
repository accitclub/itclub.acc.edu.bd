const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./assets/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sxs': '345px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#8eee9b",
        clrHeading: "#111827",
        clrsSubheading: "",
        clrText: "#5c5e62",
        bgDark: "#eeebf2",
        bgLight: "#f1f1f2",
      }
    },
  },
  plugins: [],
}
