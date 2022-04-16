const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.8rem",
        sm: "1rem",
        lg: "1rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
    extend: {
      boxShadow: {
        md: "0px 0px 20px 0px rgba(76, 87, 125, 0.02)",
        lg: "0px 10px 30px 0px rgba(82, 63, 105, 0.05)",
        smooth: "0 0 50px 0 rgb(82 63 105 / 15%)",
      },
      colors: {
        primary: colors.sky,
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
