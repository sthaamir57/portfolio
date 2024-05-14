/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono : ['Roboto Mono'],
        display: ['Nohemi'],
      },
      colors: {
        secondary: '#090909',
        accent: '#42FF00',
      },
      animation: {
        bounce: 'bounce 2s ease-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)'},
          '70%': { transform: 'translateY(5%)'},
        }
      }
    },
  },
  plugins: [],
}

