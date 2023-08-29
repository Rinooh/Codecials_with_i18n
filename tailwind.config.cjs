/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F6F8EE',
			'orange': '#D6790F',
			'dark-blue': '#00397A',
		},
		fontFamily: {
			'body': ['Orbitron'],
		}
	},
	plugins: [],
}
