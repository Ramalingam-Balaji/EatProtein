/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        protein: {
          green: "#0b7a3b",
          dark: "#062d1d",
          lime: "#eaf8df",
          soft: "#f3faed",
          orange: "#ff6900",
          orange2: "#ff7a18",
          text: "#0d1f17"
        }
      },
      boxShadow: {
        soft: "0 14px 40px rgba(15, 76, 42, 0.10)",
        card: "0 8px 24px rgba(17, 55, 35, 0.08)"
      }
    }
  },
  plugins: []
};