/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			gridColumn: {
				'span-1/3': '1 / span 3',
				'span-4/3': '4 / span 3',
			},
			gridRowStart: {
				'2/3': '2 / span 3',
			},
		},
	},
	plugins: [],
}
