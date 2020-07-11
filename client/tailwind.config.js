module.exports = {
	purge: {
		enabled: true,
		content: ["./src/components/*.js"],
	},
	theme: {
		extend: {
			colors: {
				dark: "#191919",
				primary: "#FECE2F",
				neutralgray: "#F0F0EF",
			},
		},
	},
	variants: {},
	plugins: [],
};
