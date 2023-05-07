/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        santral: ["Santral"],
        santralBook: ["Santral Book"],
      },
      colors: {
        black: "#161616",
        darkGray: "#222222",
        light: "#F5F5F5",
        purple: "#B25BC0",
        teal: "#5BBEC0",
        yellow: "#C0B65B",
        clay: "#C0735B",
        green: "#75C05B",
      },
    },
  },
  plugins: [],
};
