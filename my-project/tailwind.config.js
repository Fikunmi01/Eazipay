/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Aeonik Regular',
        'serif': 'MADE Mellow PERSONAL USE'
      },
      colors: {
        gray: 'rgba(81, 82, 81, 1)',
        darkGreen:'rgba(17, 69, 59, 1)',
        lightBrown:'rgba(180, 165, 114, 1)',
        orange:'rgba(234, 78, 75, 1)',
        darkBrown:'rgba(41, 42, 41, 1)',
        dblack:'rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}
