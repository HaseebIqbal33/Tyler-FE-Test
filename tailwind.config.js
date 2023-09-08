/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#282828",
        grey: "#F1F1F1",
        orange: "#D0631A",
        sliver_black: "#666666",
        silver_grey: "#D9D9D9",
      },
      lineHeight: {
        "extra-loose-80": "80px",
        "extra-loose-50": "50px",
      },
    },
  },
  plugins: [],
};
