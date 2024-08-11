/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      transform: {
        'rotate-y-180': 'rotateY(180deg)',
      },
      'transform-style': {
        '3d': 'preserve-3d',
      },
      'backface-hidden': {
        'backface-visibility': 'hidden',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.perspective': {
          perspective: '1000px',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      });
    },
  ],
}

