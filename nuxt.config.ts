// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app:{
		head: {
			meta: [
				{
					"name": "viewport",
					"content": "width=device-width, initial-scale=1"
				}
			],
			bodyAttrs: {
				class: "bg-gray-700 w-full h-screen grid place-items-center"
			}
		}
	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	components: true,
})
