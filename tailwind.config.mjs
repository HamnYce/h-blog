/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography')
	],
	daisyui: {
		themes: [
			{
				lavender: {
					primary: '#6f5fa8',
					'primary-content': '#ffffff',
					secondary: '#9b8cd0',
					'secondary-content': '#ffffff',
					accent: '#7d93cf',
					'accent-content': '#ffffff',
					neutral: '#4a4266',
					'neutral-content': '#f3f0fb',
					'base-100': '#faf8ff',
					'base-200': '#f0ecfa',
					'base-300': '#e0d9f2',
					'base-content': '#312b47',
					info: '#6f9dc4',
					success: '#5fa583',
					warning: '#b8862f',
					error: '#c4677c',
				},
			},
			{
				'lavender-dark': {
					primary: '#b3a4e0',
					'primary-content': '#1c1a28',
					secondary: '#8d7fc4',
					'secondary-content': '#1c1a28',
					accent: '#93a9e0',
					'accent-content': '#1c1a28',
					neutral: '#2f2b40',
					'neutral-content': '#ddd8ee',
					'base-100': '#1c1a28',
					'base-200': '#242133',
					'base-300': '#2f2b40',
					'base-content': '#ddd8ee',
					info: '#8ab6d6',
					success: '#9fd6b4',
					warning: '#e8c07d',
					error: '#e39aa8',
				},
			},
		],
		darkTheme: 'lavender-dark',
	},
}
