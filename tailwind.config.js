/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#19A974",
        dark: "#111111",
        grayLight: "#f7f7f7"
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.06)" },
      borderRadius: { "2xl": "1.25rem" }
    }
  },
  plugins: []
};
