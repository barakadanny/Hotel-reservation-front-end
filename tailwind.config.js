/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#10B981',
        primaryColorRgba: 'rgb(16, 185, 129, 0.2)',
        textColor: '#1b1c57',
        redColor: '#EF4444',
        redBgColor: '#FEE2E2',
        smallTextColor: '#f59e0b',
        paragraphColor: '#626687',
        addressColor: '#888B97',
        customerNameColor: '#0E1735',
        customGray100: '#888B97',
        customGray100Rgba: 'rgb(136, 139, 151, 0.2)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

