/** @type {import('tailwindcss').Config} */
module.exports = {
  css: [
    `.v-enter-active,
    .v-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }`
  ],
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
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

