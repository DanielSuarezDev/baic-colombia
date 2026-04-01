/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
				tomaso: ['Tomaso', 'sans-serif'],
				jura: ['Jura', 'sans-serif'],
			},
			colors: {
				brand: {
					primary: '#000000',
					secondary: '#4B5563',
					accent: '#EF4444',
					light: '#F3F4F6',
					dark: '#020617',
					black: '#000000',
					white: '#FFFFFF',
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
			},
			keyframes: {
				fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
				slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
			},
		},
	},
	plugins: [],
}
