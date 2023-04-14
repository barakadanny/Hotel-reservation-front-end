/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#10B981',
        textColor: '#1b1c57',
        smallTextColor: '#f59e0b',
        paragraphColor: '#626687',
        addressColor: '#888B97',
        customerNameColor: '#0E1735'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

