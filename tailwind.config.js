/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paleWhite: "rgba(255, 255, 255, 0.1)",
        startMenu: "rgb(33 33 33 / 82%)",
        defaultDarkColor: "#272727",
        secondaryDarkColor: "#1A2030",
        thirdDarkColor: "#020B1A",
        placeholderColor: "#9c9191",
      },
    },
  },
  plugins: [],
};
