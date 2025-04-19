export default {
  darkMode: 'class', // ✅ must be 'class'
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './public/index.html'
  ],

  theme: {
    extend: {
      animation: {
        float: 'float 8s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: []
}
