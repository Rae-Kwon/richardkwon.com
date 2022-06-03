const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Montserrat", ...defaultTheme.fontFamily.sans],
        subheadings: ["Open Sans", ...defaultTheme.fontFamily.sans],
        text: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "450px",
        "3xl": "1830px",
      },
      colors: {
        "midnight-blue": "#191970",
        "midnight-dirt": "#220113",
        "dark-cerulean": "#0F5076",
        "light-cyan": "#DDFEEC",
      },
      boxShadow: {
        xl: "0 0 100px",
      },
      spacing: {
        "5p": "5%",
      },
      minWidth: {
        "200vmin": "200vmin",
      },
      gap: {
        "8p": "8%",
      },
      height: {
        240: "60rem",
        "6/7": "90%",
        "1/7": "10%",
      },
      inset: {
        22: "5.5rem",
        "95px": "95px",
      },
      margin: {
        "1/4": "50%",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
