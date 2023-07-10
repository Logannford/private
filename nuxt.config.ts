// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/supabase',
		'@nuxtjs/google-fonts',
		'nuxt-swiper',
		'@vueuse/nuxt',
		'@pinia/nuxt',
		"@nuxtjs/prismic",
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
				class: "bg-dark-black w-full"
			},
			link: [
					{
						rel: "stylesheet",
						href: "https://fonts.googleapis.com/css2?family=Work+Sans"
					},
					{
						rel: "stylesheet",
						href: "https://fonts.googleapis.com/css2?family=Corben"
					},
					{
						rel: "stylesheet",
						href: "https://fonts.googleapis.com/css2?family=Solway"
					},
			]
		}
	},
	build: {
		transpile: ['gsap'],
	},
	plugins:[
		
	],
	swiper: {
	},
	pinia: {
		autoImports: [
			'defineStore',
			['defineStore', 'definePiniaStore'] 
		]
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
	components: true,
	pages: true,
	prismic: {
		clientConfig: {
			routes: [
				{
					type: "homepage",
					path: "/",
				}
			]
		},
		endpoint: "addressable",
	},
})