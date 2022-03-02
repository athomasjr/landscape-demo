module.exports = {
	content: ['./src/**/*.liquid'],
	theme: {
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				hero: `url('/assets/images/hero-min.jpeg')`,
			},
			colors: {
				'background-white': '#F5F5F5',
				'background-jet': '#31302B',
			},
		},
	},
	plugins: [],
}
