/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "5rem"
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
    extend: {
      fontSize:{
        title: ["5rem", "4rem"]
      },
      colors: {
        "dark-black": "#1c1c1c",
        "light-black": "#292828",
        "onyx-black": "#3E3E3E"
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwind-container-break-out')
  ],
}

