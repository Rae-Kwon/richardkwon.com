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
        200: "50rem",
        "6/7": "85.7142857%",
        "1/7": "14.2857143%",
      },
      inset: {
        22: "5.5rem",
        "95px": "95px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
