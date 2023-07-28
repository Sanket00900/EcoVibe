/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "blue-300": "#93c5fd",
      "blue-400": "#1fb6ff",
      "blue-700": "#1d4ed8",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      "green-500": "#10b981",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      white: "#ffffff",
      "gray-light": "#d3dce6",
      bg: "#111926",
      "card-bg": "#1f2836",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        guide: "url('../assets/guide-bg.jpg')",
      },
    },
  },
  plugins: [{ cassano: {} }],
};
