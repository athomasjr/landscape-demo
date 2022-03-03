const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.liquid'],
	theme: {
		extend: {
			backgroundImage: {
				hero: `url('/assets/images/hero-min.jpeg')`,
			},
			colors: {
				'background-white': '#F5F5F5',
				'background-jet': '#31302B',
				'primary-dark-green': '#22613E',
				'primary-green': '#358A35',
				'accents-red': '#E35E5E',
				'accents-orange': '#FF9738',
				'mint-cream': '#F2F7F0',
			},

			fontFamily: {
				sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
				logo: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
