// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/supabase',
		'@nuxtjs/google-fonts',
		'nuxt-swiper'
	],
	app:{
		head: {
			meta: [
				{
					"name": "viewport",
					"content": "width=device-width, initial-scale=1"
				}
			],
			bodyAttrs: {
				class: "bg-gray-950 w-full h-screen"
			}
		}
	},
	swiper: {

	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	googleFonts: {
		download: true
	},
	components: true,
	pages: true,

})
