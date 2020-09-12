export default {
	/*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
	mode: 'spa',
	/*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
	target: 'static',
	/*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@500&display=swap'
			}
		],
		script: [
			{
				src: 'https://unpkg.com/feather-icons/dist/feather.min.js'
			},
			{
				src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
				integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN ',
				crossorigin: 'anonymous'
			},
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
				integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
				crossorigin: 'anonymous'
			},
			{
				src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
				integrity: 'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
				crossorigin: 'anonymous'
			}
		]
	},
	/*
  ** Global CSS
  */
	css: [ '@/assets/scss/custom.scss', '@/assets/scss/tweaks.scss' ],
	/*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
	plugins: [ { src: '~/plugins/datastore.js', ssr: false } ],
	/*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
	components: true,
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [],
	/*
  ** Nuxt.js modules
  */
	modules: [ 'bootstrap-vue/nuxt' ],
	/*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
	build: {},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	bootstrapVue: {
		bootstrapCSS: false,
		bootstrapVueCSS: false
	}
};
