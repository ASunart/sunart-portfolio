/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "orange": '#FF4900',
      "blue": {
        100: '#0049FF',
        200: '#001B5E'
      },
      "white": '#F9F9F9'

    },
    fontFamily: {
      "lato": ["Lato", "sans-serif"]
    }
  },
  plugins: [],
}

