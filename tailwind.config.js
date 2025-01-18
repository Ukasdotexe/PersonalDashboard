/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0075ff",
        "primary-shade": "#0d69d5",
        "orange-color": "#f59e0b",
        "green-color": "#22c55e",
        "red-color": "#f44336",
        "grey-color": "#888",
      },

      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
      },
      screens: {
        "md-down": { max: "768px" }, // Applies to medium and smaller screens
      },
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }, // Moves down by 10px
        },
        bgToggle: {
          "0%, 100%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "#0075ff " },
        },
      },
      animation: {
        bounceInfinite: "bounceY 0.8s ease-in-out infinite",
        "bg-toggle": "bgToggle 2s infinite",
      },
    },
  },
  plugins: [],
};
