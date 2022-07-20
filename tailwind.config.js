/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: { 
        "main-bg": "#FAFBFB",
      "main-dark-bg": "#20232A",
      "secondary-dark-bg": "#33373E",
    },
    },
  },
  plugins: [],
});
