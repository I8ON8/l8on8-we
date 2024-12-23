/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px 10px rgba(255, 255, 255, 0.1)',
          },
          '50%': {
            'box-shadow': '0 0 30px 15px rgba(255, 255, 255, 0.2)',
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};