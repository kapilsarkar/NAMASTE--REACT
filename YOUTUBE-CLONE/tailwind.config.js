/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'media338': '338px',
        'media510': '510px',
      }
    },
  },
  plugins: [],
}

