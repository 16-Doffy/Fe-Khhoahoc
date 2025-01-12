/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'radiant': `linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)`,
        'footer-texture': `"url('/img/footer-texture.png')"`,
       
      },
      
    },
  },
  plugins: [],
}