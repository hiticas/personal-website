const defaultTheme = require('tailwindcss/defaultTheme');
// tailwind.config.js
module.exports = {
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./public/index.html',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
				fontFamily: {
				ubuntu: ['"Ubuntu"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
