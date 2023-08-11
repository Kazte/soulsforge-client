import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},

		},
		colors: {
			content1: '#18181b',
			content2: '#27272a',
			content3: '#3f3f46',
			content4: '#52525b',
			divider: 'rgba(255, 255, 255, 0.15)',
			success: '#17c964',
			warning: '#f5a524',
			danger: '#f31260',
			primary: '#d2691e',
			primaryDark: '#b35c0b',
			primaryLight: '#e07b1a',

		},
	},
	darkMode: "class",
	plugins: [nextui()],
}
export default config
