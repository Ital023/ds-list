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
      },
      spacing: {
        '18': '4.375rem',
      }
    },
  },
  plugins: [],
}

