/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'soft-white': '#fbfaf5',
				'true-white': '#fcfcff',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
