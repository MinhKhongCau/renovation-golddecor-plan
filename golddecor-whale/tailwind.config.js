/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f4e4a6',
          DEFAULT: '#d4af37',
          dark: '#b8941f',
        },
        black: {
          light: '#1a1a1a',
          DEFAULT: '#0a0a0a',
          dark: '#000000',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'page-turn': 'pageTurn 0.6s ease',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        pageTurn: {
          '0%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(-10deg)' },
          '100%': { transform: 'rotateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}