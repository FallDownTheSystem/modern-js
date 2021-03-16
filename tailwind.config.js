module.exports = {
	purge: ['./index.html', './vite.config.js', './src/**/*.{js,vue,md}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
