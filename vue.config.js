module.exports = {
    configureWebpack:{
		externals: {
			vue: 'Vue',
			'vue-router': 'VueRouter',
			axios: 'axios',
			vant: 'vant',
			clipboard: 'Clipboard',
			dplayer: 'DPlayer',
			'hls.js': 'Hls',
			'vue-cookies': '$cookies'
		},
	},

    publicPath: ''
}