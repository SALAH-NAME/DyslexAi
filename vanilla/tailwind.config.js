/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'ghibotalk': ['GhiboTalk', 'sans-serif'],
        'valoon': ['Valoon', 'sans-serif'],
        'varelaround': ['VarelaRound', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-border-white': {
          textShadow: '-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

