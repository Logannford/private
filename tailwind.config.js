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
        xxl: ["4rem", "4rem"],
        title: ["5rem", "4rem"]
      },
      colors: {
        "dark-black": "#0A0A0A",
        "light-black": "#1c1c1c",
        "onyx-black": "#3E3E3E",
        "light-grey": "#B6B6B6"
      },
      boxShadow: {
        "backdrop": "-6px 6px #B6B6B6, -6px 6px #B6B6B6, -1px 1px #B6B6B6",
        "backdrop-lg": "-16px 16px #B6B6B6, -6px 16px #B6B6B6, -1px 1px #B6B6B6"
      },
      transitionProperty:{
        "mega-menu": "opacity .25s,visibility .25s,transform .25s"
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

