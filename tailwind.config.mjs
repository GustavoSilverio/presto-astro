/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			textColor: {
				DEFAULT: "#1A1A1A",
			},
			colors: {
				primary: "#D95204",
				cinza: {
					100: "#F5F5F5",
					800: "#353535",
					900: "#1A1A1A",
				},
			},
			keyframes: {
				"fade-in": {
					from: {
						transform: "translateY(5px)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0px)",
						opacity: "1",
					},
				},
			},
			animation: {
				"fade-in": "fade-in 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
			},
		},
	},
	plugins: [],
}
