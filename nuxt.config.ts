// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/supabase',
		'@nuxtjs/google-fonts',
		'nuxt-swiper',
		'@vueuse/nuxt',
		'@pinia/nuxt'
	],
	app:{
		layoutTransition: { 
			name: 'layout', 
			mode: 'out-in' 
		},
		head: {
			meta: [
				{
					"name": "viewport",
					"content": "width=device-width, initial-scale=1"
				}
			],
			bodyAttrs: {
				class: "bg-dark-black w-full h-screen overflow-hidden"
			}
		}
	},
	swiper: {

	},
	runtimeConfig:{
		supabase_db_url: "",
		supabase_db_anon_key: ""
	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	googleFonts: {
		download: true,
		families: {
			Roboto: true,
			'Josefin+Sans': true,
			Lato: [100, 300],
			Raleway: {
			wght: [100, 400],
			ital: [100]
			},
		}
	},
	components: true,
	pages: true,

})
