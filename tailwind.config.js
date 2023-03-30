/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#f8f8ff",
        textColor: "#171718",
        borderB: "#e6e6fa",
      },
      width: {
        width: "725px",
      },
    },
  },
  plugins: [],
};
