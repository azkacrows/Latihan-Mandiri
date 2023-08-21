/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    }, 
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#0f172a',
        teritary: '#475569'
      },
      screen: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

