import defaultTheme from "tailwindcss/defaultTheme"

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
		},
	},
	plugins: [],
}
