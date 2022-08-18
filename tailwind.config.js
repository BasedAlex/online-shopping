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
			gridTemplateColumns: {
				// For cart box
				cart: '3fr 1fr 1fr 1fr',
			},
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1440px',
			// => @media (min-width: 1440px) { ... }

			'2xl': '1920px',
			// => @media (min-width: 1920px) { ... }
		},
	},
	plugins: [],
}
