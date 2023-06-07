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
        "dark-black": "#0A0A0A",
        "light-black": "#1c1c1c",
        "onyx-black": "#3E3E3E"
      },
      boxShadow: {
        "backdrop": "-6px 6px #DADADA, -6px 6px #DADADA, -1px 1px #DADADA",
        "backdrop-lg": "-16px 16px #DADADA, -6px 16px #DADADA, -1px 1px #DADADA"
      },
      translate:{
        "backdrop": "-16px 16px"
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwind-container-break-out')
  ],
}

