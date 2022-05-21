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
      },
      colors: {
        "midnight-blue": "#191970",
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
    },
  },
  darkMode: "class",
  plugins: [],
};
