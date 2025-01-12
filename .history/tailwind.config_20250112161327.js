/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'radiant': "url('/img/hero-pattern.svg')",
        'footer-texture': `linear-gradient(to right, #e66465, #9198e5);`,
      },
    },
  },
  plugins: [],
}