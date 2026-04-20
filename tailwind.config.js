/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#D62649'
				},
				cream: {
					50: '#FFFFFF',
					100: '#F6F6F4',
					200: '#ECEBE7',
					300: '#D9D8D2'
				},
				ink: {
					DEFAULT: '#111014',
					700: '#2A272F',
					500: '#4B4752'
				},
				sakura: {
					DEFAULT: '#FF2630',
					soft: '#FF6B72'
				},
				sora: {
					DEFAULT: '#7AA2FF',
					deep: '#3D4AFF'
				},
				mint: {
					DEFAULT: '#9DE8C3'
				},
				sun: {
					DEFAULT: '#FFD166'
				}
			},
			fontFamily: {
				sans: [
					'"Space Grotesk"',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Helvetica Neue"',
					'"Noto Sans JP"',
					'"Hiragino Kaku Gothic ProN"',
					'system-ui',
					'sans-serif'
				],
				display: [
					'"Fraunces"',
					'ui-serif',
					'Georgia',
					'"Hiragino Mincho ProN"',
					'"Noto Serif JP"',
					'serif'
				],
				mincho: [
					'"Noto Serif JP"',
					'"Hiragino Mincho ProN"',
					'ui-serif',
					'serif'
				],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace']
			},
			letterSpacing: {
				hyper: '-0.04em'
			}
		}
	},
	plugins: []
};
