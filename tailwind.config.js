/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#55BC04',
        secondary: '#C2C2C2',
        tertiary: '#FFFFFF',
        quartenary: '#6F6F6F'
      },
      spacing: {
        '18': '4.375rem',
        '50': '12.5rem',
      }
    },
  },
  plugins: [],
}

