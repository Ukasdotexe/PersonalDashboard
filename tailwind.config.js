/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/dashboard.html"],
  theme: {
    extend: {
      colors:{
        'primary': '#0075ff',
        'primary-shade': '#0d69d5',
        'orange-color': '#f59e0b',
        'green-color': '#22c55e',
        'red-color': '#f44336',
        'grey-color': '#888',
      },
      fontFamily:{
        roboto:['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

